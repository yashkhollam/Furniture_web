

import React from 'react';
import './ProductList.css';                    //custom css file imported

const ProductList = (prodlist) => {         //functional component that accepts the products data passed to it

  //custom method, called from the view in the Render()  below
  const renderList = ({ prodlist }) => {    //temp argument that receives the data passed to this component by Products Component

    if (prodlist) {                       //if data exists
      return prodlist.map((data) => { //map() function iteratively executes once for each record, in the json data
        return (
          <div className='orderitemscontainer'>
            {/* <div className="row">
                            <div className="card-img">
                            {/* <img className="card-img-top" src={data.img} alt={data.name}/> 
                            </div>
                            <hr/>
                            <span className="topTemp">{data.name}</span>
                            </div>
                            <div className="card-body">
                            <span className="max">Rs. {data.price}</span>  
                                <h4 className="card-title">{data.rating}</h4>
                                <div className="card-text">
                                    <p className="day">Rs. {data.price}</p>
                                    
                                </div>
                        </div> 
              </div>*/}



             <div className="orderOnline" key={data.id}> 
             {/* <div className='cart'><i class="bi bi-cart"></i> {cart}</div>  */}
             {/* <button  className='removecart' onClick={()=> setCart (cart>0 ?cart-1:0)}><i class="bi bi-trash3-fill"></i></button> */}

     
       
        
                
            <div className="orderitem">
                
                <img src={data.img} alt="" className="foodimg"/> 
                
               <p className="discount">Flat {data.OFF} OFF</p> 
               <p className="brandname"> {data.name} </p>
               <p className="rating">{data.rating}</p>
                <p className="discription">{data.discription}</p> 
                 
                 {/* <button  className='addtocart' onClick={()=> setCart (cart+1)}>Add to cart</button> */}

                <p className="price">₹{data.price}</p>
             </div>
            </div>
           </div>
          
          
        )
      })
    }
  }
  
  return (
    <div className="container">
      <div className="row">
        {renderList(prodlist)}  {/* Calls the above custom function to render the data in the view */}
      </div>
    </div>
  )
}

export default ProductList;