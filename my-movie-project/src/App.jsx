import React, { useEffect, useState } from "react";
import { Routes, Route, useParams } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import TvShow from "./pages/TvShow";
import Results from "./pages/Results";
import MovieDetail from "./components/MovieDetail";
import PrivacyPolicy from "./pages/PrivacyPolicy.jsx";
import Terms from "./pages/Terms.jsx";
import ContactUs from "./pages/ContactUs.jsx";

export default function App() {
  function MovieDetailWrapper({ type }) {
    const { id } = useParams();
    const [detailItem, setDetailItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

    useEffect(() => {
      const fetchDetail = async () => {
        if (!id || !type) {
          setLoading(false);
          return;
        }

        setLoading(true);
        setError(null);
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/${type}/${id}?api_key=${API_KEY}`
          );
          if (!response.ok) {
            throw new Error(
              `HTTP error! status: ${response.status} for ${type} ID ${id}`
            );
          }
          const data = await response.json();
          setDetailItem(data);
        } catch (err) {
          setError(err);
          console.error("Failed to fetch detail:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchDetail();
    }, [id, type, API_KEY]);

    if (loading) return <p>Loading details...</p>;
    if (error) return <p>Error loading details: {error.message}</p>;
    if (!detailItem) return <p>No details found for ID: {id}</p>;

    return <MovieDetail item={detailItem} />;
  }

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv" element={<TvShow />} />
        <Route path="/results" element={<Results />} />
        <Route
          path="/movie/:id"
          element={<MovieDetailWrapper type="movie" />}
        />
        <Route path="/tv/:id" element={<MovieDetailWrapper type="tv" />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<Terms />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}
