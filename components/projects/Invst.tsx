import React from 'react'
import { motion } from "framer-motion"
import { HiChevronRight } from "react-icons/hi";
import { SocialIcon } from 'react-social-icons';
import {TbFolderFilled} from "react-icons/tb";

type Props = {}

function Invst({}: Props) {
  return (
    <div className="mt-12">
  <article className="flex flex-col rounded-lg space-y-4 flex-shrink-0 w-[200px] md:w-[300px] xl:w-[400px] h-[250px] md:h-[350px] xl:h-[450px] snap-center bg-[#363636] p-6 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200 glow-outline" style={{ margin: '1.5rem 1.5rem 1.5rem 0' }}>

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
    <h4 className="text-2xl text-[#3792c0] font-semibold hover:tw-shadow-glow">INV$T</h4>


    <p className="mt-2 mb-2 text-gray-300">
      INV$T is a service allows the user to preview real-time price changes in their created portfolio and sends users an email notification if a specific stock in the portfolio reaches a certain
      target price, or a likely possibility of providing a certain return
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

export default Invst