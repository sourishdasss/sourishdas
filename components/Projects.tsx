import React from 'react'
import ProjectCard from './ProjectCard'

type Props = {}

function Projects({}: Props) {
  return (
    
  <div className='max-w-contentContainer mx-auto px-4' style={{ height: '120vh' }}>
  <div className='w-full flex flex-col items-center mt-36'>
    <h3 className='uppercase tracking-widest text-gray-500 text-2xl'>My Projects</h3>
  </div>

  <div className='top-24 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-9 mt-32 px-[7rem]'>
        <ProjectCard 
          title="TESTING"
          des="TESTING.........................................................."
          listItem={["React.js", "Tailwind CSS", "Stripe"]}
          link="https://www.linkedin.com/feed/"
        />
        <ProjectCard 
          title="TESTING"
          des="TESTING.........................................................."
          listItem={["React.js", "Tailwind CSS", "Stripe"]}
          link="https://www.linkedin.com/feed/"
        />
        <ProjectCard 
          title="TESTING"
          des="TESTING.........................................................."
          listItem={["React.js", "Tailwind CSS", "Stripe"]}
          link="https://www.linkedin.com/feed/"
        />
        <ProjectCard 
          title="TESTING"
          des="TESTING.........................................................."
          listItem={["React.js", "Tailwind CSS", "Stripe"]}
          link="https://www.linkedin.com/feed/"
        />
        <ProjectCard 
          title="TESTING"
          des="TESTING.........................................................."
          listItem={["React.js", "Tailwind CSS", "Stripe"]}
          link="https://www.linkedin.com/feed/"
        />
        <ProjectCard 
          title="TESTING"
          des="TESTING.........................................................."
          listItem={["React.js", "Tailwind CSS", "Stripe"]}
          link="https://www.linkedin.com/feed/"
        />
      </div>
    </div>
  )
}

export default Projects