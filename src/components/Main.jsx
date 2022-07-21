import React from "react";
import { Box, Typography } from "@mui/material";
import { Carousel } from "react-responsive-carousel";

const Main = ({ movie, handleToDetail }) => {
  return (
    <Box sx={{height:{xs:'100%', md:'90vh'}}}>
      <Carousel
        showArrows={true}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        axis={"horizontal"}
        autoPlay={true}
        interval={5000}
        transitionTime={500}
        infiniteLoop={true}
        dynamicHeight={true}
      >
        {movie.map((item) => (
          <Box
            sx={{ width: "100%", backgroundColor: "#141414", height:'90vh' }}
            key={item.id}
            onClick={() => handleToDetail(item.id)}
          >
            <img
              src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
              alt="main"
              style={{ objectFit: "cover", width: "100vw" }}
              className='md:h-full'
            />
            <div className="w-full h-full absolute top-0 bg-gradient-to-r from-black"></div>
            <Box
              sx={{
                position: "absolute",
                top: { xs: 40, lg: 150 },
                paddingLeft: { xs: "20px", md: "50px" },
                width: { xs: "80%", md: "60%" },
                textAlign: "start",
                color: "white",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1rem", md: "2rem" },
                  fontWeight:'bold'
                }}
              >
                {item.title}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.5rem", md: "1rem" },
                }}
              >
                Released : {item.release_date}
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "0.5rem", md: "1rem" },
                }}
              >
                {item.overview}
              </Typography>
            </Box>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default Main;
