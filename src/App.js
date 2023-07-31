import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import "./App.css";
import SearchIcon from "./search.svg";

const API_URL = "http://www.omdbapi.com?apikey=51da484a";
// 51da484a
const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
    
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
  useEffect(() => {
    searchMovie("Batman");
  }, []);

  return (
    <div className="app">
      <h1>PVS Cinema</h1>

      <div className="search">
            <input
                placeholder="search"
                value= {searchTerm}
                onChange={(e) => {setSearchTerm(e.target.value)}} />
            <img
                src={SearchIcon}
                alt="search"
                onClick={() => {searchMovie(searchTerm)}} />
      </div>

        {
            movies?.length > 0 ? (
                <div className="container"> {
                    movies.map((movie) => (
                        <MovieCard movie={movie}/>
                    ))          
                }   
                </div>) : (
                <div className="empty">
                    <h3>No movies found</h3>
                    <p>Try searching for a movie title</p>
            </div>
        )}

      {/* <div className="container">
        <MovieCard movie1={movie1} />
      </div> */}
    </div>
  );
};
// every created component needs to be exported as default
export default App;
