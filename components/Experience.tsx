import React, { useState } from 'react'

// Experiences Displayed
import Manulife from './experience/Manulife';
import Baraka from './experience/Baraka';
import WatStreet from './experience/WatStreet';
import Orbital from './experience/Orbital';


const WorkExperience = () => {
  const [workManulife, setWorkManulife] = useState(true);
  const [workBaraka, setWorkBaraka] = useState(false);
  const [workWatStreet, setWorkWatStreet] = useState(false);
  const [workOrbital, setWorkOrbital] = useState(false);
  const [workWARG, setWorkWARG] = useState(false);

  const handleManulife = () => {
    setWorkManulife(true);
    setWorkBaraka(false);
    setWorkWatStreet(false);
    setWorkOrbital(false);
    setWorkWARG(false);
  }

  const handleBaraka = () => {
    setWorkManulife(false);
    setWorkBaraka(true);
    setWorkWatStreet(false);
    setWorkOrbital(false);
    setWorkWARG(false);
  };

  const handleWatStreet = () => {
    setWorkManulife(false);
    setWorkBaraka(false);
    setWorkWatStreet(true);
    setWorkOrbital(false);
    setWorkWARG(false);
  };

  const handleOrbital = () => {
    setWorkManulife(false);
    setWorkBaraka(false);
    setWorkWatStreet(false);
    setWorkOrbital(true);
    setWorkWARG(false);
  };

  const handleWARG = () => {
    setWorkManulife(false);
    setWorkBaraka(false);
    setWorkWatStreet(false);
    setWorkOrbital(false);
    setWorkWARG(true);
  };

  return (
    <div className='flex flex-col relative h-screen top-10 md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[10px] text-gray-300 text-2xl mt-8'>Experience</h3>

      <div className='w-full flex flex-col md:flex-row gap-16 justify-center md:justify-start'>
        <ul className='md:w-40 flex flex-col ml-20'>
          <li
            onClick={handleManulife}
            style={{ fontSize: '1.1rem' }}
            className={`border-l-2 ${workManulife ? 'border-[#3792c0]' : 'border-[rgb(25,25,25)]'} text-gray-500 bg-transparent hover:bg-[#112240] py-3 px-8 text-sm cursor-pointer duration-300`}
          >
            Manulife
          </li>
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
        </ul>
        {workManulife && <Manulife />}
        {workBaraka && <Baraka />}
        {workWatStreet&& <WatStreet />}
        {workOrbital && <Orbital />}
      </div>
    </div>
  );
};

export default WorkExperience