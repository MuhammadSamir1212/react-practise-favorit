import React from 'react'
import stayles from './Card.module.css'

const Card = (props) => {
  return (
    <div className={stayles.card}>{props.children}</div>
  )
}

export default Card