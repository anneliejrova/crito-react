import React from 'react'
import { Link } from 'react-router-dom'

const Project = ({url, img, imgtxt, title}) => {
  return (
    <Link to={url} className="project">
        <img src={img} alt={imgtxt} />
            <h3>{title}</h3>
            <div className="read">Read more <i className="fa-regular fa-arrow-up-right"></i></div>
    </Link>
  )
}

export default Project