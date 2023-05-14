import React from 'react'
import { motion } from "framer-motion"
import { HiChevronRight } from "react-icons/hi";
import { SocialIcon } from 'react-social-icons';
import {TbFolderFilled} from "react-icons/tb";

type Props = {}

function BullForecast({}: Props) {
  return (
     <div className="mt-12">
  <article className='flex flex-col rounded-lg space-y-4 flex-shrink-0 w-[250px] md:w-[350px] xl:w-[450px] snap-center bg-[#292929] p-6 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 glow-outline' style={{ margin: '1.5rem 1.5rem 1.5rem 0' }}>

    <div className="flex items-center space-x-4">
      <div className="ml-4">
        <TbFolderFilled className="text-[#3792c0] h-8 w-8" />
      </div>
      
      <div className="ml-auto">
        <SocialIcon 
                url="https://github.com/sourishdas07" 
                fgColor="gray" 
                bgColor="transparent"
        />
      </div>
    </div>

    <div className='px-0 md:px-10'>
      <h4 className='text-4xl font-light'>Bull Forecast</h4>
      <p className='font-div text-xl mt-1'>Python, Streamlit, Yahoo Finance</p>

      <p className='mt-2'>
        Bull Forecast is a web app that provides real-time price updates and predictions about 
        all publically traded stocks in the NYSE and NASDAQ
        
      </p>
    </div>
  </article>

  <style jsx>{`
    .glow-outline {
      box-shadow: 0 0 20px 5px rgba(59, 130, 246, 0.8);
    }

    .glow-outline:hover {
      opacity: 1;
    }
  `}</style>
</div>




  );
}

export default BullForecast