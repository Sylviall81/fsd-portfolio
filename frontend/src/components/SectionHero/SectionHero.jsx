import React from 'react'
import './SectionHero.css'

const SectionHero = ({src,alt,text}) => {
  return (
    <>
    <div className = 'hero-section-container'>

    
        <div className= 'hero-section-text-container'>
            <h3 className= 'hero-section-title'>
            {text}
            </h3>
        </div>

    
       
     </div>

    </>
  )
}

export default SectionHero