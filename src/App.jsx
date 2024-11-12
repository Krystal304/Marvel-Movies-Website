import { useState } from 'react'

import './App.css'
import SearchMovies from './component/SearchMovies'
import FavoritesList from './component/FavoritesList'

function App() {
  const [favorites, setFavorites] = useState([])

  const apiKey = 'cabd0d98a3cb74aab336410d9d94ded0';

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
