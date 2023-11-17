import React from 'react'
import Img404 from '../assets/images/not_found.svg'
import Button from '../components/Button'

const Error404 = () => {
  return (
    <div className='notfound container'>    
            <div className='title'><h1>Page not found</h1></div>
            <div className='center-content'><img src={Img404}></img></div>
            <div className='txt center-content'><h2>This page does not exist feel free to browse the rest of our site.</h2></div>
            <div className='center-content'><Button url='/' className="btn-theme back-to-home" txt='Return To Home'/></div>
    </div>
  )
}

export default Error404