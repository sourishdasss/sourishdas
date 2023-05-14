import React, { useState } from 'react'
import Baraka from './experience/Baraka';
import WatStreet from './experience/WatStreet';
import Orbital from './experience/Orbital';
import WARG from './experience/WARG';

const WorkExperience = () => {
     const [workBaraka, setWorkBaraka] = useState(true);
  const [workWatStreet, setWorkWatStreet] = useState(false);
  const [workOrbital, setWorkOrbital] = useState(false);
  const [workWARG, setWorkWARG] = useState(false);

  const handleBaraka = () => {
    setWorkBaraka(true);
    setWorkWatStreet(false);
    setWorkOrbital(false);
    setWorkWARG(false);
  };

  const handleWatStreet = () => {
    setWorkBaraka(false);
    setWorkWatStreet(true);
    setWorkOrbital(false);
    setWorkWARG(false);
  };

  const handleOrbital = () => {
    setWorkBaraka(false);
    setWorkWatStreet(false);
    setWorkOrbital(true);
    setWorkWARG(false);
  };

  const handleWARG = () => {
    setWorkBaraka(false);
    setWorkWatStreet(false);
    setWorkOrbital(false);
    setWorkWARG(true);
  };

  return (
    <div className='flex flex-col relative h-screen top-10 md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[10px] text-gray-300 text-2xl mt-8'>Experience</h3>

      <div className='w-full flex flex-col md:flex-row gap-16 justify-center md:justify-start'>
        <ul className='md:w-32 flex flex-col ml-32'>
          <li
            onClick={handleBaraka}
            style={{ fontSize: '1.1rem' }}
            className={`border-l-2 ${workBaraka ? 'border-[#3792c0]' : 'border-[rgb(25,25,25)]'} text-gray-500 bg-transparent hover:bg-[#112240] py-3 px-8 text-sm cursor-pointer duration-300`}
          >
            Baraka
          </li>
          <li
            onClick={handleWatStreet}
            style={{ fontSize: '1.1rem' }}
            className={`border-l-2 ${workWatStreet ? 'border-[#3792c0]' : 'border-[rgb(25,25,25)]'} text-gray-500 bg-transparent hover:bg-[#112240] py-3 px-8 text-sm cursor-pointer duration-300`}
          >
            WatStreet
          </li>
          <li
            onClick={handleOrbital}
            style={{ fontSize: '1.1rem' }}
            className={`border-l-2 ${workOrbital ? 'border-[#3792c0]' : 'border-[rgb(25,25,25)]'} text-gray-500 bg-transparent hover:bg-[#112240] py-3 px-8 text-sm cursor-pointer duration-300`}
          >
            Orbital
          </li>
          <li
            onClick={handleWARG}
            style={{ fontSize: '1.1rem' }}
            className={`border-l-2 ${workWARG ? 'border-[#3792c0]' : 'border-[rgb(25,25,25)]'} text-gray-500 bg-transparent hover:bg-[#112240] py-3 px-8 text-sm cursor-pointer duration-300`}
          >
            WARG
          </li>
        </ul>
         {workBaraka && <Baraka />}
    {workWatStreet&& <WatStreet />}
    {workOrbital && <Orbital />}
    {workWARG && <WARG />}
      </div>
    </div>
  );
};

export default WorkExperience