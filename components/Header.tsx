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
          <button className="px-9 py-2 border border-[rgb(25,25,25)] rounded-full uppercase text-sm tracking-[8px] text-gray-500 transition-all hover:border-[#3792c0]/40 hover:text-[#3792c0]/80"> About Me </button>
        </Link>

        <Link href="#experience">
          <button className="px-9 py-2 border border-[rgb(25,25,25)] rounded-full uppercase text-sm tracking-[8px] text-gray-500 transition-all hover:border-[#3792c0]/40 hover:text-[#3792c0]/80"> Experience </button>
        </Link>

        <Link href="#projects">
          <button className="px-9 py-2 border border-[rgb(25,25,25)] rounded-full uppercase text-sm tracking-[8px] text-gray-500 transition-all hover:border-[#3792c0]/40 hover:text-[#3792c0]/80"> Projects </button>
        </Link>

        <Link href="/resume/resume_1B.pdf" target='_blank'>
          <button className="px-9 py-2 border border-[rgb(25,25,25)] rounded-full uppercase text-sm tracking-[8px] text-gray-500 transition-all hover:border-[#3792c0]/40 hover:text-[#3792c0]/80"> Resume </button>
        </Link>
      </div>
    </header>
  )
}