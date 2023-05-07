import React from 'react'
import ProjectCard from './ProjectCard'

type Props = {}

function Projects({}: Props) {
  return (
    <div className='max-w-contentContainer mx-auto px-4 py-12'>
      <div className='w-full flex flex-col items-center'>
        <h3 className='uppercase tracking-widest text-gray-500 text-2xl'>My Projects</h3>
      </div>
      <div className='top-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10'>
        <ProjectCard />
      </div>
    </div>
  )
}

export default Projects