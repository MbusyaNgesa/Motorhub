import React from 'react'
import './NewRentals.css'
import new_collection from '../Assests/Assets/new_collections'
import Items from '../Items/Items'

const NewRentals = () => {
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
