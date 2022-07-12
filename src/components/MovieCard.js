import React from "react";

const MovieCard = (props) => {
  return (
    <>
      {props.movies.map((movie, index) => (
        <div className="movie-card" data-genre={movie.Genre}>
          <img src={movie.Poster} alt="movie"></img>
          <h5 className="mt-2 movie-card__title">{movie.Title}</h5>
          <p className="movie-card__runtime">Runtime: {movie.Runtime}</p>
          <p className="movie-card__rating">Rating: {movie.imdbRating} / 10</p>
          <p className="movie-card__streaming">
            Streaming On: {movie.Streaming}
          </p>
        </div>
      ))}
    </>
  );
};

export default MovieCard;
