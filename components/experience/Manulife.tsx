import React from 'react'
import {BsArrowReturnRight} from 'react-icons/bs';

const Manulife = () => {
  return (
    <div className='w-full'>
      
      <h3 className='flex gap-1 font-medium text-gray-300 text-2xl tracking-wide font-robotoRegular'>
        Software Developer Intern  
        <span className='text-[#3792c0] uppercase tracking-wide'>@ Manulife</span>
      </h3>

      <p className='text-base mt-3 font-medium text-[#3792c0] font-robotoRegular'>January 2024 - April 2024</p>

      <div className='flex mt-8 space-x-6 my-2 font-robotoRegular'>
        {/* Python */}
        <img 
          className='h-9 w-9 rounded-full'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'
          alt=''
        />

        {/* Azure */}
        <img 
          className='h-8 w-8'
          src='https://swimburger.net/media/ppnn3pcl/azure.png'
          alt=''
        />

        {/* Docker */}
        <img 
          className='h-8 w-10'
          src='https://seeklogo.com/images/D/docker-logo-6D6F987702-seeklogo.com.png'
          alt=''
        />

        {/* PostgreSQL */}
        <img 
          className='h-8 w-8'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png'
          alt=''
        />

        {/* MongoDB */}
        <img 
          className='h-8 w-13'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png'
          alt=''
        />

        {/* Airflow */}
        <img 
          className='h-8 w-13'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AirflowLogo.png/1200px-AirflowLogo.png'
          alt=''
        />

      </div>

      <ul className='mt-8 flex flex-col gap-4'>
        <li className='text-base gap-2 text-gray-500 max-w-[50rem]'>
          <span>
            During my internship with Manulife&apos;s Cloud Platform Team, 
            I spearheaded initiatives aimed at optimizing processes 
            and reducing operational costs. A standout contribution 
            was the development of a Python automation script utilizing 
            the Github API, resulting in a notable 35% reduction in time 
            spent managing repository access. I also focused on enhancing 
            deployment efficiency by optimizing CI/CD pipelines in Azure DevOps. 
            Leveraging Docker, I successfully reduced infrastructure costs by 
            15% through the streamlined packaging and deployment of Python 
            applications. Additionally, I played a crucial role in enhancing 
            system scalability by designing Airflow DAGs to migrate 2 GB of 
            custom data from PostgreSQL to MongoDB. My efforts extended to 
            ensuring over 95% IT inventory adherence across 2500+ servers by 
            optimizing a DB Scanning Tool using SQL and Python. This comprehensive 
            approach demonstrates my commitment to driving efficiency and 
            innovation within the organization.
          </span>
        </li>
      </ul>
    </div>
  )
}

export default Manulife