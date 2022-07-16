import React from 'react'
import MainHome from '../components/MainHome'
import Row from '../components/Row'
import requests from '../requestApi'

const Home = () => {
  return (
    <>
    <MainHome/>
    <Row title={'Popular'} fetchApi={requests.requestPopular}/>
    <Row title={'Top Rated'} fetchApi={requests.requestTopRated}/>
    <Row title={'Up Coming'} fetchApi={requests.requestUpcoming}/>
    </>
  )
}

export default Home