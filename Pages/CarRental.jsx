import React, { useContext } from 'react'
import './CSS/CarRental.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assests/Assets/dropdown_icon.png'
import Items from '../Components/Items/Items'

const CarRental = (props) => {
  const {all_product} = useContext(ShopContext);
  return (
    <div className='car-rental'>
      <img className='carrental-banner' src={props.banner} alt="" />
      <div className="carrental-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="carrental-sort">
          Sort by <img src={dropdown_icon} alt="" />
        </div>
      </div>
      <div className="carrental-products">
      {all_product.map(( items, i) =>{
       if(props.CarRental===Items.CarRental){
        return <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />

       }
      else{
        return null;
      }
      })}
      </div>
      <div className="carrental-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default CarRental
