import React, {useState} from 'react';
import "./ProjectCarrousel.css";
import { useParams } from 'react-router-dom';



function ProjectCarrousel({project, allProjects}) {
  const id = useParams
  const [currentId, setCurrentId] = useState(id);
  //const [projectArray, setProjectArray] = useState(allProjects);
  console.log("currentID",currentId);
  console.log(allProjects.length);


  const handleClickNext = ({currentId}) =>{

    if (currentId > 0){
      setCurrentId(currentId+1);
      console.log(currentId);
      return fetch(`/api/projects/${currentId}`)
      
    }

  }

  const handleClickPrevious = ({currentId}) =>{
    
    if (currentId <= allProjects.length){
      setCurrentId(currentId-1);
      console.log(currentId)
      return fetch(`/api/projects/${currentId}`)
      
    }

  }
    

  return (
    <>
    <div className="project-slider-full-container">

    <div className="previous-project-container">
            <button className="slider-invisible-button" onClick = {handleClickNext}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
                <path fill="none" stroke="#33323D" d="M9 0L1 8l8 8"/>
              </svg>
              <div className='slider-previous-button-text'>
                <h2>''</h2>
                <p>Previous project</p>
              </div>
            </button>
        
    </div>


    <div className="next-project-container">
            <button className="slider-invisible-button" onClick={handleClickPrevious}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
                <path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/>
              </svg>
              <div className="slider-next-button-text">
                <h2>''</h2>
                <p>Next project</p>
              </div>
            </button>
    </div>
    

    </div>
    </>
  )
}

export default ProjectCarrousel