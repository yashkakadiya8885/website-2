import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'

const Product = () => {
  return (
    <div id='box'>
      <div id='sidebar'>
      <Link className='link' to='Man'><p>Man</p></Link>
      <Link className='link' to='Woman'><p>Woman</p></Link>
      <Link className='link' to='Kids'><p>Kids</p></Link>
      </div>
      <div>

      </div>
    </div>
  )
}

export default Product