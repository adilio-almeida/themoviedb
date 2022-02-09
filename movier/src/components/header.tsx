import axios from "axios";
import React, { useState } from "react";
import { key } from "../auth";

export default function Header() {
  const [categories, setCategories] = useState<any[]>([]);

  const getMoviesCategory = () => {
    axios
      .get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${key}`)
      .then((res) => {
        console.log(res.data.genres);
        setCategories(res.data.genres);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div>
        Categorias
        {categories.map((category) => (
          <button>{category.name}</button>
        ))}
      </div>
      <button
        onClick={() => {
          getMoviesCategory();
        }}
      >
        Categorias
      </button>
    </>
  );
}
