import React from 'react'
import {motion} from "framer-motion"
import { transition } from '@angular/animations'
import {BsArrowReturnRight} from 'react-icons/bs';

const Orbital = () => {
  return (
   <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='w-full'
    >
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'> Software Engineer 
        <span className='text-[#3792c0] tracking-wide'>@ Baraka</span>
      </h3>
      <p className='text-sm mt-1 font-medium text-gray-400'>May 2023 - Present</p>

      <div className='flex space-x-2 my-2'>
        <img 
          className='h-8 w-8 '
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png'
          alt=''
        />
        <img 
          className='h-8 w-8'
          src='https://cdn.freebiesupply.com/logos/large/2x/python-5-logo-png-transparent.png'
          alt=''
        />
        <img 
          className='h-8 w-8 rounded-full'
          src=''
          alt=''
        />
      </div>

      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-gray-300'>
          <BsArrowReturnRight className='text-[#3792c0]'/>
          <span>
            testing for right now, fill in later, with proper writing ____________________________________---------------bjbjbjbjbjbjbjbjbjbjbjbjbjbbb
          </span>
        </li>
        <li className='text-base flex gap-2 text-gray-300'>
          <BsArrowReturnRight className='text-[#3792c0]'/>
          <span>
            testing for right now, fill in later, with proper writing
          </span>
        </li>
        <li className='text-base flex gap-2 text-gray-300'>
          <BsArrowReturnRight className='text-[#3792c0]'/>
          <span>
            testing for right now, fill in later, with proper writing
          </span>
        </li>
      </ul>
    </motion.div>
  )
}

export default Orbital