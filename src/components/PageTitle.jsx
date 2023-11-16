import React from 'react'
import Wave from '../assets/images/wave-left.svg'
import { Link } from 'react-router-dom'

const PageTitle = ({title, currentUrl, currentPage}) => {
  return (
    <div className="pagetitle">
        <div className="lines">
            <img src={Wave} className="bglines" alt="wave pattern" />
        </div>
        <div className="container center-content">
            <div className="title">
                <p className="center-content">
                    <Link to='/'>Home</Link> 
                    <Link to={currentUrl}>{currentPage}</Link></p>
                <h1>{title}</h1>
            </div>
        </div>
    </div>
  )
}

export default PageTitle