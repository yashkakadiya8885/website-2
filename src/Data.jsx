import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Ui from './Ui';


const Data = () => {
    let [products,setProducts]= useState([])
    let {id}=useParams()
    const getdata = async () => {
        let res = await fetch(`https://fakestoreapi.com/products/${id}`)
        let data = await res.json()
        console.log(data);
        setProducts(data);
    }
    useEffect(() => {
        getdata();
      }, []);
  return (
    <div>
        <Ui  {...products}/>
    </div>
  )
}

export default Data