import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Header from "../components/header";
import { key } from "../auth";
import { Paper } from "@mui/material";
export default function Details() {
  const [movie, setMovie] = useState<any>([]);

  const baseImgUrl: string = "https://image.tmdb.org/t/p";
  const size: string = "w400";
  const { id } = useParams();

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${key}&language=pt-BR`
      )
      .then((res) => {
        setMovie(res.data);
        console.log(movie.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <Paper>
        <img
          src={`${baseImgUrl}/${size}${movie.poster_path}`}
          alt={`img ${movie.title}`}
        />
        <h5>{movie.title}</h5>
      </Paper>
    </>
  );
}
