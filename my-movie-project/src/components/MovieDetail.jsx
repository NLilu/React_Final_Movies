import React from "react";
import styles from "./MovieDetail.module.css";

export default function MovieDetail({ item }) {
  if (!item) {
    return <p>No movie/TV show data available.</p>;
  }

  const imageUrl = item.poster_path
    ? `https://image.tmdb.org/t/p/w500${item.poster_path}`
    : "https://placehold.co/150x225/3A3A3A/FFFFFF?text=No+Poster";

  const genres = item.genres
    ? item.genres.map((genre) => genre.name).join(", ")
    : "N/A";

  const rating = item.vote_average
    ? `${item.vote_average.toFixed(1)}/10`
    : "N/A";

  let runtime = "N/A";
  if (item.runtime) {
    const hours = Math.floor(item.runtime / 60);
    const minutes = item.runtime % 60;
    runtime = `${hours}h ${minutes}m`;
  } else if (item.episode_run_time && item.episode_run_time.length > 0) {
    const avgRuntime = item.episode_run_time[0];
    const hours = Math.floor(avgRuntime / 60);
    const minutes = avgRuntime % 60;
    runtime = `${hours}h ${minutes}m (per episode)`;
  }

  const status = item.status || "N/A";
  const overview = item.overview || "No overview available.";

  return (
    <section className={styles.movieDetailContainer}>
      <div className={styles.movieDetailImage}>
        <img src={imageUrl} alt={item.title || item.name} />
      </div>

      <div className={styles.movieDetailInfo}>
        <h6>Genres: {genres}</h6>
        <h6> Rating: {rating}</h6>
        <h6> Runtime: {runtime}</h6>
        <h6> Status: {status}</h6>
        <h6> Overview:</h6>
        <p>{overview}</p>
      </div>
    </section>
  );
}
