import { MotionConfig } from 'framer-motion'
import React from 'react'
import { motion } from "framer-motion"
import Orbital from '@/components/work_experience/Orbital';
import Baraka from '@/components/work_experience/Baraka';

type Props = {}

function Experience({}: Props) {
  return (

    <motion.div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center mt-20'>
  <h3 className='absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl mt-8'>Experience</h3>

  <div className="w-full flex space-x-5 overflow-x-auto p-10 snap-x snap-mandatory mt-1">
    <Orbital/>
    <Orbital/>
    <Orbital/>
    <Orbital/>
    <Orbital/>
    {/* Experience Card*/}
    {/* Experience Card*/}
    {/* Experience Card*/}
  </div>
</motion.div>


  )
}

export default Experience