import React from 'react'

type Props = {}

export default function About({}: Props) {
  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <h3 className='text-center uppercase tracking-[10px] text-gray-300 text-2xl mt-6'>Get To Know Me</h3>

      <br className="mt-4" />

      <div className='px-10 md:px-20 w-[900px] text-center mt-3'>
        <span className="text-gray-500 xl:text-left font-robotoRegular text-md md:text-lg">
          Hello, I&apos;m Sourish Das, a
          <strong className="text-[#3792c0]"> Computer Science </strong>
          student at the 
          <strong className="text-[#3792c0]"> University of Waterloo </strong>
          planning to minor in
          <strong className="text-[#3792c0]"> Statistics. </strong>
          <br /><br />
          I&apos;m very passionate about computer science, applied mathematics and finance, in various areas including Software Engineering, Data Science, Generative AI and Quantitative Finance.
          <br /><br />
          For the summer of 2023, I was a Software Engineer at
          <strong className="text-[#3792c0]"> Baraka, </strong> 
          a Y Combinator backed fintech startup, based in Dubai, UAE.
          <br /><br />
          When I&apos;m not coding, you can find me swimming laps, playing soccer, exploring the world, or hanging out with friends.
          <br /><br />
          <span className="text-center mx-[210px]">Feel free to contact me to get in touch!</span>
        </span>
    
        <a href="mailto:sourish10das@gmail.com">
          <button className="mt-4 px-9 py-2 border border-[rgb(25,25,25)] rounded-full uppercase text-sm tracking-[8px] text-[#3792c0] transition-all hover:border-[#3792c0]/40 hover:text-[#3792c0]/80 blue-glow">
            <strong>Say Hello!</strong>
          </button>
        </a>
      </div>
    </div>
  )
}