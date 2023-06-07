import React from 'react'
import Error from "./Error404.svg"
import "./Error404.css"


const Error404 = () => {
  return (
    <div className='error-container'>
    <img src={Error} alt="Error" className='error404'/>
    </div>
    )
}

export default Error404;