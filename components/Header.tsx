import React from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:center">
      <div>
        <button className="px-6 py-2 border border-[#242424] rounded-full 
                            uppercase text-sm tracking-widest text-gray-500 transition-all
                            hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40"> About Me </button>
        <button className="px-6 py-2 border border-[#242424] rounded-full 
                            uppercase text-sm tracking-widest text-gray-500 transition-all
                            hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40"> About Me </button>
        <button className="px-6 py-2 border border-[#242424] rounded-full 
                            uppercase text-sm tracking-widest text-gray-500 transition-all
                            hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40"> About Me </button>
      </div>

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
    </header>
  )
}