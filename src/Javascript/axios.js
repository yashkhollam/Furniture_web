



import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import'../CSS/axios.css';

const Axios = () => {

    const [cart, setCart] = useState(0);
    const [restaurants, setRestaurants] = useState([]);
    const [inputCity, setInputCity] = useState("");
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);

    // Fetch restaurant data from API
    useEffect(() => {
        axios.get('http://localhost:5402/furniture')
            .then((res) => {
                console.log("API response:", res.data.list);
                setRestaurants(res.data.list); // Assuming API response has a 'list' property
                setFilteredRestaurants(res.data.list); // Initially, show all restaurants
            })
            .catch(err => console.error("Error fetching data:", err));
    }, []);

    // Input change handler
    const handleInputChange = (event) => {
        setInputCity(event.target.value);
    };

    // Filter logic triggered by Search button
    const handleSearch = () => {
        if (inputCity.trim()) {
            const cityToSearch = inputCity.trim().toLowerCase();
            const filtered = restaurants.filter(r => r.name.toLowerCase() === cityToSearch);
            setFilteredRestaurants(filtered);
        } else {
            setFilteredRestaurants(restaurants); // Show all restaurants if input is empty
        }
    };

    return (
       <>
      
      <Navbar 
                inputCity={inputCity} 
                handleInputChange={handleInputChange} 
                handleSearch={handleSearch} 
            />
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
    
           
            {/* <p>Showing {filteredRestaurants.length} restaurants</p> */}
            {filteredRestaurants.map(data => (
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


              //-------------
             
            ))}
    
           

      </div> 
      </> 
    );
};

export default Axios;