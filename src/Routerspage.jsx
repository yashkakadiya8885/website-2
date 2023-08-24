import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contactus from './Contactus';
import Product from './Product';
import Signup from './Signup';
import Login from './Login';
import Error from './Error';
import Man from './Man';
import Woman from './Woman';
import Kids from './Kids';
import Data from './Data';
const Routerspage = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/About' element={<About/>}/>
            <Route path='/Contactus' element={<Contactus/>}/>
            <Route path='/Product' element={<Product/>}>
              <Route path='Man' element={<Man/>}/>
              <Route path='Woman' element={<Woman/>}/>
              <Route path='Kids' element={<Kids/>}/>
            </Route>
            <Route path='/Signup' element={<Signup/>}/>
            <Route path='/Login' element={<Login/>}/>
            <Route path='/Data/:id' element={<Data/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </>
  )
}

export default Routerspage