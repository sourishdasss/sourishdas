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
          <h2 className="text-md font-semibold uppercase text-gray-500 pb-2 tracking-[15px]">Software Engineer</h2>
     <h1 className="text-6xl font-semibold px-15">
          <span>{text}</span>
          <Cursor cursorColor="#F7AB0A" />
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
        {/* Social Icons */}
          <SocialIcon 
            url="https://github.com/sourishdas07" 
            fgColor="gray" 
            bgColor="transparent"
          />
          <SocialIcon 
            url="https://www.linkedin.com/in/sourishdas/" 
            fgColor="gray" 
            bgColor="transparent"
          />
          <SocialIcon 
            url="https://www.instagram.com/sourish.das07/" 
            fgColor="gray" 
            bgColor="transparent"
          />
      </motion.div>

        <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon 
          className="cursor-pointer"
          network="email"
          fgColor="gray" 
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
          GET IN TOUCH
        </p>
      </div>

      
    </div>
  )
}