import React from 'react'
import { motion } from "framer-motion"
import { TbFolderFilled } from 'react-icons/tb';
import { SocialIcon } from 'react-social-icons';

type Props = {}

function NetflixClone({}: Props) {
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
    <h4 className="text-2xl text-[#3792c0] font-semibold hover:tw-shadow-glow">Netflix2.0</h4>


    <p className="mt-2 mb-2 text-gray-300">
      Netflix2.0 is a web app that replicates the look and feel of Netflix, by allowing users to log into their 
      persnalized accounts, and redirecting them to a reliable free-of-charge service to watch their favourite content.
    </p>

   
  <div className="flex justify-center">
      <hr className="border-t border-gray-500 w-1/2 my-4" />
    </div>



    <div className="flex font-light text-center">
  <p className="font-div text-m mt-4 mb-6 font-thin">React, Firebase DB, Stripe Checkouts, TMDB API</p>

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

export default NetflixClone