import React from 'react'
import { motion } from "framer-motion"
import { HiChevronRight } from "react-icons/hi";

type Props = {}

function BullForecast({}: Props) {
  return (
     <div className="mt-12">
          <article className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[500px] snap-center bg-[#292929] p-6 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200'>
               <motion.img 
                    initial={{
                    y: -100,
                    opacity: 0,
               }}
     transition={{ duration: 2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className='w-24 h-24 rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
      src="https://logotaglines.com/wp-content/uploads/2022/10/University-of-Waterloo-Logo-Tagline-Slogan-Motto-480x480.jpg"
      alt=""
    />

    <div className='px-0 md:px-10'>
      <h4 className='text-4xl font-light'>Bull Forecast</h4>
      <p className='font-div text-2xl mt-1'>UW Orbital</p>

      <div className='flex space-x-2 my-2'>
        <img 
          className='h-8 w-8 rounded-full'
          src=''
          alt=''
        />
        {/* Tech Used*/}
      </div>

      <p>......Duration.......</p>

      <ul className='list-disc space-y-2 ml-5 text-lg'>
        <li>Point</li>
        <li>Point</li>
        <li>Point</li>
      </ul>
    </div>
  </article>
</div>

  );
}

export default BullForecast