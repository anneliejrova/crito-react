import React from 'react'
import { Link } from 'react-router-dom'

const Article = ({imgUrl,day, month, category, title, content, link}) => {
  return (
    <div className="article">
        <Link to={link}>
            <div className="article-img">
                <div className="image-container">
                    <img src={imgUrl} alt="Photo related to article" />
                </div>
                <div className="date">
                    <h3>{day}</h3>
                    <p>{month}</p>
                </div>
            </div>
            <div className="article-txt">
                <p>{category}</p>
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </Link>
    </div>
  )
}

export default Article