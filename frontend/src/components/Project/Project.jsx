import React from 'react'
import SectionImage from '../SectionImage/SectionImage'

function Project({project}) {
  return (
    <>
    <SectionImage src={project.cover_img_url} title = {project.title} text ={project.short_description} button_text = "VIEW PROJECT"/>
    </>
  )
}

export default Project