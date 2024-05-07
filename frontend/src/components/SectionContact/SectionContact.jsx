import React from 'react'
import './SectionContact.css'
import ContactForm from '../ContactForm/ContactForm'


function SectionContact() {
  return (
    <>
      <div className="contact-section-container">
        <div className="section-title">
          <h3>Contact Me</h3>
        </div>

        <div className="form-container">
        <ContactForm />




          
        </div>

      </div>  
    </>
  )
}

export default SectionContact