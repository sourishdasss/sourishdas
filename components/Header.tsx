import React from 'react'
import Link from 'next/link';

type Props = {}

export default function Header({}: Props) {
  return (
    <header className="sticky top-5 left-flex z-20 xl:center items-center text-center">
      <div className='pt-5'>
        <Link href="#about">
          <button className="px-9 py-2 border border-[rgb(25,25,25)] rounded-full uppercase text-sm tracking-[8px] text-[#3792c0] transition-all hover:border-gray-300/40 hover:text-gray-300/80"> About Me </button>
        </Link>

        <Link href="#experience">
          <button className="px-9 py-2 border border-[rgb(25,25,25)] rounded-full uppercase text-sm tracking-[8px] text-[#3792c0] transition-all hover:border-gray-300/40 hover:text-gray-300/80"> Experience </button>
        </Link>

        <Link href="#projects">
          <button className="px-9 py-2 border border-[rgb(25,25,25)] rounded-full uppercase text-sm tracking-[8px] text-[#3792c0] transition-all hover:border-gray-300/40 hover:text-gray-300/80"> Projects </button>
        </Link>

        <Link href="/resume/Resume_SWE_Oct_26_2023.pdf" target='_blank'>
          <button className="px-9 py-2 border border-[rgb(25,25,25)] rounded-full uppercase text-sm tracking-[8px] text-[#3792c0] transition-all hover:border-gray-300/40 hover:text-gray-300/80"> Resume </button>
        </Link>
      </div>
    </header>
  )
}