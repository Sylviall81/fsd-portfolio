import React from 'react'
import NeutralButton from '../ButtonNeutral/NeutralButton'
import './SectionImage.css'

const SectionImage = ({src,title,text}) => {
  return (
    <>

    <div className= 'image-section-container'>

       <div className = 'aside-image-container' >
          <img className = "image" src={src} alt="developer of the portfolio looking upfront and smiling" />
      </div>

      <div className = 'text-container'>
        <h3 className = "section-title">{title}</h3>

        <p className= "text-content">{text}</p>

        <div className = 'button-container'>
        <NeutralButton text='GO TO PORTFOLIO' link= "/portfolio" />
        </div>

        </div>

        

        

    

    </div>

    </>
  )
}

export default SectionImage