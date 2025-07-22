import { useEffect, useState } from "react";
import PopularCard from "../components/PopularCard";
import styles from "./Popular.module.css";

function Popular() {
  const [tv, setTv] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    const fetchTv = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setTv(data.results || []);
      } catch (err) {
        setError(err);
        console.error("Failed to fetch TV shows:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchTv();
  }, []);

  if (error) return <p>Error loading shows: {error.message}</p>;

  return (
    <div className={styles.popularContainer}>
      <h6> Most Popular</h6>
      <section>
        <div>
          {tv.map((show) => (
            <PopularCard key={show.id} item={show} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Popular;
