import React from 'react'
import {BsArrowReturnRight} from 'react-icons/bs';
import {SiPandas, SiNumpy} from 'react-icons/si';

const WARG = () => {
  return (
    <div className='w-full'>
      <h3 className='flex gap-1 font-medium text-gray-300 text-2xl tracking-wide font-robotoRegular'>
        Software Engineer 
        <span className='text-[#3792c0] uppercase tracking-wide'>@ WARG</span>
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
        {/* Point 1 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]'/>
          <span>
            Implemented an image classification system using a convolutional neural network
          </span>
        </li>

        {/* Point 2 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
          <span>
            Implemented effective processing of videos during the drone&apos;s flight to identify objects in it&apos;s surroundings
          </span>
        </li>

        {/* Placeholder */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[rgb(25,25,25)]' style={{ fontSize: '1rem' }} />
          <span className='text-[rgb(25,25,25)]'>
            PLACEHOLDER
          </span>
        </li>
      </ul>
    </div>
  )
}

export default WARG