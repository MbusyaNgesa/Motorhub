import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assests/Assets/breadcrum_arrow.png'

const Breadcrum = (props) => {
    const {product} = props;

    if (!product || !product.category || !product.name) {
      return null; // Return null if product data is not available
  }

  return (
    <div className='breadcrum'>
      HOME <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> {product.category} <img src={arrow_icon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrum
