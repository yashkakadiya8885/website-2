import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from './Home';
import About from './About';
import Contactus from './Contactus';
import Product from './Product';
import Signup from './Signup';
import Login from './Login';
import Error from './Error';
const Routerspage = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/' element={<About/>}/>
            <Route path='/' element={<Contactus/>}/>
            <Route path='/' element={<Product/>}></Route>
            <Route path='/' element={<Signup/>}/>
            <Route path='/' element={<Login/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </>
  )
}

export default Routerspage