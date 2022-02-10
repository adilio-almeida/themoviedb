import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Header from "../components/header";
import { key } from "../auth";
import { Paper, Typography, Grid } from "@mui/material";
export default function Details() {
  const [movie, setMovie] = useState<any>([]);

  const baseImgUrl: string = "https://image.tmdb.org/t/p";
  const size: string = "w300";
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
        console.log(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Header />
      <Grid
        container
        spacing={1}
        columns={{ xs: 2, sm: 4, md: 6 }}
        rowSpacing={1}
        columnSpacing={1}
        justifyContent={'center'}

      >
        <Paper sx={{display: 'flex', flexDirection: 'row'}}>
          <img
            style={{ marginLeft: "50px" }}
            src={`${baseImgUrl}/${size}${movie.poster_path}`}
            alt={`img ${movie.title}`}
          />
          <Typography>{`${movie.title} •` }  </Typography>
          <Typography>{`${movie?.release_date?.split("-").reverse().join("/")}(BR) •`}</Typography>
        </Paper>
      </Grid>
    </>
  );
}
