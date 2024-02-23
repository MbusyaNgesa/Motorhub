import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  return (
    <div className='items'>
      <Link to={`/product/${props.id}`} ><img src={props.image} alt=""/> </Link> 
      <p>{props.name}</p>
      <div className="item-prices">
        <div className="item-price-new">
            KSh {props.new_price}
        </div>

        <div className="item-price-old">
            KSh {props.old_price}
        </div>
      </div>
    </div>
  )
}

export default Items
