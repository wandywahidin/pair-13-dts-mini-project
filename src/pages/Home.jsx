import React from 'react';
import Main from '../components/Main';
import Navbar2 from '../components/Navbar2';
import Row from '../components/Row';

const Home = ({movie, nowPlaying, topRated, upComing}) => {
  return (
    <>
      <Navbar2 />
      <Main movie={movie}/>
      <Row title={"Now Playing"} movie={nowPlaying} />
      <Row title={"Top Rated"} movie={topRated} />
      <Row title={"Up Coming"} movie={upComing} />
    </>
  )
}

export default Home;