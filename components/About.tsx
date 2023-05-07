import { MotionConfig } from 'framer-motion'
import React from 'react'
import { motion } from "framer-motion"

type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen text-center top-10 md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute top-24 uppercase tracking-[10px] text-gray-500 text-2xl'>Get To Know Me</h3>

     {/*
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
               className="items-center -mb-20 mb:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96"
          />
     */}
          

          <div className='px-10 md:px-20'>
               <p className='items-center'>
                    Hi, my name is Sourish Das. I am a <span>Second Year Student</span> at the University of Waterloo majoring in Computer Science. 
               </p>
                    
                    
               <p className='max-w-[600px] items-center'>
                    I am currently interning at a YC 21 startup, named Baraka Financial limited. FILL IN
                    ...........................................................................................................................
                    ...........................................................................................................................
                    ...........................................................................................................................
                    ...........................................................................................................................
                    ...........................................................................................................................
                    ......................................
               </p>
          </div>
    </div>
  )
}