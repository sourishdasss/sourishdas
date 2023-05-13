import React from 'react'
import { motion } from "framer-motion"
import BullForecast from './projects/BullForecast'


type Props = {}

function Projects({}: Props) {
  return (
    <motion.div className='flex flex-col relative h-screen top-10 md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
  <h3 className='absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl mt-8'>Projects</h3>

  <div className="w-full flex space-x-5 overflow-x-auto p-10 snap-x snap-mandatory mt-8">
    <BullForecast/>
    <BullForecast/>
    <BullForecast/>
  </div>
</motion.div>


  );
};

export default Projects