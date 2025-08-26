import React, { useState } from "react";
import "./ProductList.css"; //custom css file imported

const ProductList = (prodlist) => {
  //functional component that accepts the products data passed to it

  const [cart, setCart] = useState(0);
  //custom method, called from the view in the Render()  below

  const renderList = ({ prodlist }) => {
    //temp argument that receives the data passed to this component by Products Component

    if (prodlist) {
      //if data exists
      return prodlist.map((data) => {
        //map() function iteratively executes once for each record, in the json data
        return (
          <div className="orderOnline " key={data.id}>
            <div className="orderitem">
              <img src={data.img} alt="" className="foodimg" />
              <p className="discount">Flat {data.OFF} OFF</p>
              <p className="brandname"> {data.name} </p>
              <p className="rating">{data.rating}</p>
              <p className="discription">{data.discription}</p>
              <p className="price">₹{data.price}</p>
              <button className="addtocart" onClick={() => setCart(cart + 1)}>
              Add to cart
            </button>
            </div>
            
          </div>
        );
      });
    }
  };

  return (
    <div className="container1 ">
     
        <div className="cart sticky-top">
          <i class="bi bi-cart"> {cart}</i>
        </div>
        <button
          className="removecart sticky-top"
          onClick={() => setCart(cart <= 0 ? 0 : cart - 1)}
        >
          <i class="bi bi-trash3-fill"></i>
        </button>
        {renderList(prodlist)}
        {/* Calls the above custom function to render the data in the view */}
      </div>
    
  );
};

export default ProductList;
