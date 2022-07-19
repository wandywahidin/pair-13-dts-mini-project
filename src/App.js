import React, { useState, useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
import requests from "./requestApi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { ProtectedComponent } from "./components";

import { Login, Register, Profile } from "./pages";

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
  }, []);

  // data untuk Top rated
  useEffect(() => {
    axios.get(requests.requestTopRated).then((response) => {
      setRowMovieTopRated(response.data.results);
    });
  }, []);

  // data untuk Up coming
  useEffect(() => {
    axios.get(requests.requestUpcoming).then((response) => {
      setRowMovieUpComing(response.data.results);
    });
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <Home
              movie={mainMovie}
              nowPlaying={rowMovieNowPlaying}
              topRated={rowMovieTopRated}
              upComing={rowMovieUpComing}
            />
          }
        />
        <Route
          path="/trending"
          element={
            <Home
              movie={rowMovieTopRated}
              nowPlaying={rowMovieNowPlaying}
              topRated={rowMovieTopRated}
              upComing={rowMovieUpComing}
            />
          }
        />
        <Route
          path="/upcoming"
          element={
            <Home
              movie={rowMovieUpComing}
              nowPlaying={rowMovieNowPlaying}
              topRated={rowMovieTopRated}
              upComing={rowMovieUpComing}
            />
          }
        />
        <Route
          path="/nowplaying"
          element={
            <Home
              movie={rowMovieNowPlaying}
              nowPlaying={rowMovieNowPlaying}
              topRated={rowMovieTopRated}
              upComing={rowMovieUpComing}
            />
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedComponent>
              <Login />
            </ProtectedComponent>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedComponent>
              <Register />
            </ProtectedComponent>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedComponent>
              <Profile />
            </ProtectedComponent>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
