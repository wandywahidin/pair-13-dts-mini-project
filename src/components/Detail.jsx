import React, {useEffect, useState} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import {PlayArrow} from '@mui/icons-material'

const Detail = () => {  
    const [movieDetail, setMovieDetail] = useState([])
    let {movieId} = useParams()

    useEffect(() => {
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=c50395b089c7e92ffe23317e6b402d11&language=en-US`).then((response) => {
          setMovieDetail(response.data);
        });
      },[movieId]);
    
  return (
    <>
      <Box
        sx={{ width: "100%", height: 600, backgroundColor: "#141414" }}
        key={movieDetail.id}
      >
        <img
          src={`https://image.tmdb.org/t/p/original/${movieDetail.backdrop_path}`}
          alt="main"
          style={{ objectFit: "cover", width: "100vw", height: "80vh" }}
        />
        <Typography
          position={"absolute"}
          top={250}
          width={"60%"}
          paddingLeft={8}
          variant={"h1"}
          fontSize={"2em"}
          textAlign={"start"}
          color={"white"}
          marginBottom={0}
          display={"flex"}
          flexDirection={'column'}
        >
          {movieDetail.title}
          <Button variant="contained" startIcon={<PlayArrow/>} sx={{color:'black', width:'20%', backgroundColor:'white', marginTop:'10px'}}>Play</Button>
        </Typography>
      </Box>
      <Box sx={{margin:'20px', color:'white', marginBottom:'20px', paddingBottom:'10px', borderBottom:'solid 5px gray'}}>
        <Typography textAlign={'justify'} variant={'h4'} fontSize={24}>
            Release Date : {movieDetail.release_date}
        </Typography>
        <Typography textAlign={'justify'} variant={'h4'} fontSize={24}>
            Popularity : {movieDetail.popularity}
        </Typography>
        <Typography textAlign={'justify'} variant={'h4'} fontSize={24}>
            Description : {movieDetail.overview}
        </Typography>
      </Box>
    </>
  );
};

export default Detail;
