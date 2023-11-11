import React from 'react'

const Reason = ({img, imgtxt, title, txt}) => {
  return (
     <div className="reason">
        <div>
            <img src={img} alt={imgtxt} />
        </div>
        <div>
            <h3>{title}</h3>
            {txt}
        </div>
    </div>
  )
}

export default Reason