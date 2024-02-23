import React, { useContext } from 'react'
import './CSS/CarRental.css'
import { ShopContext } from '../Context/ShopContext'

const CarRental = (props) => {
  const{all_product} = useContext(ShopContext);
  return (
    <div className='car-rental'>
      <img src={props.banner} alt="" />
    </div>
  )
}

export default CarRental
