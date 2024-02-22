import React from 'react'
import './NewRentals.css'
import new_collection from '../Assests/Assets/new_collections'
import Items from '../Items/Items'

const NewRentals = () => {
  return (
    <div className='newrentals'>
      <h> NEW RENTALS</h>
      <hr/>
      {new_collection.map(( items, i) =>{
        return <Items key={i} id={items.id} name={items.name} image={items.image} new_price={items.new_price} old_price={items.old_price} />

      })}
      <div className="collections">

      </div>
    </div>
  )
}

export default NewRentals
