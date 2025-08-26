import "../CSS/Navbar.css";

import React from "react";
import { Link } from "react-router-dom";
// import logo from './image asset/logo1';
const Navbar = ({ inputCity,handleInputChange, handleSearch}) => {
  return (
    <>
      <nav className="navbar fixed-top ">
        <a>
          <ul className="navlist">
            <Link to={"/"}>
              
              <li className="Home">
                
                {/* <img src={logo} alt="logo" className="logo" /> */}
                
              </li>
            </Link>
            
            <Link to="/Axios">
              
              <li className="Product">Product</li>
            </Link>

           <Link to="/aboutus">
           <li className="Aboutus">About us</li>
           </Link>
            
            
            <Link to="Blog">
              
              <li className="Blog">Blog</li>
            </Link>

            <Link to="Contact">
              
              <li className="Contact">Contact</li>
            </Link>


             <li className="search">
              <button className="searchbtn" onClick={handleSearch}>
                <i class="searchicon bi-search"></i>
              </button>

              <input
                className="searchinput"
                type="text"
                value={inputCity}
                onChange={handleInputChange}
                placeholder="Enter Furniture Name"
              />

            </li> 

             <Link to="login">
              
              <li className="login">My Account</li>
            </Link> 
          </ul>
        </a>
      </nav>
    </>
  );
};
export default Navbar;
