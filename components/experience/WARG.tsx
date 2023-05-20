import React from 'react'
import {motion} from "framer-motion"
import {BsArrowReturnRight} from 'react-icons/bs';
import {SiPandas, SiNumpy} from 'react-icons/si';

type Props = {}

function WARG({}: Props) {
     return (
          <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 0.1 }}
  className='w-full'
>
  <h3 className='flex gap-1 font-medium text-gray-300 text-2xl tracking-wide font-robotoRegular'>
    Software Developer 
    <span className='text-[#3792c0] uppercase tracking-wide'>@ Warg</span>
  </h3>

 <p className='text-base mt-3 uppercase font-medium text-[#3792c0] font-robotoRegular'>September 2022 - May 2023</p>
  <div className='flex mt-8 space-x-6 my-2 font-robotoRegular'>
    <img 
      className='h-9 w-9 rounded-full'
      src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'
      alt=''
    />
    <SiPandas 
      className='h-9 w-9 rounded-full'
    />
    <SiNumpy 
      className='h-9 w-9 rounded-full'
    />
  </div>

  <ul className='mt-8 flex flex-col gap-4'>
  <li className='text-base flex gap-2 text-gray-500'>
    <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
    <span>
      Implemented an image classification system using a convolutional neural network 
    </span>
  </li>
  <li className='text-base flex gap-2 text-gray-500'>
    <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
    <span>
      Implemented effective processing of videos during the drone&apos;s flight to identify objects in it&apos;s surroundings
    </span>
  </li>
  <li className='text-base flex gap-2 text-gray-500'>
    <BsArrowReturnRight className='text-[rgb(25,25,25)]' style={{ fontSize: '1rem' }} />
    <span className='text-[rgb(25,25,25)]'>
      Implementing new components for the company&apos;s web application
    </span>
  </li>
</ul>

</motion.div>
  )
}

export default WARG