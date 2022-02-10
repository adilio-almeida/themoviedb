import { Grid, Card, CardActionArea, CardContent } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { key } from "../auth";

export default function Body() {
  const [movies, setMovies] = useState<any[]>([]);
  const page = 1;
  const baseImgUrl = "https://image.tmdb.org/t/p";
  const size = "w200";

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
        <Card sx={{ marginRight: "20px", marginTop: '50px', marginLeft: '45px' }}>
          <CardActionArea>
            <CardContent>
              <img
                src={`${baseImgUrl}/${size}${movie.poster_path}`}
                alt={`img ${i}`}
              />
              <h5>{movie.title}</h5>
              <h5>{movie.release_date.split("-").reverse().join("/")}</h5>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Grid>
  );
}

// {movies.map((movie, i) => (
//     <Card>
//       <img
//         src={`${baseImgUrl}/${size}${movie.poster_path}`}
//         alt={`img ${i}`}
//       />
//       <h4>{movie.title}</h4>
//       <p>{movie.release_date.split("-").reverse().join("/")}</p>
//     </Card>
//   ))}
