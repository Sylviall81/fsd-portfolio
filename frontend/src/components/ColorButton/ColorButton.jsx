import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';


const ColorButton = ({text,link}) => {
  return (
    <>

<>
    <Link smooth to={link}>
        <button className = "color-button">{text}</button>
    </Link>
    </>

    </>
  )
}

export default ColorButton