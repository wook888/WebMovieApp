import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Movie.css";

function Movie({ id, coverImg, title, rating }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleMouseEnter = () => {
    setIsFlipped(true);
  };

  const handleMouseLeave = () => {
    setIsFlipped(false);
  };

  return (
    <div
      className={`movie ${isFlipped ? "flipped" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link to={`/movie/${id}`} className="movie-link">
        <div className="flip-container">
          <div className="flipper">
            <div className="front">
              <img className="movie-poster" src={coverImg} alt={title} />
            </div>
            <div className="back"></div>
          </div>
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{title}</h3>
          {isFlipped && <div className="hover-rating">{rating}</div>}
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Movie;
