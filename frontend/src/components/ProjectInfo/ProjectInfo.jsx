import React from 'react'
import NeutralButton from '../ButtonNeutral/NeutralButton'
import SocialNetworkIcon from '../SocialNetworkIcons/SocialNetworkIcon';
import GithubIcon from "../../assets/icons/icon-github.png";
import './ProjectInfo.css';

function ProjectInfo({project}) {
  return (
    <>
    <div className='project-info-full-container'>

        <div className='hero-image-container'>
          <img className='project-info-hero-image' src = {project.hero_img_url} alt = "main view of the project"></img>
        </div>

        <div className='bottom-container'>

          <div className='project-detail-title-container'>
              <h3>{project.title}</h3>
              <p>{project.short_description}</p>
              <h4>tecnologias</h4>

              <div className='github-round'>
                <SocialNetworkIcon
                src={GithubIcon}
                url={project.project_repo}/>
              </div>

            <NeutralButton text="VISIT WEBSITE" link={project.project_link}/>
            

        </div>

        <div className='project-detail-text-container'>
        <h3>Project Background</h3>
        <p>{project.project_background}</p>
        <h3>Static Previews</h3>
        <img className='static-preview' alt="" src={project.static_preview_1}/>
        <img className='static-preview' alt="" src={project.static_preview_2}/>
        <img className='static-preview' alt="" src={project.static_preview_3}/>

        </div>

        </div>

    </div>

    </>
  )
}

export default ProjectInfo