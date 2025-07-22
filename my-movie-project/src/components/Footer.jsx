import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import tmdbLogo from "/src/assets/tmdbShort.svg";
import React from "react";

export default function Footer() {
  return (
    <footer className={`${styles.footer} container`}>
      <p>&copy; 2025 Final Movies. All rights reserved.</p>
      <nav className={styles.navigation}>
        <Link to="/privacy-policy">Privacy Policy</Link>
        <Link to="/terms-of-service">Terms of Service</Link>
        <Link to="/contact-us">Contact Us</Link>
      </nav>
      <div>
        <a href="https://www.themoviedb.org/about/logos-attribution">
          <img src={tmdbLogo} alt="tmdb logo" />
        </a>
      </div>
    </footer>
  );
}
