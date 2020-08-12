import React from 'react'
import './CardPequeno.css'

function CardPequeno(props) {
  return (
    <div className="smallcard-container">
      <img src={props.icon} alt="icon"/>
      <span><strong>{props.type}:</strong> {props.value}</span>
    </div>
  )
}

export default CardPequeno