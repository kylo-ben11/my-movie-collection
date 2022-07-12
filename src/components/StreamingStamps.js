import React from "react";

const StreamingStamps = () => {
  return (
    <div className="movie-card__streaming">
      <div className="movie-card__stamp movie-card__stamp--vudu">V</div>
      <div className="movie-card__stamp movie-card__stamp--primeVideo">PV</div>
      <div className="movie-card__stamp movie-card__stamp--moviesAnywhere">
        MA
      </div>
      <div className="movie-card__stamp movie-card__stamp--iTunes">i</div>
      <div className="movie-card__stamp movie-card__stamp--bluRay">B</div>
      <div className="movie-card__stamp movie-card__stamp--dvd">D</div>
    </div>
  );
};

export default StreamingStamps;
