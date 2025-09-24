import React from 'react'
import Project from './Project'

const ProjectList = ({projects}) => {
  return (
    <section>
        {projects.map((project)=>(
            <Project {...project} /> 
        ))}
    </section>
  )
}

export default ProjectList