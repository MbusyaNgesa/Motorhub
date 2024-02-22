import React, { useState } from 'react'
import './Navbar.css'

import logo from '../Assests/Assets/logo.png'
import cart_icon from '../Assests/Assets/cart_icon.png'
import { Link } from 'react-router-dom'


const Navbar = () => {
    const [ menu,setMenu] = useState("home");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt=""/>
        <p>MOTORHUB</p>
      </div>
      <ul className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'> home </Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}>About{menu==="about"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("rental")}}><Link style={{textDecoration: 'none'}} to='/CarRental'> Car Rental </Link>{menu==="rental"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("driver")}}><Link style={{textDecoration: 'none'}}  to='/Drivers'> Drivers </Link>{menu==="driver"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("airport")}}>Airport Cab{menu==="airport"?<hr/>:<></>}</li>

      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">0</div>
      </div>
    </div>
  )
}

export default Navbar
