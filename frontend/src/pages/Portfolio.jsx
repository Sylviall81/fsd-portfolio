import React,{useState, useEffect} from "react";
import Layout from "../components/Layout";
import { ProjectService } from "../services/ProjectService";
import SectionCTA from "../components/SectionCTA/SectionCTA";
import Project from "../components/Project/Project";

//import SectionImage from "../components/SectionImage/SectionImage";

export default function Portfolio(){
  const [projects, setProjects] = useState([]);
  const api = ProjectService();

  useEffect(() =>{
    api.getAll().then(res => {
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
          <Project key={index} project = {project}/>        
))
}
        <SectionCTA title="Interested in doing a project together?" />
        
        </div>
      </Layout>
    </>
  );
}
