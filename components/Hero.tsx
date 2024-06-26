import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundShapes from '@/components/BackgroundShapes';
import { motion } from "framer-motion"
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Hero({}: Props) {
     const [text, count] = useTypewriter({
          words: ["Hi, I'm Sourish"],
          loop: true, 
          delaySpeed: 3500,
     });

  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
    
      <BackgroundShapes />
    
      <div className='z-20'>
        <h2 className="text-md font-semibold uppercase text-gray-300 pb-2 tracking-[15px]">
          Software Engineer
        </h2>

        <h1 className="text-6xl text-[#3792c0] font-semibold px-15 mt-4">
          <span>{text}</span>
          <Cursor cursorColor="#3792c0" />
        </h1>
     </div>

     <motion.div 
        initial = {{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate = {{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition = {{
          duration: 2
        }}
        className="flex flex-row items-center">
          <SocialIcon 
            url="https://github.com/sourishdasss" 
            fgColor="gray" 
            bgColor="transparent"
          />
          <SocialIcon 
            url="https://www.linkedin.com/in/sourishdas/" 
            fgColor="gray" 
            bgColor="transparent"
          />
          <SocialIcon 
            url="https://www.instagram.com/sourish.dasss/" 
            fgColor="gray" 
            bgColor="transparent"
          />
          <SocialIcon 
            url="mailto:s4das@uwaterloo.ca" 
            fgColor="gray" 
            bgColor="transparent"
          />
      </motion.div>      
    </div>
  )
}