import React from 'react'
import Layout from '../components/Layout'
import SectionImage from '../components/SectionImage/SectionImage'
import SectionCTA from '../components/SectionCTA/SectionCTA'
import SectionHero from '../components/SectionHero/SectionHero'


function Home() {
  return (
 

      <Layout>

      
        <SectionHero src= 'https://res.cloudinary.com/dsesprxhl/image/upload/v1702062088/portfolio/pexels-life-of-pix-7974_xpvena.jpg' link = '#AboutMe' text= 'Hey, I’m Sylvia Llorente and I love to create exceptional digital experiences'/>
      
        <section id="AboutMe" >
          <SectionImage src= 'https://res.cloudinary.com/dsesprxhl/image/upload/v1703631032/portfolio/images/Captura_de_Pantalla_2023-12-26_a_la_s_11.49.35_p._m._jx6eg7.jpg' title= 'About Me' text= "I’m a junior full-stack developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. Im based in London, UK, but Im happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether thats going for a walk, run or cycling. Id love you to check out my work." button_text= "GO TO PORTFOLIO" button_link="/portfolio"/>
        </section>     

        <SectionCTA title="Interested in doing a project together?" />

       


        
</Layout>
       
  )
}

export default Home