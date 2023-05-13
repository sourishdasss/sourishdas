import React, { useState } from 'react'
import Baraka from './experience/Baraka';
import Orbital from './experience/Orbital';

const WorkExperience = () => {
     const[workBaraka, setWorkBaraka] = useState(true);
     const[workOrbital, setWorkOrbital] = useState(false);
     // const[workBaraka, setWorkBaraka] = useState(false);
     // const[workBaraka, setWorkBaraka] = useState(false);

     const handleBaraka = () => {
          setWorkBaraka(true);
          setWorkOrbital(false);
     }

     const handleOrbital = () => {
          setWorkBaraka(false);
          setWorkOrbital(true);
     }


  return (
     <div className='flex flex-col relative h-screen top-10 md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl mt-8'>Experience</h3>

          <div className='w-full mt-10 flex flex-col md:flex-row gap-16 justify-center md:justify-start'>
          <ul className='md:w-32 flex flex-col'>
               <li 
                    onClick={handleBaraka}
                    className='border-l-2 border-green text-white bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>
                    Baraka
               </li>
               <li 
                    onClick={handleOrbital}
                    className='border-l-2 border-green text-white bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>
                    Orbital
               </li>
               <li className='border-l-2 border-green text-white bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>
                    Baraka
               </li>
               <li className='border-l-2 border-green text-white bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-8 font-medium'>
                    Baraka
               </li>
          </ul>
          {workBaraka && <Baraka />}
          {workOrbital && <Orbital />}
          </div>
     </div>



  );
}

export default WorkExperience