import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Home from "./pages/Home";
import Row from "./components/Row";
import requests from "./requestApi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar2 from "./components/Navbar2";
import "./App.css";
import { Login, Register, Profile } from "./pages";
import Detail from "./components/Detail";

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
  },[]);

  // data untuk Top rated
  useEffect(() => {
    axios.get(requests.requestTopRated).then((response) => {
      setRowMovieTopRated(response.data.results);
    });
  },[]);

  // data untuk Up coming
  useEffect(() => {
    axios.get(requests.requestUpcoming).then((response) => {
      setRowMovieUpComing(response.data.results);
    });
  },[]);

  const navigate = useNavigate();

  const handleToDetail = (id) => {
    navigate(`/detail/${id}`)
  }

  return (
    <div className="App">
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Home movie={mainMovie} handleToDetail={handleToDetail} />} />
        <Route path="/trending" element={<Home movie={rowMovieTopRated} />} />
        <Route path="/upcoming" element={<Home movie={rowMovieUpComing} />} />
        <Route path="/nowplaying" element={<Home movie={rowMovieNowPlaying} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:movieId" element={<Detail/>} />
      </Routes>
      <Row title={"Now Playing"} movie={rowMovieNowPlaying} handleToDetail={handleToDetail} />
      <Row title={"Top Rated"} movie={rowMovieTopRated} handleToDetail={handleToDetail} />
      <Row title={"Up Coming"} movie={rowMovieUpComing} handleToDetail={handleToDetail} />
    </div>
  );
}

export default App;
