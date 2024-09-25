

import React from 'react';
import './prod.css';
                 

const ProductList = (prodlist) => {         //functional component that accepts the products data passed to it

  //custom method, called from the view in the Render()  below
  const renderList = ({ prodlist }) => {    //temp argument that receives the data passed to this component by Products Component

    if (prodlist) {                       //if data exists
      return prodlist.map((data) => { //map() function iteratively executes once for each record, in the json data
        return (
          <div className='orderOnline' key={data.id}>     
            <div className='orderitem'> 
                <img  className="foodimg" src={data.img} alt="" /> 
                <p    className="discount">Flat {data.OFF} OFF</p> 
                <p    className="brandname"> {data.name} </p>
                <p    className="rating">{data.rating}</p>
                <p    className="discription">{data.discription}</p> 
                <p >₹{data.price}</p>
             </div>
          </div>   
        )
      })
    }
  }
  
  return (
    <div  className="grid">
      <div >
        {renderList(prodlist)}  {/* Calls the above custom function to render the data in the view */}
      </div>
    </div>
  )
}

export default ProductList;