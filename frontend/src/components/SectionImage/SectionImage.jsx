import React from 'react'
import NeutralButton from '../ButtonNeutral/NeutralButton'
import './SectionImage.css'

const SectionImage = ({src,title,text}) => {
  return (
    <>

    <div clasName= 'image-section-container'>

    <div className = 'aside-image-container' >
        <img className = "image" src={src} alt="" />
    </div>

    <div className = 'text-container'>
        <h3>{title}</h3>

        <p>{text}</p>

        <NeutralButton text='GO TO PORTFOLIO'/>

        

    </div>

    </div>

    
    
    
    </>
  )
}

export default SectionImage