import React from 'react'
import { motion } from "framer-motion"
import { HiChevronRight } from "react-icons/hi";
import { SocialIcon } from 'react-social-icons';
import {TbFolderFilled} from "react-icons/tb";

type Props = {}

function RepMe({}: Props) {
  return (
     <div className="mt-12">
  <article className="flex flex-col rounded-lg space-y-4 flex-shrink-0 w-[250px] md:w-[350px] xl:w-[450px] snap-center bg-[#363636] p-6 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 glow-outline" style={{ margin: '1.5rem 1.5rem 1.5rem 0' }}>

  <div className="flex items-center ml-10">
    <div>
      <TbFolderFilled className="text-[#3792c0] h-12 w-12" />
    </div>

    <div className="ml-auto">
      <SocialIcon 
              url="https://github.com/sourishdas07" 
              fgColor="gray" 
              bgColor="transparent"
      />
    </div>
  </div>

  <div className="px-0 md:px-10 text-center">
    <h4 className="text-2xl text-[#3792c0] font-semibold hover:tw-shadow-glow">Bull Forecast</h4>


    <p className="mt-2 mb-2 text-gray-300">
      Bull Forecast is a web app that uses Additive Regression to provide real-time price updates and predictions about 
      all publicly traded stocks in the NYSE and NASDAQ and over 50 cryptocurrencies in a user-friendly manner. 
    </p>

   
  <div className="flex justify-center">
      <hr className="border-t border-gray-500 w-1/2 my-4" />
    </div>



    <div className="flex font-light text-center">
  <p className="font-div text-m mt-4 mb-6 font-thin">Python, Streamlit, Pandas, Matplotlib, Yahoo Finance</p>

</div>

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

export default RepMe