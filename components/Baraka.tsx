import React from 'react'
import { motion } from "framer-motion"
import { HiChevronRight } from "react-icons/hi";

type Props = {}

function Baraka({}: Props) {
     


  return (
     <motion.div
          initial={{ opacity: 0}}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="w-full"
     >
          <h3 className='flex gap-1 font-medium text-xl font-titleFont'>Backend Software Engineer <span className='text-blue-600'>@ Baraka</span></h3>
          <p className='text-sm mt-1 font-medium text-gray-400'>May 2023 - Present</p>

          <ul className='mt-6 flex flex-col gap-3'>
               <li className='text-base flex gap-2'>
                    <span className='text-blue-600 mt-1'><HiChevronRight /></span> 
                    WRITE DESCRIPTION
               </li>
               <li className='text-base flex gap-2'>
                    <span className='text-blue-600 mt-1'><HiChevronRight /></span> 
                    WRITE DESCRIPTION
               </li>
          </ul>
     </motion.div>
  )
}

export default Baraka