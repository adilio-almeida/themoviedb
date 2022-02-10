import { Grid, Card, CardActionArea, CardContent, Link } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { key } from "../auth";

export default function Body() {
  const [movies, setMovies] = useState<any[]>([]);
  const page: number = 1;
  const baseImgUrl: string = "https://image.tmdb.org/t/p";
  const size: string = "w200";

  useEffect(() => {
    getMovies();
  }, []);

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

  return (
    <Grid
      container
      spacing={1}
      columns={{ xs: 2, sm: 4, md: 6 }}
      rowSpacing={1}
      columnSpacing={1}
    >
      {movies.map((movie, i) => (
        <Card key={i}
          sx={{ marginRight: "20px", marginTop: "50px", marginLeft: "45px" }}
        >
          <CardActionArea >
            <Link href={`/movie/${movie.id}`}  underline="none" color="inherit">
              <CardContent>
                <img
                  src={`${baseImgUrl}/${size}${movie.poster_path}`}
                  alt={`img ${i}`}
                />
                <h5>{movie.title}</h5>
                <h5>{movie.release_date.split("-").reverse().join("/")}</h5>
              </CardContent>
            </Link>
          </CardActionArea>
        </Card>
      ))}
    </Grid>
  );
}
