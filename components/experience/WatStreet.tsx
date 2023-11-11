import React from 'react'
import {BsArrowReturnRight} from 'react-icons/bs';
import {SiPandas, SiNumpy} from 'react-icons/si';

const WARG = () => {
  return (
    <div className='w-full'>
      <h3 className='flex gap-1 font-medium text-gray-300 text-2xl tracking-wide font-robotoRegular'>
        Quantitative Developer
        <span className='text-[#3792c0] uppercase tracking-wide'>@ WatStreet</span>
      </h3>

      <p className='text-base mt-3 uppercase font-medium text-[#3792c0] font-robotoRegular'>May 2023 - Present</p>

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
        {/* Point 1 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]'/>
          <span>
            Developed an algorithm that identifies and records Triangular Arbitrage opportunities across both centralized
            and decentralized cryptocurrency exchanges utilizing Jupyter Notebook, Python and Poloniex API
          </span>
        </li>

        {/* Point 2 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
          <span>
            Researched Cross-Exchange Arbitrage opportunities between Binance & Poloniex to find 25+ profitable pairs of coins
          </span>
        </li>

        {/* Point 3 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
          <span>
            Developed an SMA Crossover Strategy with an 89% buy/sell signal accuracy using Python, Pandas and Matplotlib
          </span>
        </li>
      </ul>
    </div>
  )
}

export default WARG