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
            Developed an algorithm capable of identifying <span className='text-[#3792c0] tracking-wide font-bold'>Triangular Arbitrage</span> opportunities
            across both centralized and decentralized cryptocurrency exchanges
          </span>
        </li>

        {/* Point 2 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
          <span>
            Researched profitable <span className='text-[#3792c0] tracking-wide font-bold'>Cross-Exchange Arbitrage</span> opportunities between <span className='text-[#3792c0] tracking-wide font-bold'>Poloniex</span> and <span className='text-[#3792c0] tracking-wide font-bold'>Binance</span> to
            find over <span className='text-[#3792c0] tracking-wide font-bold'>25</span> daily trades that would be profitable
          </span>
        </li>

        {/* Point 3 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
          <span>
            Developed a daily changing graph to track the correlation between different coins on various exchanges to identify Arbitrage opportunities
          </span>
        </li>
      </ul>
    </div>
  )
}

export default WARG