import React, { useState } from "react";
import axios from "axios";
import { key } from "./auth";
import Header from "./components/header";

export default function App() {
  const [movies, setMovies] = useState<any[]>([]);
  const page = 1;
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w200";

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${page}&language=pt-BR`
      )
      .then((res) => {
        console.log(res.data.results);
        setMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const Header = () => {

  // };

  return (
    <>
      <Header></Header>
      <button onClick={getMovies}>Get movies</button>
      <br></br>
      <table>
        {movies.map((movie) => (
          <div>
            <img src={`${baseImgUrl}/${size}${movie.poster_path}`} alt="" />
            <h4>{movie.title}</h4>
            <p>{movie.release_date.split('-').reverse().join('/')}</p>
          </div>
        ))}
      </table>
    </>
  );
}
