import React from "react";
import Slider from "react-slick";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const Row = ({title, movie, handleToDetail}) => {

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "absolute", right:10 }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "absolute", left:10, zIndex:1 }}
        onClick={onClick}
      />
    );
  }

  const setting = {
    infinite: true,
    arrows : true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    nextArrow : <SampleNextArrow/>,
    prevArrow : <SamplePrevArrow/>,
  };
  return (
    <div style={{backgroundColor:'#141414', padding:'10px'}}>
      <Typography variant="h5" textAlign={"start"} fontWeight={"bold"} color={'white'}>
        {title}
      </Typography>
      <Slider {...setting}>
        {movie.map((item) => 
            (
                <Box key={item.id} border={'solid 10px'} position={'relative'} onClick={()=> handleToDetail(item.id)}>
                    <img style={{width:'100%'}} src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`} alt={item.title} />
                    <Box sx={{width:'100%', height:'100%', backgroundColor:'rgba(0,0,0,0.6)', top:0, position:'absolute', color:'white', opacity:0, alignContent:'center', '&:hover' : {opacity:100}}} >{item.title}</Box>
                </Box>
            )
        )}
      </Slider>
    </div>
  );
};

export default Row;
