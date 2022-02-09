import React, { useState } from "react";
import axios from "axios";
import { key } from "./auth";
import Header from "./components/header";

export default function App() {
  const page = 1;

  const getMovies = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${key}&page=${page}`
      )
      .then((res) => {
        console.log(res.data);
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
    </>
  );
}
