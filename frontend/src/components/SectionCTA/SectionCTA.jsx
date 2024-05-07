import React from 'react'
import NeutralButton from '../ButtonNeutral/NeutralButton'
import './SectionCTA.css'

const SectionCTA = ({title, button_text, button_link}) =>{
  return (
    <>

   <div className="cta-section-container" >

        <div className= 'cta-section-text-container'>
            <h3 className= "cta-section-title">{title}</h3>
        </div>
        <div className='cta-rule'>                                     

        </div>
    
    <NeutralButton text= {button_text} link={button_link}/>

    </div>
    
    </>
  )
}

export default SectionCTA