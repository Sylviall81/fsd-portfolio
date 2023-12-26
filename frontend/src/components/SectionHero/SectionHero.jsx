import React from 'react'
import './SectionHero.css'
import ColorButton from '../ColorButton/ColorButton'


const SectionHero = ({text}) => {
  return (
    <>
    <div className = 'hero-section-container'>

    
        <div className= 'hero-section-text-container'>
            <h3 className= 'hero-section-title'>
            {text}
            </h3>
            <ColorButton text='ABOUT ME' link= '/#AboutMe' />
        </div>

    
       
     </div>

    </>
  )
}

export default SectionHero