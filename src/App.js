import React, { useState, useEffect } from 'react';
import MovieList from './components/MovieList';
import MovieModal from './components/MovieModal';
import './App.css';

const API_KEY = '7e6c5dda'; 
const BASE_URL = 'https://www.omdbapi.com/'; 

function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedMovie, setSelectedMovie] = useState(null);

  useEffect(() => {
    fetch(`${BASE_URL}?s=popular&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.Search) {
          setMovies(data.Search);
        } else {
          setMovies([]); 
        }
      })
      .catch((error) => console.error('Error fetching popular movies:', error));
  }, []);

  const handleSearch = () => {
    if (searchTerm) {
      fetch(`${BASE_URL}?s=${searchTerm}&apikey=${API_KEY}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.Search) {
            setMovies(data.Search);
          } else {
            setMovies([]); 
          }
        })
        .catch((error) => console.error('Error fetching search results:', error));
    }
  };

  const handleMovieClick = (movieId) => {
    fetch(`${BASE_URL}?i=${movieId}&apikey=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setSelectedMovie(data);
      })
      .catch((error) => console.error('Error fetching movie details:', error));
  };

  return (
    <div className="App">
      <h1>Movie Search App</h1>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
      <MovieList movies={movies} onMovieClick={handleMovieClick} />
      {selectedMovie && (
        <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
      )}
    </div>
  );
}

export default App;
