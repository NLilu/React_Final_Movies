import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "../components/MovieCard";

export default function Results() {
  const [searchParams] = useSearchParams();

  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const query = searchParams.get("query");

  useEffect(() => {
    if (!query) return;

    async function fetchResults() {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/search/multi?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }&query=${encodeURIComponent(query)}`
        );

        const data = await res.json();
        setResults(data.results || []);
      } catch (err) {
        console.error("Error fetching search results:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchResults();
  }, [query]);

  return (
    <div className="flex">
      <h5>
        {" "}
        Search results for: <em>{query}</em>
      </h5>

      {loading && <p>Loading...</p>}

      {!loading && results.length === 0 && <p>No results found.</p>}

      <div className="movieGrid">
        {results
          .filter(
            (item) => item.media_type === "movie" || item.media_type === "tv"
          )
          .map((item) => (
            <MovieCard key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
}
