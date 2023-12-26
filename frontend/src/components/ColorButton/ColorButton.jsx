import React from 'react';
import { Link } from 'react-router-dom';

const ColorButton = ({text,link}) => {
  return (
    <>

<>
    <Link to={link}>
        <button className = "color-button">{text}</button>
    </Link>
    </>

    </>
  )
}

export default ColorButton