import React from 'react'
import './NeutralButton.css'
import { Link } from 'react-router-dom'

const NeutralButton = ({text,link}) => {
  return (
    <>
    <Link to={link}>
        <button className = "neutral-button">{text}</button>
    </Link>
    </>
  )
}

export default NeutralButton;