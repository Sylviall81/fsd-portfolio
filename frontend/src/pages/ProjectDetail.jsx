import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ProjectService } from '../services/ProjectService';
import ProjectInfo from '../components/ProjectInfo/ProjectInfo';
import Layout from '../components/Layout';



function ProjectDetail() {
    const {id} = useParams();
    const [project, setProject] = useState({});
    

    useEffect(() => {
        const api = ProjectService();
        api.getById(id)
            .then (response => {
                setProject(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);

    console.log(project)



  return (
    <>
    <Layout>

    <ProjectInfo project={project} />

    </Layout>
    </>
  )
}

export default ProjectDetail