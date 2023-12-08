import React from 'react';
import ContactForm from '../components/ContactForm';
import Header from '../components/Header/Header';
import ContentSection from '../components/ContentSection';
import Footer from '../components/Footer';
import '../index.css';

export default function Main() {
  return (
    <div>
        <Header/>

        <h1>HOME</h1>
        

       <ContentSection/>

        <ContactForm/>

        <Footer />
        
        </div>
  )
}
