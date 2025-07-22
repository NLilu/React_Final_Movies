import React from "react";
import styles from "./PopularCard.module.css";
import { useNavigate } from "react-router-dom";

export default function PopularCard({ item, mediaType }) {
  const navigate = useNavigate();

  const type =
    mediaType || item.media_type || (item.first_air_date ? "tv" : "movie");

  const imageUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : "https://via.placeholder.com/150";

  const title = item.title || item.name || "Unknown Title";

  const releaseYear =
    item.release_date?.substring(0, 4) ||
    item.first_air_date?.substring(0, 4) ||
    "N/A";

  function handleCardClick() {
    navigate(`/${type}/${item.id}`);
  }

  return (
    <section
      className={styles.popularCard}
      onClick={handleCardClick}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div className={styles.popularCardImage}>
        <img src={imageUrl} alt={title} />
      </div>
      <div className={styles.popularCardTitle}>
        <p>{title}</p>
        <p>{releaseYear}</p>
      </div>
    </section>
  );
}
