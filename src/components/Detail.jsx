import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import { PlayArrow } from "@mui/icons-material";
import InfoIcon from "@mui/icons-material/Info";

const Detail = () => {
  const [movieDetail, setMovieDetail] = useState([]);
  let { movieId } = useParams();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}?api_key=c50395b089c7e92ffe23317e6b402d11&language=en-US`
      )
      .then((response) => {
        setMovieDetail(response.data);
      });
  }, [movieId]);

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundColor: "#141414",
          height: { xs: "100%", md: "90vh" },
        }}
        key={movieDetail.id}
      >
        <Box sx={{ width: "100%", height: { xs: "100%", md: "90vh" } }}>
          <div className=" object-cover w-full md:h-[90vh] absolute bg-gradient-to-r from-black"></div>
          <img
            src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
            alt="main"
            style={{ objectFit: "cover", width: "100vw" }}
            className="md:h-full"
          />
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: { xs: 100, md: 180 },
            paddingLeft: { xs: "20px", md: "50px" },
            width: { xs: "90%", md: "80%" },
            textAlign: "start",
            color: "white",
            display:'flex',
            justifyContent:'space-between'
          }}
        >
          <Box sx={{width:'100%', marginRight:'20px'}}>
            <Typography
              sx={{
                fontSize: { xs: "1.5rem", md: "2.5rem" },
              }}
            >
              {movieDetail.title}
            </Typography>
            <button className="border border-black md:w-48 md:h-12 md:text-2xl px-2 text-black bg-white rounded mt-2 mr-4 font-bold hover:bg-black/20 hover:text-white hover:border-white">
              <PlayArrow fontSize="large" />
              Play
            </button>
            <button className=" text-white mt-2">
              <InfoIcon
                fontSize="large"
                sx={{
                  border: "1px solid black",
                  background: "black",
                  borderRadius: "50%",
                  ":hover": { color: "black", background: "white" },
                }}
              />
            </button>
          </Box>
          <Box sx={{width:'50%',}}>
            <img
              src={`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`}
              alt="main"
              style={{ objectFit: "cover"}}
              className="md:-mt-16"
            />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          margin: "20px",
          color: "white",
          marginBottom: "20px",
          paddingBottom: "10px",
          borderBottom: "solid 5px gray",
          textAlign: "justify",
          fontSize: { xs: "1rem", md: "2.8rem" },
        }}
      >
        <Typography>Release Date : {movieDetail.release_date}</Typography>
        <Typography>Popularity : {movieDetail.popularity}</Typography>
        <Typography>Description : {movieDetail.overview}</Typography>
      </Box>
    </>
  );
};

export default Detail;
