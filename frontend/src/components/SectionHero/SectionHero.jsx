import React from 'react'
import './SectionHero.css'
import ColorButton from '../ColorButton/ColorButton'

const SectionHero = ({title_text,img_src, img_alt, button_link, button_text}) => {
  return (
    <>
    <div className = 'hero-section-container'>
    <img className='hero-img' src= {img_src} alt = {img_alt}/>

    
        <div className= 'hero-section-text-container'>
            <h3 className= 'hero-section-title'>
            {title_text}
            </h3>
            <ColorButton text={button_text} link={button_link} />
        </div>

    
       
     </div>

    </>
  )
}

export default SectionHero