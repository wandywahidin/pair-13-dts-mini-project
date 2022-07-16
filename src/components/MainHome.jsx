import React, { useState, useEffect } from "react";
import axios from "axios";
import requests from "../requestApi";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

const MainHome = () => {
  const [mainComponent, setMainComponent] = useState([]);

  useEffect(() => {
    axios
      .get(requests.requestPopular)
      .then((response) => {
        setMainComponent(response.data.results);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <>
      <Carousel
        axis="horizontal"
        interval={1}
        showArrows={true}
        showThumbs={false}
        showStatus={false}
      >
        {mainComponent.map((item) => (
          <Box
            sx={{ width: "100%", height: 600, backgroundColor: "#141414" }}
            key={item.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt="main"
              style={{ objectFit: "cover", width: "100vw", height: "90vh" }}
            />
            <Typography
              position={"absolute"}
              top={150}
              width={"60%"}
              paddingLeft={8}
              variant={"h1"}
              fontSize={"2em"}
              textAlign={"start"}
              color={"white"}
              marginBottom={0}
            >
              {item.title}
            </Typography>
            <Typography
              position={"absolute"}
              top={200}
              width={"40%"}
              paddingLeft={8}
              variant={'h6'}
              fontSize={"1em"}
              textAlign={"start"}
              color={"white"}
              marginBottom={0}
            >
              Released : {item.release_date}
            </Typography>
            <Typography
              position={"absolute"}
              top={230}
              width={"40%"}
              paddingLeft={8}
              variant={'h6'}
              fontSize={"1em"}
              textAlign={"start"}
              color={"white"}
              marginBottom={0}
            >
              {item.overview}
            </Typography>
          </Box>
        ))}
      </Carousel>
    </>
  );
};

export default MainHome;
