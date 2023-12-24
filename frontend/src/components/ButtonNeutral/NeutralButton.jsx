import React from 'react'
import './NeutralButton.css'

const NeutralButton = ({text}) => {
  return (
    <>
        <button className = "neutral-button">{text}</button>
    </>
  )
}

export default NeutralButton;