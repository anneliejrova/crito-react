import React from 'react'

const Headline = ({title, txt}) => {
  return (
    <>
        <div className="section-title">
            <p>{title}</p>
            <h2>{txt}</h2>
        </div>
    </>
  )
}

export default Headline