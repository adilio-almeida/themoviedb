import { Button, Paper } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { key } from "../auth";

export default function Categories() {
  const [categories, setCategories] = useState<any[]>([]);
  useEffect(() => {
    getMoviesCategory();
  }, []);

  const getMoviesCategory = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/genre/movie/list?api_key=${key}&language=pt-BR`
      )
      .then((res) => {
        console.log(res.data.genres);
        setCategories(res.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Paper sx={{ backgroundColor: "#2D0C5E" }}>
        <br></br>
        {categories.map((category, i) => (
          <Button
          key={i}
            variant="contained"
            sx={{ marginLeft: "20px", marginBottom: "15px" }}
            size={"small"}
          >
            {category.name}
          </Button>
        ))}
        <br></br>
    </Paper>
  );
}
