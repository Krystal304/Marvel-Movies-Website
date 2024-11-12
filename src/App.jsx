import { useState } from 'react'

import './App.css'
import SearchMovies from './component/SearchMovies'
import FavoritesList from './component/FavoritesList'
import axios from 'axios'
function App() {
  const [favorites, setFavorites] = useState([])

  const addFavoriteMovie = (movie) => {
    setFavorites([...favorites, movie]);
  };


  return (

    <div>
      <h1>Marvel Movies</h1>
      <SearchMovies addFavoriteMovie={addFavoriteMovie} />
      <FavoritesList favorites={favorites} />
    </div>
  )
}

export default App
