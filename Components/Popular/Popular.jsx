import React, { useEffect, useState } from 'react'
import './Popular.css'
import Items from '../Items/Items'

const Popular = () => {

const [popularProduts, setPopularProducts] = useState([]);

useEffect(()=>{
  fetch('http://localhost:4000/popularrentals')
  .then((response)=>response.json())
  .then((data)=> setPopularProducts(data));
},[])

  return (
    <div className='popular'>
      <h1> POPULAR RENTALS </h1>
      <hr/>
        <div className="popular-item">
            {popularProduts.map((items, i)=>{
              return <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />

            })}
        </div>
    </div>
  )
}

export default Popular
