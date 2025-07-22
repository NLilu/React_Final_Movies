import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={`${styles.header} container`}>
      <Link to="/" className={styles.headerLogoLink}>
        <div className={styles.headerLogo}>Final Movies</div>
      </Link>
      <nav className={styles.navigation}>
        <Link to="/">Home</Link>
        <Link to="/movie">Movie</Link>
        <Link to="/tv">TV Shows</Link>
      </nav>
    </header>
  );
}
