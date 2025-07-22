import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import MovieCard from "../components/MovieCard";
import Popular from "../components/Popular";

function TvShow() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const [filters, setFilters] = useState({
    type: "tv",
    year: "",
    sortBy: "popularity.desc",
  });

  const fetchData = async ({ type, year, sortBy }) => {
    const isMovie = type === "movie";
    const baseURL = isMovie
      ? "https://api.themoviedb.org/3/discover/movie"
      : "https://api.themoviedb.org/3/discover/tv";

    const url = new URL(baseURL);
    url.searchParams.append("api_key", API_KEY);
    url.searchParams.append("sort_by", sortBy);
    if (year) {
      url.searchParams.append(
        isMovie ? "primary_release_year" : "first_air_date_year",
        year
      );
    }

    try {
      setLoading(true);
      const response = await fetch(url.toString());
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setItems(data.results || []);
    } catch (err) {
      setError(err);
      console.error("Failed to fetch:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(filters);
  }, []);

  const handleFilters = (newFilters) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    fetchData(updated);
  };

  return (
    <div className="flex container">
      <aside className="filter">
        <Filter onApplyFilters={handleFilters} mediaType={filters.type} />
      </aside>
      <section className="movieContainer">
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Error: {error.message}</p>
        ) : (
          <div className="movieGrid">
            {items.map((item) => (
              <MovieCard key={item.id} item={item} mediaType="tv" />
            ))}
          </div>
        )}
      </section>
      <aside className="popular">
        <Popular />
      </aside>
    </div>
  );
}

export default TvShow;
