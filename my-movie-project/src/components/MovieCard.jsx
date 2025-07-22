import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MovieCard.module.css";

export default function MovieCard({ item, mediaType }) {
  const navigate = useNavigate();

  const imageUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : "https://placehold.co/150x225/3A3A3A/FFFFFF?text=No+Poster";

  const releaseYear =
    (item.release_date && item.release_date.substring(0, 4)) ||
    (item.first_air_date && item.first_air_date.substring(0, 4)) ||
    "N/A";

  const type = mediaType || (item.media_type === "tv" ? "tv" : "movie");

  function handleCardClick() {
    navigate(`/${type}/${item.id}`);
  }

  return (
    <section
      className={styles.MovieCardContainer}
      onClick={handleCardClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <img src={imageUrl} alt={item.title || item.name} />
      <div className={styles.MovieCardTitle}>
        <h6>{item.title || item.name}</h6>
        <p>{releaseYear}</p>
      </div>
    </section>
  );
}
