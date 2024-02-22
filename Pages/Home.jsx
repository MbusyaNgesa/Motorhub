import React from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewRentals from '../Components/NewRentals/NewRentals'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Popular/>
      <Offers/>
      <NewRentals/>
    </div>
  )
}

export default Home
