import React from 'react'
import Main from '../components/Main'

const Home = ({movie, handleToDetail}) => {
  return (
    <>
      <Main movie={movie} handleToDetail={handleToDetail}/>
    </>
  )
}

export default Home