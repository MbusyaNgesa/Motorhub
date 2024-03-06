import React, { useState } from 'react'
import './AddProduct.css'
import upload_area from '../../assets/Admin Panel Assets/upload_area.svg'

const AddProduct = () => {

    const [image,setImage] = useState(false);
    

    const imageHandler = (e) => {
        setImage(e.target.files[0]);
    }

  return (
    <div className='add-product'>
      <div className="addproduct-itemfields">
        <p>Product title</p>
        <input type="text" name='name' placeholder='Type here' />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfields">
            <p>Price</p>
            <input type="text" name='old_price' placeholder='Type here' />
        </div>

        <div className="addproduct-itemfields">
            <p>Offer Price</p>
            <input type="text" name='new_price' placeholder='Type here' />
        </div>

      </div>
      <div className="addproduct-itemfields">
        <p>Product Category</p>
        <select name="category" className='addproduct-selector'>
            <option value="drivers"> Drivers</option>
            <option value="carrental"> CarRentals</option>
        </select>
      </div>
      <div className="addproduct-itemfields">
        <label htmlFor="file-input">
            <img src={image?URL.createObjectURL(image):upload_area} alt="" className='add-product-thumbnail-img' />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <button className='addproduct-btn'> ADD </button>
    </div>
  )
}

export default AddProduct
