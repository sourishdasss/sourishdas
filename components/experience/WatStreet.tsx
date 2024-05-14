import React from 'react'
import {BsArrowReturnRight} from 'react-icons/bs';
import {SiPandas, SiNumpy} from 'react-icons/si';

const WatStreet = () => {
  return (
    <div className='w-full'>
      <h3 className='flex gap-1 font-medium text-gray-300 text-2xl tracking-wide font-robotoRegular'>
        Quantitative Developer
        <span className='text-[#3792c0] uppercase tracking-wide'>@ UW Quantitative Design Team</span>
      </h3>

      <p className='text-base mt-3 font-medium text-[#3792c0] font-robotoRegular'>May 2023 - Present</p>

      <div className='flex mt-8 space-x-6 my-2 font-robotoRegular'>
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
        <SiPandas
            className='h-9 w-9 rounded-full'
        />
        <SiNumpy
            className='h-9 w-9 rounded-full'
        />
      </div>

      <ul className='mt-8 flex flex-col gap-4'>
        <li className='text-base text-gray-500 max-w-[50rem]'>
          <span>
            As a Quantitative Developer with the UW Quantitative Finance 
            Design Team since May 2023, I've contributed to improving trading 
            strategy performance by developing a back-testing engine using 
            Python, NumPy, and Scikit-learn. Additionally, I researched 
            Cross-Exchange Arbitrage opportunities between Binance and Poloniex, 
            identifying over 25 profitable pairs of coins. Furthermore, I achieved 
            an 89% buy/sell signal accuracy using a SMA Crossover Strategy with the 
            help of Python, Pandas, and Matplotlib.
          </span>
        </li>
      </ul>
    </div>
  )
}

export default WatStreet