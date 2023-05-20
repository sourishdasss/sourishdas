import React from 'react'
import {motion} from "framer-motion"
// import { transition } from '@angular/animations'
import {BsArrowReturnRight} from 'react-icons/bs';

type Props = {}

function WatStreet({}: Props) {
  return (
    <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.1 }}
  className='w-full'
>
  <h3 className='flex gap-1 font-medium text-gray-300 text-2xl tracking-wide font-robotoRegular'>
    Quantitative Developer
    <span className='text-[#3792c0] uppercase tracking-wide'>@ WatStreet</span>
  </h3>

  <p className='text-base mt-3 uppercase font-medium text-[#3792c0] font-robotoRegular'>May 2023 - Present</p>

  <div className='flex mt-8 space-x-6 my-2 font-robotoRegular' style={{ marginRight: '2rem' }}>
    <img 
      className='h-9 w-9 rounded-full'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'
      alt=''
    />
    <img 
      className='h-9 w-8'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png'
      alt=''
    />
    <img 
      className='h-9 w-5'
      src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png'
      alt=''
    />
  </div>

  <ul className='mt-8 flex flex-col gap-4'>
    <li className='text-base flex gap-2 text-gray-500 font-robotoRegular'>
      <BsArrowReturnRight className='text-[#3792c0]'/>
      <span>
        Conducting data analysis and utilized statistical techniques to identify trading opportunities 
      </span>
    </li>
    <li className='text-base flex gap-2 text-gray-500 font-robotoRegular'>
      <BsArrowReturnRight className='text-[#3792c0]'/>
      <span>
        Developing quantitative models for analyzing financial data, risk assessment models, and trading algorithms
      </span>
    </li>
    <li className='text-base flex gap-2 text-gray-500 font-robotoRegular'>
      <BsArrowReturnRight className='text-[rgb(25,25,25)]'/>
      <span className='text-[rgb(25,25,25)]'>
        TEMP
      </span>
    </li>
  </ul>
</motion.div>



  )
}

export default WatStreet