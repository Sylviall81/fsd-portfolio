import React from 'react'
import NeutralButton from '../ButtonNeutral/NeutralButton'
import SocialNetworkIcon from '../SocialNetworkIcons/SocialNetworkIcon';
import GithubIcon from "../../assets/icons/icon-github.png";
import './ProjectInfo.css';

function ProjectInfo({project}) {
  return (
    <>
    <div className='project-info-full-container'>

        <div className='hero-image-comtainer'>
        <img className='hero-image' src = {project.hero_img_url} alt = "main view of the project"></img>
        </div>

        <div className='bottom-container'>

        <div className='project-detail-title-container'>
            <h3>{project.title}</h3>
            <p>{project.short_description}</p>
            <h5>tecnologias</h5>

            <div className='github-round'>
            <SocialNetworkIcon
            src={GithubIcon}
            url={project.project_repo}
          /></div>



            <NeutralButton text="VISIT WEBSITE" link={project.project_link}/>
            

        </div>

        <div className='project-detail-text-container'>
        <h4>Project Background</h4>
        <p>{project.project_background}</p>
        <h4>Static Previews</h4>
        <img alt="" src={project.static_preview_1}/>
        <img alt="" src={project.static_preview_2}/>
        <img alt="" src={project.static_preview_3}/>

        </div>

        </div>

    </div>

    </>
  )
}

export default ProjectInfo