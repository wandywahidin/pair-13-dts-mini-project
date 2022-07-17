import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./pages/Home";
import Row from "./components/Row";
import requests from "./requestApi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";

function App() {
  const [mainMovie, setMainMovie] = useState([]);
  const [rowMovieNowPlaying, setRowMovieNowPlaying] = useState([]);
  const [rowMovieTopRated, setRowMovieTopRated] = useState([]);
  const [rowMovieUpComing, setRowMovieUpComing] = useState([]);

  // data untuk Main Component
  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMainMovie(response.data.results);
    });
  }, []);

  // data untuk Now playing
  useEffect(() => {
    axios.get(requests.requestNowPlaying).then((response) => {
      setRowMovieNowPlaying(response.data.results);
    });
  });

  // data untuk Top rated
  useEffect(() => {
    axios.get(requests.requestTopRated).then((response) => {
      setRowMovieTopRated(response.data.results);
    });
  });

  // data untuk Up coming
  useEffect(() => {
    axios.get(requests.requestUpcoming).then((response) => {
      setRowMovieUpComing(response.data.results);
    });
  });

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home movie={mainMovie} />} />
        <Route path="/trending" element={<Home movie={rowMovieTopRated} />} />
        <Route path="/upcoming" element={<Home movie={rowMovieUpComing} />} />
        <Route path="/nowplaying" element={<Home movie={rowMovieNowPlaying} />} />
      </Routes>
      <Row title={"Now Playing"} movie={rowMovieNowPlaying} />
      <Row title={"Top Rated"} movie={rowMovieTopRated} />
      <Row title={"Up Coming"} movie={rowMovieUpComing} />
    </div>
  );
}

export default App;
