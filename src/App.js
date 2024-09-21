import './App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React from 'react';
 import { BrowserRouter,Route,Routes} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './login';
// import Products from './Productitems';
import Signup from './Signup';
import Product from './Product';



function App() {
  

  return (

    <>
    
  
     <BrowserRouter> 
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/Signup' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
     
   
   </Routes>
    </BrowserRouter> 
    
    </>
  )
};
export default App;
