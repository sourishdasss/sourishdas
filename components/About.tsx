import React from 'react'
import { MotionConfig, motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col relative h-screen top-10 md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
          <h3 className='absolute text-center top-24 uppercase tracking-[10px] text-gray-500 text-2xl mt-6'>Get To Know Me</h3>

          <div className='px-10 md:px-20 w-[900px] text-center'>
               <p className="text-gray-500 text-center xl:text-left font-robotoRegular text-md md:text-lg">
                    Hello, my name is Sourish Das! I am sophomore 
                    <strong className="text-[#3792c0] blue-glow"> Computer Science </strong>
                    student at the 
                    <strong className="text-[#3792c0] purple-glow"> University of Waterloo </strong>
                    planning to minor in
                    <strong className="text-[#3792c0] purple-glow"> Statistics. </strong>
                         <br /><br />
                    I have a huge passion for Programming, Mathematics and Finance, and am interested in a wide variety of positions, from Machine Learning, Backend Engineering and Web Development to Quantitative Analysis.
                         <br /><br />
                    Currently, I&apos;m a Software Engineer at 
                    <strong className="text-[#3792c0] purple-glow"> Baraka, </strong> 
                    a Y Combinator backed fintech startup, based in Dubai, UAE.
                         <br /><br />
                    During my free time you can find me hanging out with my friends, travelling, swimming laps or watching Netflix.
                         <br /><br />
                    <span className="text-center mx-[210px]">Feel free to contact me to get in touch!</span>
               </p>

               <a href="mailto:sourish10das@gmail.com">
                    <button className="mt-2 px-9 py-2 border border-[rgb(25,25,25)] rounded-full uppercase text-sm tracking-[8px] text-[#3792c0] transition-all hover:border-[#3792c0]/40 hover:text-[#3792c0]/80 blue-glow">
                         Say Hello!
                    </button>
               </a>
          </div>
    </div>
  )
}