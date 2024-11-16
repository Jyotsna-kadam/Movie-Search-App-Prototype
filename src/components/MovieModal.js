import React from 'react';
// import './MovieModal.css';

function MovieModal({ movie, onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>&times;</button>
        <h2>{movie.Title}</h2>
        <p><strong>Genre:</strong> {movie.Genre}</p>
        <p><strong>Plot:</strong> {movie.Plot}</p>
        <p><strong>Ratings:</strong> {movie.imdbRating}</p>
      </div>
    </div>
  );
}

export default MovieModal;