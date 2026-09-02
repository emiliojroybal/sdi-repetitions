import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
    .then(response => response.json())
    .then(jsonResponse => setMoviesList(jsonResponse))
    .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h1>Favorite Movies</h1>
      <ul>
        {moviesList.map((movie) => {
          return (
            <div className='movie-info'>
              <h2>{movie.title}</h2>
              <p>Main Character: {movie.main_character}</p>
              <p>Year Released: {movie.year_released}</p>
            </div>
          )
        })}
      </ul>
    </>
  )
}

export default App
