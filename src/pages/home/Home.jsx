import React from 'react'


import {HeroBanner,Trending,Popular, TopRated} from '../index'



const Home = () => {
  return (
    <div>
        <HeroBanner />
        <Trending />
        <Popular />
        <TopRated />
       
    </div>
  )
}

export default Home