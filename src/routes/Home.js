import React, { useEffect, useState } from "react";
import Movie from "../components/Movie";
import "../css/Home.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="home-container">
      {loading ? (
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      ) : (
        <>
          <h1 className="intro-text">📽️ HIGHLY RATED MOVIES</h1>
          <div className="movie-container">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
                large_cover_image={movie.large_cover_image}
                rating={movie.rating}
              />
            ))}
          </div>
          <a
            href="https://www.themoviedb.org/movie/top-rated?language=ko-KR"
            target="_blank"
            rel="noopener noreferrer"
            className="make-text"
          >
            🎃 WATCH ANOTHER MOVIE 🎃
          </a>
        </>
      )}
    </div>
  );
}

export default Home;
