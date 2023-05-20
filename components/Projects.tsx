import React from 'react'
import { motion } from "framer-motion"
import BullForecast from './projects/BullForecast'
import RepMe from './projects/RepMe';
import NetflixClone from './projects/NetflixClone';
// import StockCorrelation from './projects/StockCorrelation';
import Invst from './projects/Invst';


type Props = {}

function Projects({}: Props) {
  return (
    <motion.div className='flex flex-col relative h-screen top-10 md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
  <h3 className='absolute top-24 uppercase tracking-[10px] text-gray-300 text-2xl mt-4'>Projects</h3>

  <div className="w-full flex space-x-5 overflow-x-auto p-10 mt-8">
    <BullForecast />
    <Invst />
    <RepMe/>
    <NetflixClone/>
    {/* <StockCorrelation/> */}
  </div>

</motion.div>


  );
};

export default Projects