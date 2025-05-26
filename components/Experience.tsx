import React, { useState } from 'react'

// Experiences Displayed
import Manulife from './experience/Manulife';
import Baraka from './experience/Baraka';
import Boosted from './experience/WatStreet';
import Givver from './experience/Givver';
import StackAdapt from "@/components/experience/StackAdapt";

const WorkExperience = () => {
  const [workStackAdapt, setworkStackAdapt] = useState(false);
  const [workBoosted, setWorkBoosted] = useState(true);
  const [workGivver, setWorkGivver] = useState(false);
  const [workManulife, setWorkManulife] = useState(false);
  const [workBaraka, setWorkBaraka] = useState(false);

  const handleStackAdapt = () => {
    setworkStackAdapt(true);
    setWorkBoosted(false);
    setWorkGivver(false);
    setWorkManulife(false);
    setWorkBaraka(false);
  };

  const handleBoosted = () => {
    setworkStackAdapt(false);
    setWorkBoosted(true);
    setWorkGivver(false);
    setWorkManulife(false);
    setWorkBaraka(false);
  };

  const handleGivver = () => {
    setworkStackAdapt(false);
    setWorkBoosted(false);
    setWorkGivver(true);
    setWorkManulife(false);
    setWorkBaraka(false);
  };

  const handleManulife = () => {
    setworkStackAdapt(false);
    setWorkBoosted(false);
    setWorkGivver(false);
    setWorkManulife(true);
    setWorkBaraka(false);
  }

  const handleBaraka = () => {
    setworkStackAdapt(false);
    setWorkBoosted(false);
    setWorkGivver(false);
    setWorkManulife(false);
    setWorkBaraka(true);
  };

  return (
    <div className='flex flex-col relative h-screen top-10 md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
      <h3 className='absolute top-24 uppercase tracking-[10px] text-gray-300 text-2xl mt-8'>Experience</h3>

      <div className='w-full flex flex-col md:flex-row gap-16 justify-center md:justify-start'>
        <ul className='md:w-40 flex flex-col ml-20'>
          <li
              onClick={handleStackAdapt}
              style={{ fontSize: '1.1rem' }}
              className={`border-l-2 ${workStackAdapt ? 'border-[#3792c0]' : 'border-[rgb(25,25,25)]'} text-gray-500 bg-transparent hover:bg-[#112240] py-3 px-8 text-sm cursor-pointer duration-300`}
          >
            StackAdapt
          </li>
          <li
              onClick={handleBoosted}
              style={{ fontSize: '1.1rem' }}
              className={`border-l-2 ${workBoosted ? 'border-[#3792c0]' : 'border-[rgb(25,25,25)]'} text-gray-500 bg-transparent hover:bg-[#112240] py-3 px-8 text-sm cursor-pointer duration-300`}
          >
            Boosted.ai
          </li>
          <li
              onClick={handleGivver}
              style={{ fontSize: '1.1rem' }}
              className={`border-l-2 ${workGivver ? 'border-[#3792c0]' : 'border-[rgb(25,25,25)]'} text-gray-500 bg-transparent hover:bg-[#112240] py-3 px-8 text-sm cursor-pointer duration-300`}
          >
            Givver
          </li>
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
        </ul>
        {workStackAdapt && <StackAdapt />}
        {workBoosted&& <Boosted />}
        {workGivver && <Givver />}
        {workManulife && <Manulife />}
        {workBaraka && <Baraka />}
      </div>
    </div>
  );
};

export default WorkExperience
