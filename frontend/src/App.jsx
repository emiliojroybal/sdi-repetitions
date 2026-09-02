import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/movies")
    .then(response => response.json())
    .then(jsonResponse => setFavoriteMovies(jsonResponse));
  }, [])

  return (
    <>
      <h1>Favorite Movies</h1>
      <ul className="movies-list">
        {favoriteMovies.map((movie) => {
          return (
            <li className="movie-info">
              <p>{movie.title}</p>
              <p>Main Character: {movie.main_character}</p>
              <p>Year Released: {movie.year_released}</p>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App
