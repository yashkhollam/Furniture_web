import './Navbar.css';

import React from "react";
import { Link } from "react-router-dom";
import logo from './image asset/logo/logo.png';

const Navbar = () => {
    return (
        <>


            <nav className='navbar'>
                <a>
                    <ul className='navlist'>
                        <Link to={'/'}> <li className='Home'> <img src={logo} alt="logo" className='logo' /></li></Link>
                        <li className='search'>
                            <button className='searchbtn'><i class="searchicon bi-search"></i></button>

                            <input type='searchinput' placeholder='search best for you' className='searchinput' />
                        </li>




                        <Link to='/Product'> <li className='Product'>Product</li> </Link>

                        <li className='Aboutus'>About us</li>

                        <Link to='login'> <li className='login'>login</li></Link>

                    </ul>
                </a>
            </nav>



        </>
    )
}
export default Navbar;