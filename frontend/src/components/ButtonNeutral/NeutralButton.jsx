import React from 'react'
import './NeutralButton.css'
import { Link } from 'react-router-dom'

const NeutralButton = ({text,link, type}) => {
  return (
    <>
    <Link to={link}>
        <button type= {type} className = "neutral-button">{text}</button>
    </Link>
    </>
  )
}

export default NeutralButton;