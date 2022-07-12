import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "jquery/dist/jquery.slim";
// import $ from "jquery";
import "./css/movieList.css";
import MovieListHeading from "./components/MovieListHeading";
import movieList from "./movie-storage";
import Filters from "./components/Filters";
import StreamingStamps from "./components/StreamingStamps";

function App() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="container-fluid movie-list">
      <div className="row d-flex movie-list__header">
        <div className="movie-list__header--top">
          <MovieListHeading heading="Massive Movie Collection" />
          <div className="col col-sm-4">
            <input
              className="form-control"
              type="text"
              placeholder="Search by Title..."
              onChange={(event) => {
                setSearchTerm(event.target.value);
              }}
            />
          </div>
        </div>
        <Filters />
      </div>

      <div className="movie-list__container--top">
        <div className="movie-card__container">
          {movieList
            .filter((movie) => {
              if (searchTerm == "") {
                return movie;
              } else if (
                movie.Title.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return movie;
              }
            })
            .map((movie, key) => {
              return (
                <div
                  className="movie-card"
                  data-genre={movie.Genre}
                  data-streaming={movie.Streaming}
                  data-van-ready={movie.VanReady}
                >
                  <div className="movie-card__poster">
                    <img src={movie.Poster} alt="movie poster"></img>
                  </div>
                  <StreamingStamps />
                  <h5 className="mt-2 movie-card__title">{movie.Title}</h5>
                  <div className="movie-card__runtime">
                    Runtime: {movie.Runtime}
                  </div>
                  {/* <div className="movie-card__rated">{movie.Rated}</div>
                  <div className="movie-card__rating">{movie.imdbRating}</div> */}
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default App;
