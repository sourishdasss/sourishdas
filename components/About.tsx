import { MotionConfig } from 'framer-motion'
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-widest text-gray-500 text-2xl'>About</h3>

          <motion.img 
               initial = {{
                    x: -500,
               }}
               whileInView = {{
                    x: 0
               }}
               viewport = {{
                    once: true 
               }}
               transition = {{
                    duration: 2
               }}
               src = "https://www.photohound.co/images/1014752l.jpg"
               className="-mb-20 mb:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-64 md:h-96 xl:w-[500px] xl:h-[600px]"
          />

          <div className='space-y-10 px-0 md:px-10'>
               <h4 className='text-4xl font-semibold'>
                    Hi, my name is SOurish and I am a first year student at UW
               </h4>
          </div>
    </div>
  )
}