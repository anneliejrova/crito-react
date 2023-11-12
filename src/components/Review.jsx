import React from 'react'

const Review = ({txt, img, imgtxt, photo, phototxt, name, title}) => {
  return (
    <div className="review">
        <div className="review-txt">
            <img src={img} alt={imgtxt} /><br />
            "{txt}"
        </div>
        <div className="client">
            <div className="client-img">
                <img src={photo} alt={phototxt} />
            </div>
            <div className="client-txt">
                <h4>{name}</h4>
                <p>{title}</p>
            </div>
        </div>
    </div>
  )
}

export default Review