import React, { useState } from 'react'
import './Hero.css'
import hand_icon from '../Assests/Assets/hand_icon.png'
import arrow_icon from '../Assests/Assets/arrow.png'
import hero_image from '../Assests/Assets/hero_image.png'
import Toggle from '../Toggle/Toggle'
import useLocalStorage from 'use-local-storage'

const Hero = () => {

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className='hero' data-theme = { isDark ? "dark" : "light" } >

      <Toggle 
        isChecked={isDark}
        handleChange={() => setIsDark(!isDark)}
      />

      <div className="hero-left">
      <h2> Popular Rentals </h2>
        <div>
            <div className='hero-hand-icon'>
                <p>Popular</p>
                <img src={hand_icon} alt=''/>
            </div>
            <p>Cars</p>
            <p>for you</p>
        </div>
        <div className="hero-latest-btn">
            <div> Latest </div>
                <img src={arrow_icon} alt=""/>
        </div>
      </div>
      <div className="hero-right">
                <img src={hero_image} alt=""/>
        </div>
    </div>
  )
}

export default Hero
