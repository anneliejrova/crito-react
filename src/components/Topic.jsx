import React from 'react'

const Topic = ({className, img, imgtxt, title, txt}) => {
  return (
    <div className={'topic ' + className}>
      <img src={img} alt={imgtxt}/>
      <h3>
       {title}
       </h3>
      {txt}
      </div>
  )
}

export default Topic