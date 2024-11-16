import React from 'react';
// import './MovieList.css';

function MovieList({ movies, onMovieClick }) {
  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => (
          <div
            key={movie.imdbID}
            className="movie-item"
            onClick={() => onMovieClick(movie.imdbID)}
          >
            <h3>{movie.Title} ({movie.Year})</h3>
          </div>
        ))
      ) : (
        <p>No movies found.</p>
      )}
    </div>
  );
}

export default MovieList;
