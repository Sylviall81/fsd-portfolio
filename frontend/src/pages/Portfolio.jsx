import React,{useState, useEffect} from "react";
import Layout from "../components/Layout";
import ProjectService from "../services/ProjectService";
import SectionCTA from "../components/SectionCTA/SectionCTA";
import Project from "../components/Project/Project";

//import SectionImage from "../components/SectionImage/SectionImage";



export default function Portfolio(){
  const [projects, setProjects] = useState([]);
  

  useEffect(() =>{
    ProjectService.getAll().then(res => {
      console.log(res)
      setProjects(res.data);
     }).catch(error => console.log(error))
  },[])
    

     console.log('projects',projects)
  
  return (
    <>
      <Layout>
      
        <div className = 'portfolio-page-container'>
      
        {projects.map ((project,index) =>(
          <Project className = "single-project" key={index} project = {project}/>        
))
}        
        </div>
        <SectionCTA title="Interested in doing a project together?" button_text = "CONTACT ME" button_link = "/contact-me" />
      </Layout>
    </>
  );
}
