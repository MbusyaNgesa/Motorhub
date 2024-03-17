import React, { useEffect, useState } from 'react'
import './NewRentals.css'

import Items from '../Items/Items'

const NewRentals = () => {

  const [new_collection,setNew_collection] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:4000/newcollection')
    .then((response)=>response.json())
    .then((data)=>setNew_collection(data));
  },[])

  return (
    <div className='newrentals'>
      <h1>NEW RENTALS</h1>
      <hr/>
      
      <div className="rentals">
      {new_collection.map(( items, i) =>{
        return <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />

      })}
      </div>
    </div>
  )
}

export default NewRentals
