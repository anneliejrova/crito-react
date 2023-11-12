import React from 'react'

const Team = ({photo, phototxt, name, title}) => {
  return (
    <div className="team-mbr">
        <img src={photo} alt={phototxt} />
        <h3>{name}</h3>
        <p>{title}</p>
    </div>
  )
}

export default Team