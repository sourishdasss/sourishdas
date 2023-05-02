import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons';
import { motion } from "framer-motion"

import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundShapes from '@/components/BackgroundShapes';
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-5 left-flex z-20 xl:center items-center text-center">
      <div className='pt-5'>
        <Link href="#about">
          <button className="px-9 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-[8px] text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40"> About Me </button>
        </Link>

        <Link href="#about">
          <button className="px-9 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-[8px] text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40"> Experience </button>
        </Link>

        <Link href="#about">
          <button className="px-9 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-[8px] text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40"> Projects </button>
        </Link>

        <Link href="#about">
          <button className="px-9 py-2 border border-[#242424] rounded-full uppercase text-sm tracking-[8px] text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40"> Resume </button>
        </Link>
      </div>

      
    </header>
  )
}
// sticky top-0 p-5 flex justify-between max-w-7xl mx-auto z-20 xl:center