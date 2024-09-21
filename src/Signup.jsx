import './Signup.css';
import React from "react";
import { Link,  } from 'react-router-dom';


function Signup(){

    return(
 <div >
<form className='signup'>

      <h1 className="Signupheading">Signup</h1>
     
     
     <input type="text" placeholder='Enter you name' className='name'/>
    
     <input type="email" placeholder='Enter you email' className='semail'/>
   
    <input type="password"  placeholder='Create password' className='spassword'/>
   
    <input type="password" placeholder='Confirm password' className='confirmpassword'/>
   
    <button className='Signupbtn'>Signup</button>
   
   
    <Link to='/login'> <p className='loginSignup'><a >Login</a></p></Link>
</form>
    

    
 </div>

    )
}

export default Signup;