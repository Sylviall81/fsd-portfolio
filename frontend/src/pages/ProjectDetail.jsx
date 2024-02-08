import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProjectService  from '../services/ProjectService';
import ProjectInfo from '../components/ProjectInfo/ProjectInfo';
import Layout from '../components/Layout';
import ProjectCarrousel from '../components/ProjectCarrousel/ProjectCarrousel';



function ProjectDetail() {
    const {id} = useParams();
    const [project, setProject] = useState({});
    const [projectArray, setProjectArray] = useState([]);

    
   

  console.log(id);

  

    useEffect(() => {
        ProjectService.getById(id)
            .then (response => {
                setProject(response.data);
            })
            .catch(error => {
              console.log(error);
            });
    }, [id]);

    console.log(project)

    useEffect(() =>{
      
      ProjectService.getAll().then(res => {
        console.log(res)
        setProjectArray(res.data);
       }).catch(error => console.log(error))
    },[])





  return (
    <>
    <Layout>

         <ProjectInfo project={project} />
        <ProjectCarrousel project={project} allProjects= {projectArray}/>

    </Layout>
    </>
  )
}

export default ProjectDetail