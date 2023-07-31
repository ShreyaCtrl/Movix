import React from 'react';
import './App.css';
const MovieCard = ({movie}) => {
    return (
        <div className="movie">
            <div>
                <p>{movie.Year}</p>
            </div>
            <div>
                <img
                    src={movie.Poster !== 'N/A'? movie.Poster: 'https://via.placeholder.com/400'}
                    alt={movie.title}
                />
            </div>

            <div>
                <p>{movie.Type}</p>
                <h3>{movie.Title}</h3>
            </div>
        </div>
    )
};
export default MovieCard; 