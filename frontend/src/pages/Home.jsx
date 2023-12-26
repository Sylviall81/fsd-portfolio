import React from 'react'
import Layout from '../components/Layout'
import SectionImage from '../components/SectionImage/SectionImage'
import SectionCTA from '../components/SectionCTA/SectionCTA'

function Home() {
  return (
 

      <Layout>
        
        <h1> Home </h1>

        <SectionImage src= 'https://res.cloudinary.com/dsesprxhl/image/upload/v1702062201/portfolio/IMG_9247_kdhwrv.jpg' title= 'About Me' text= "I’m a junior front-end developer looking for a new role in an exciting company. I focus on writing accessible HTML, using modern CSS practices and writing clean JavaScript. When writing JavaScript code, I mostly use React, but I can adapt to whatever tools are required. Im based in London, UK, but Im happy working remotely and have experience in remote teams. When I’m not coding, you’ll find me outdoors. I love being out in nature whether thats going for a walk, run or cycling. Id love you to check out my work." />
        <SectionCTA title="Interested in doing a project together?" />
       


        
</Layout>
       
  )
}

export default Home