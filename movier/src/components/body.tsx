import {
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Link,
  Container,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { key } from "../auth";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Body() {
  const [movies, setMovies] = useState<any[]>([]);
  const [pageElement, setPageElement] = useState(1);
  const baseImgUrl: string = "https://image.tmdb.org/t/p";
  const size: string = "w200";
  const [page, setPage] = useState<any>();
  const [limitPage, setLimitPage] = useState(1);

  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPageElement(value);
    setPage(value);
  };

  useEffect(() => {
    getMovies(page);
  }, [page]);

  const getMovies = (pageId: string) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${page}&language=pt-BR`
      )
      .then((res) => {
        console.log(res.data);
        setMovies(res.data.results);
        if (res.data.total_pages <= 500) setLimitPage(res.data.total_pages);
        else setLimitPage(500);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container maxWidth='xl'>
      <Grid
        container
        spacing={1}
        columns={{ xs: 4, sm: 8, md: 12 }}
        rowSpacing={1}
        columnSpacing={1}
      >
        {movies.map((movie, i) => (
          <Card
            key={i}
            sx={{ marginRight: "5px", marginTop: "30px", marginLeft: "15px", maxWidth: '150px' }}
          >
            <CardActionArea>
              <Link
                href={`/movie/${movie.id}`}
                underline="none"
                color="inherit"
              >
                <CardContent>
                  <img
                    src={`${baseImgUrl}/${size}${movie.poster_path}`}
                    alt={`img ${i}`}
                    style={{maxWidth: '120px'}}
                  />
                  <h5>{movie.title}</h5>
                  <h5>{movie.release_date.split("-").reverse().join("/")}</h5>
                </CardContent>
              </Link>
            </CardActionArea>
          </Card>
        ))}
      </Grid>
      <Stack spacing={2}>
        <Pagination
          color={"secondary"}
          onChange={handleChange}
          count={limitPage}
          page={pageElement}
          shape="rounded"
        />
      </Stack>
    </Container>
  );
}
