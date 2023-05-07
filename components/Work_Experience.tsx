import React from 'react'
import { motion } from "framer-motion"
import baraka from '@/components/work/baraka';
import Baraka from './Baraka';


const Work_Experience = () => {
  return (

     <motion.div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-widest text-gray-500 text-2xl'>Experience</h3>

      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li className='border-l-2 text-blue-200 text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursur-pointer duration-300 px-8 font-medium'>
              Baraka
          </li>
          <li className='border-l-2 border-l-hoverColour text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursur-pointer duration-300 px-8 font-medium'>
              UW Orbital
          </li>
          <li className='border-l-2 border-l-textGreen text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursur-pointer duration-300 px-8 font-medium'>
              WARG
          </li>
        </ul>

        <Baraka />
        
        {/* Experience Card*/}
        {/* Experience Card*/}
        {/* Experience Card*/}
      </div>

     </motion.div>
     
    
  )
}

export default Work_Experience