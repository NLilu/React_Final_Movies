import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import { FaSearch } from "react-icons/fa";

export default function Home() {
  const [query, setQuery] = useState("");
  const [popularItems, setPopularItems] = useState([]);
  const navigate = useNavigate();
  const apiKey = import.meta.env.VITE_TMDB_API_KEY;

  useEffect(() => {
    async function fetchPopular() {
      try {
        const res = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${
            import.meta.env.VITE_TMDB_API_KEY
          }`
        );
        const data = await res.json();
        setPopularItems(data.results.slice(0, 4));
      } catch (err) {
        console.error("Failed to fetch popular movies", err);
      }
    }
    fetchPopular();
  }, []);

  function handleSearch(e) {
    e.preventDefault();
    if (!query.trim()) return;
    navigate(`/results?query=${encodeURIComponent(query.trim())}`);
  }

  function handlePopularClick(title) {
    navigate(`/results?query=${encodeURIComponent(title)}`);
  }

  function goToMoviePage() {
    navigate("/movie");
  }

  return (
    <main className={`${styles.landingPage} container`}>
      <h1 className={styles.title}>Final Movies</h1>
      <p>Search for your favorite movies and TV series</p>

      <form onSubmit={handleSearch} className={styles.searchForm}>
        <input
          type="text"
          placeholder="Search for a movie or TV show..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className={`${styles.searchBtn} btn-primary`}>
          <FaSearch />
        </button>
      </form>

      {popularItems.length > 0 && (
        <>
          <p className={styles.topSearchTitle}>Top Searches:</p>
          <div className={styles.topSearches}>
            {popularItems.map((item) => (
              <button
                key={item.id}
                className="btn btn-secondary"
                onClick={() => handlePopularClick(item.title || item.name)}
              >
                {item.title || item.name}
              </button>
            ))}
          </div>
        </>
      )}

      <button
        onClick={goToMoviePage}
        className={`${styles.watchButton} btn btn-primary`}
      >
        Watch Movies &rarr;
      </button>
    </main>
  );
}
