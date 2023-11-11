import React from 'react'
import { Link } from 'react-router-dom'

const ServiceCard = ({title, txt}) => {
  return (
    <>
    <Link to='/'>
        <div className="service-card">
            <i className="fa-light fa-horizontal-rule"></i>
            <div className="service-txt">
                <h3>{title}</h3>
                {txt}
            </div>
            <div className="btn-round"><i className="fa-light fa-arrow-right"></i></div>
        </div>
    </Link>
    </>
  )
}

export default ServiceCard