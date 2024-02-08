import {useState} from 'react';
import "./ProjectCarrousel.css";
import { useParams,useNavigate } from 'react-router-dom';




function ProjectCarrousel({project,allProjects}) {
  const [currentId, setCurrentId] = useState(useParams().id);
  const navigate = useNavigate();

  console.log({project})
  //const id = useParams
  // const [projectsArray, setProjectsArray]= useState([]);
  


  // const handleClickNext = ({currentId}) =>{

  //   if (currentId > 0){
  //     setCurrentId(currentId+1);
  //     console.log(currentId);
  //     return fetch(`/api/projects/${currentId}`)
      
  //   }

  // }

 

  const handleClickNext = () => {
    if (currentId < allProjects.length - 1) {
      const nextId = parseInt(currentId)+1;
      setCurrentId(nextId); // Update state once
      console.log(nextId)
      navigate(`/project-detail/${nextId}`)

    }
  };

  const handleClickPrevious = () => {
    if (currentId < allProjects.length) {
      const previousId = parseInt(currentId)-1;
      setCurrentId(previousId); // Update state once
      console.log(previousId)
      navigate(`/project-detail/${previousId}`)

    }
  };






  // const handleClickPrevious = ({currentId}) =>{
    
  //   if (currentId <= allProjects.length){
  //     setCurrentId(currentId-1);
  //     console.log(currentId)
  //     return fetch(`/api/projects/${currentId}`)
      
  //   }

  // }
    

  return (
    <>
    <div className="project-slider-full-container">

    <div className="previous-project-container">
            <button className="slider-invisible-button" onClick = {handleClickPrevious}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
                <path fill="none" stroke="#33323D" d="M9 0L1 8l8 8"/>
              </svg>
              <div className='slider-previous-button-text'>
                <h2>{project.title}</h2>
                <p>Previous project</p>
                
              </div>
            </button>
        
    </div>


    <div className="next-project-container">
            <button className="slider-invisible-button" onClick={handleClickNext}>
              <svg xmlns="http://www.w3.org/2000/svg" width="10" height="16">
                <path fill="none" stroke="#33323D" d="M1 0l8 8-8 8"/>
              </svg>
              <div className="slider-next-button-text">
                <h2>{project.title}</h2>
                <p>Next project</p>
              </div>
            </button>
    </div>
    

    </div>
    </>
  )
}

export default ProjectCarrousel