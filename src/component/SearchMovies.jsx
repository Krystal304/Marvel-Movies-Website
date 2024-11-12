import React from 'react'

import { useState } from 'react'
import axios from 'axios'


const SearchMovies = ({addFavoriteMovie}) => {
    const apiKey = 'cabd0d98a3cb74aab336410d9d94ded0';
    const [searchMovie, setSearchMovie] = useState('')
    const [movies, setMovies] = useState([]);

const getMovies = async () => {
    try {
        const response = await fetch(`developer.marvel.com/?apikey=${apiKey}&s=${searchMovie}&type=movie`)
        const data = await response.json();
        setMovies(data.Search || []);
    } catch (err) {
        console.error("Error Fetching Movie",err);
        
    }
}

return (
    <div>
        <h2>Search Movies</h2>
        <input type="text" value={searchMovie} onChange={(e) => setSearchMovie(e.target.value)}/>
        <button onClick={getMovies}>Search</button>
        <ul>
            {movies.map((movie) => (
                <li key={movie.imdbID}>
                    {movie.Title} ({movie.Year})
                    <button onClick={() => addFavoriteMovie(movie)}>Add to Favorites</button>
                </li>
            ))}
        </ul>
    </div>
)

}
export default SearchMovies