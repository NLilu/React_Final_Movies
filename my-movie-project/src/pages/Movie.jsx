import { useEffect, useState } from "react";
import Filter from "../components/Filter";
import MovieCard from "../components/MovieCard";
import Popular from "../components/Popular";

function Movie() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  const [filters, setFilters] = useState({
    type: "movie",
    year: "",
    sortBy: "popularity.desc",
  });

  const fetchMedia = async ({ type, year, sortBy }) => {
    const baseURL =
      type === "movie"
        ? "https://api.themoviedb.org/3/discover/movie"
        : "https://api.themoviedb.org/3/discover/tv";

    const url = new URL(baseURL);
    url.searchParams.append("api_key", API_KEY);
    url.searchParams.append("sort_by", sortBy || "popularity.desc");

    if (year) {
      const yearParam =
        type === "movie" ? "primary_release_year" : "first_air_date_year";
      url.searchParams.append(yearParam, year);
    }

    try {
      setLoading(true);
      const response = await fetch(url.toString());
      if (!response.ok)
        throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setMovies(data.results || []);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMedia(filters);
  }, []);

  const handleFilters = (newFilters) => {
    const updated = { ...filters, ...newFilters };
    setFilters(updated);
    fetchMedia(updated);
  };

  return (
    <div className="flex">
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
            {movies.map((movie) => (
              <MovieCard key={movie.id} item={movie} mediaType="movie" />
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

export default Movie;
