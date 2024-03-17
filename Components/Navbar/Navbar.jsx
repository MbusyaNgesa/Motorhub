import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'

import logo from '../Assests/Assets/logo.png'
import cart_icon from '../Assests/Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext'
import nav_dropdown from '../Assests/Assets/menu.png'


const Navbar = () => {
    const [ menu,setMenu] = useState("home");
    const{getTotalCartItems} = useContext(ShopContext);
    const menuRef = useRef();

  const dropdown_toggle = (e) => {
    menuRef.current.classList.toggle('nav-menu-visible');
    e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt='' />
        <p>MOTORHUB</p>
      </div>
      <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
      <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu("home")}}><Link style={{textDecoration: 'none'}} to='/'> home </Link>{menu==="home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("about")}}>About{menu==="about"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("rental")}}><Link style={{textDecoration: 'none'}} to='/CarRental'> Car Rental </Link>{menu==="rental"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("driver")}}><Link style={{textDecoration: 'none'}}  to='/Drivers'> Drivers </Link>{menu==="driver"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("airport")}}>Airport Cab{menu==="airport"?<hr/>:<></>}</li>

      </ul>
      <div className="nav-login-cart">
        {localStorage.getItem('auth-token')
        ?<button onClick={()=>{localStorage.removeItem('auth-token'); window.location.replace('/') }}>Logout</button>
          :<Link to='/login'><button>Login</button></Link>} 
        
        <Link to='/cart'><img src={cart_icon} alt=""/></Link>
        <div className="nav-cart-count">{getTotalCartItems()}</div>
      </div>
    </div>
  )
}

export default Navbar
