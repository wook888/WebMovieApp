import React, { useEffect, useState, useCallback } from "react";
import { useParams, Link } from "react-router-dom";
import "../css/Detail.css";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState({});

  const getMovie = useCallback(async () => {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    const json = await response.json();
    const data = json.data.movie;
    setMovie(data);
    console.log(json);
  }, [id]);

  useEffect(() => {
    const fetchData = async () => {
      await getMovie();
    };
    fetchData();
  }, [getMovie]);

  return (
    <div className="detail-container">
      <div className="background"></div>
      <div className="content">
        <h1 className="title">{movie.title_long}</h1>
        <div className="genre">Genre: {movie.genres}</div>
        <div className="rating">Movie rating ⭐️ {movie.rating}</div>
        <div className="description">{movie.description_full}</div>
        <img src={movie.large_cover_image} alt="" className="cover-image" />
        <Link to="/" className="go-back-link">
          Go Back
        </Link>
      </div>
    </div>
  );
}

export default Detail;
