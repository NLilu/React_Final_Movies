import { useState } from "react";
import styles from "./filter.module.css";

export default function Filter({ onApplyFilters, mediaType: initialType }) {
  const [type, setType] = useState(initialType || "movie");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedSortBy, setSelectedSortBy] = useState("popularity.desc");

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: currentYear - 1949 },
    (_, i) => currentYear - i
  );

  const sortOptions = [
    { value: "popularity.desc", label: "Popularity desc." },
    { value: "popularity.asc", label: "Popularity asc." },
    { value: "vote_average.desc", label: "Rating desc." },
    { value: "vote_average.asc", label: "Rating asc." },
    { value: "title.asc", label: "Name (A-Z)" },
    { value: "title.desc", label: "Name (Z-A)" },
  ];

  const handleApplyClick = () => {
    const filters = {
      type,
      year: selectedYear,
      sortBy: selectedSortBy,
    };
    onApplyFilters(filters);
  };

  return (
    <aside className={`${styles.filterContainer} filter`}>
      <h4 className={styles.filterTitle}>Filter</h4>
      <div className={styles.filterGroup}>
        <h6>Type</h6>
        <div className={styles.filterButtons}>
          {["movie", "tv"].map((item) => (
            <button
              key={item}
              type="button"
              className={`${styles.filterButtons} ${
                type === item ? styles.active : ""
              }`}
              onClick={() => setType(item)}
            >
              {item === "movie" ? "Movie" : "TV Show"}
            </button>
          ))}
        </div>
        <hr />
      </div>

      <div>
        <h6>Year</h6>
        <select
          className={styles.filterSelect}
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
        >
          <option value="">Any Year</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <hr />
      </div>

      <div>
        <h6>Sort By</h6>
        <select
          className={styles.filterSelect}
          value={selectedSortBy}
          onChange={(e) => setSelectedSortBy(e.target.value)}
        >
          {sortOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <button className={styles.applyButton} onClick={handleApplyClick}>
        Apply Filters
      </button>
    </aside>
  );
}
