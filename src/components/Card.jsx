import React from 'react'
import '../scss/Card.scss'
import { Link } from 'react-router-dom'
function Card(props) {
  return (
    <>
        <div className="card-con">
          <img src={props.imag} alt="" />

          <Link to={`/details/${props.aid}/`} className='title'>{props.title}</Link>
       
          <div className="price">${props.price}</div>
          
          <div className='align-self-middle fs-6 mt-2 fw-medium text-decoration-underline  '><mark>Rating: {props.rat}</mark></div>
          
        </div>
    </>
  )
}

export default Card