import '../CSS/App.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Login from './login';
import Signup from './Signup';
import Axios from './axios';
import Aboutus from './aboutus';

function App() {
  const [searchInput, setSearchInput] = useState('');

  const handleSearchInputChange = (event) => {
    setSearchInput(event.target.value);
  };

  return (
    <BrowserRouter>
      <Navbar searchInput={searchInput} onSearchInputChange={handleSearchInputChange} />
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/axios' element={<Axios searchInput={searchInput} />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/aboutus' element={<Aboutus/>}/>
        <Route path='/axios' element={<Axios/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;