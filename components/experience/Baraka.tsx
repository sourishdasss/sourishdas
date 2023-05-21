import React from 'react'
import {BsArrowReturnRight} from 'react-icons/bs';

const Baraka = () => {
  return (
    <div className='w-full'>
      
      <h3 className='flex gap-1 font-medium text-gray-300 text-2xl tracking-wide font-robotoRegular'>
        Software Engineer  
        <span className='text-[#3792c0] uppercase tracking-wide'>@ Baraka</span>
      </h3>

      <p className='text-base mt-3 uppercase font-medium text-[#3792c0] font-robotoRegular'>May 2023 - Present</p>

      <div className='flex mt-8 space-x-6 my-2 font-robotoRegular'>
        <img 
          className='h-8 w-8'
          src='https://cdn-icons-png.flaticon.com/512/5968/5968381.png'
          alt=''
        />
        <img 
          className='h-9 w-9 rounded-full'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'
          alt=''
        />
        <img 
          className='h-9 w-5'
          src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png'
          alt=''
        />
        <img 
          className='h-8 w-8'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png'
          alt=''
        />
        <img 
          className='h-8 w-8'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png'
          alt=''
        />
        <img 
          className='h-8 w-8'
          src='https://static-00.iconduck.com/assets.00/file-type-angular-icon-1907x2048-tobdkjt1.png'
          alt=''
        />
      </div>

      <ul className='mt-8 flex flex-col gap-4'>
        {/* Point 1 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
          <span>
            Refactoring legacy APIs and sub-systems to help the company move towards microservices 
          </span>
        </li>

        {/* Point 2 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
          <span>
            Designing schemas, writing efficient queries, and optimizing database performance using
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

export default Baraka