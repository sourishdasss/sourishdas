import React from 'react'
import {motion} from "framer-motion"
import { transition } from '@angular/animations'
import {RxDoubleArrowRight} from 'react-icons/rx';

const Baraka_ = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className='w-full'
    >
      <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Engineer 
        <span className='text-blue-400 tracking-wide'>@Baraka</span>
      </h3>
      <p className='text-sm mt-1 font-medium text-gray-400'>May 2023 - Present</p>
      <ul className='mt-6 flex flex-col gap-3'>
        <li className='text-base flex gap-2 text-gray-300'>
          <RxDoubleArrowRight />
          <span>
            testing for right now, fill in later, with proper writing
          </span>
        </li>
        <li className='text-base flex gap-2 text-gray-300'>
          <RxDoubleArrowRight />
          <span>
            testing for right now, fill in later, with proper writing
          </span>
        </li>
        <li className='text-base flex gap-2 text-gray-300'>
          <RxDoubleArrowRight />
          <span>
            testing for right now, fill in later, with proper writing
          </span>
        </li>
      </ul>


    </motion.div>
  )
}

export default Baraka_