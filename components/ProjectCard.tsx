import React from 'react'
// import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx"

interface Props {
     title: string
     des: string;
     listItem: string[];
     link: string;
}

const ProjectCard = ({ title, des, listItem, link}: Props) => {
  return (
    <div className='w-full h-80 rounded-lg bg-[#112240] p-12 flex flex-col justify-center gap-6 hover:translate-y-2 transition-transform duration-300 group'>
     <div>
          {/* <FaRegFolder className='text-4xl text-gray-400'/> */}
          <RxOpenInNewWindow className='text-4xl text-gray-400'/>
     </div>
     <div>
          <h2 className='text-4xl font-titleFont font-semibold tracking-wide'>
               TESTING
          </h2>
          <p>Lromee rere re eregnfngfgfg fgfgfgf</p>
     </div>
     <ul className='text-xs mdl:text-sm text-black flex flex-center'>
          <li>Reactjs</li>
          <li>Tailwind</li>
          <li>ENTER LATER</li>
     </ul>
    </div>
  )
}

export default ProjectCard