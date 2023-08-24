import React from 'react'
import { Link } from 'react-router-dom'

const Ui = ({id,image,title,category,price}) => {
  return (
        <Link to={`/data/${id}`}>
            <div key={id}>
                <img src={image} alt="" />
                <h3>{title}</h3>
                <p>{category}</p>
                <h5>{price}</h5>
            </div>  
        </Link>
    
  )
}

export default Ui