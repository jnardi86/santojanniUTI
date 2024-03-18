import React from 'react'

const Card = ({title, description, moduleId}) => {
  return (
    <div>
        <p>{title}</p>
        <p>{description}</p>
        <p>{moduleId}</p>
    </div>
  )
}

export default Card