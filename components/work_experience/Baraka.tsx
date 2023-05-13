import React from 'react'
import { motion } from "framer-motion"
import { HiChevronRight } from "react-icons/hi";

type Props = {}

function Baraka({}: Props) {
     


  return (
     <article className='flex flex-col rounded-lg items-center space-y-4 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[700px] snap-center bg-[#292929] p-6 hover:opacity-100 opacity-60 cursor-pointer transition-opacity duration-200'>
          <motion.img 
               initial={{
                    y:-100,
                    opacity: 0,
               }}
               transition={{ duration: 2 }}
               whileInView={{ opacity: 1, y:0 }}
               viewport={{ once:true }}
               className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
               src="https://logotaglines.com/wp-content/uploads/2022/10/University-of-Waterloo-Logo-Tagline-Slogan-Motto-480x480.jpg"
               alt=""
          />

          <div className='px-0 md:px-10'>
               <h4 className='text-4xl font-light'>Full Stack Developer</h4>
               <p className='font-div text-2xl mt-1'>UW Orbital</p>

               <div className='flex space-x-2 my-2'>
               <img 
                     className='h-10 w-10 rounded-full'
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
  )
}

export default Baraka