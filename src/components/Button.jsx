import React from 'react'

const Button = ({txt, className, url}) => {
  return (
    <a href={url} className={'button ' + className}>{txt}<i className="fa-regular fa-arrow-up-right"></i></a>
  )
}

export default Button



