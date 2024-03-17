import React from 'react'
import './Offers.css'
import exclusive_image from '../Assests/Assets/exclusive_image.png'
import Toggle from '../Toggle/Toggle'
import useLocalStorage from 'use-local-storage'

const Offers = () => {

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);


  return (
    <div className='offers' data-theme = { isDark ? "dark" : "light" } >

      <Toggle 
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />

      <div className="offers-left">
        
        <h1> Exclusive </h1>
        <h1>Offers For You </h1>     
        <button> Check Now </button>
      </div>
      <div className="offers-right">
            <img src={exclusive_image} alt="" />
      </div>
    </div>
  )
}

export default Offers
