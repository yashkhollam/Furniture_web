import './login.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';
import React from "react";
 function Login(){
  
    return(
        <>

          <div className='loginformpage'>
            <form onSubmit={''} className='form'>
              <h1 className='loginheading'>Login</h1>
                 <div className='email'>
                  <p className='emailtxt'>Email Address</p>
                  <i class="mailicon bi-envelope-at"></i>
                   <input type='email' className='emailinput' placeholder='Username@gmail.com' required/>
                </div> 


                <div className='password'>
                  <p className='passwordtxt'>Password</p>
                  <i class="passwordicon bi-key"></i>
                   <input type='password' className='passwordinput' placeholder='Password' required/>

                  
                </div> 

                <button className='loginbtn' onSubmit={''}>Login</button>

               <Link to='/Signup'><p className='Signuplogin'><a href='#'>Sign up</a></p></Link>
                <Link> <p className='forgetpassword'>Forget Password</p> </Link>
            </form>


          </div> 
        </>
    );
};

export default Login;