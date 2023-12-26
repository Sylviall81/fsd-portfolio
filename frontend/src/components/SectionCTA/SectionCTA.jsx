import React from 'react'
import NeutralButton from '../ButtonNeutral/NeutralButton'
import './SectionCTA.css'

const SectionCTA = ({title}) =>{
  return (
    <>

   <div className="cta-section-container" >

        <div className= 'cta-section-text-container'>
            <h3 className= "cta-section-title">{title}</h3>
        </div>
        <div className='cta-rule'>                                     

        </div>
    
    <NeutralButton text= 'CONTACT ME'/>

    </div>
    
    </>
  )
}

export default SectionCTA