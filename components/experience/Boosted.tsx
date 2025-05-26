import React from 'react'

const Boosted = () => {
  return (
    <div className='w-full'>
      <h3 className='flex gap-1 font-medium text-gray-300 text-2xl tracking-wide font-robotoRegular'>
        Software Engineer Intern
        <span className='text-[#3792c0] uppercase tracking-wide'>@ Boosted.ai</span>
      </h3>

      <p className='text-base mt-3 font-medium text-[#3792c0] font-robotoRegular'>January 2025 - April 2025</p>

      <div className='flex mt-8 space-x-6 my-2 font-robotoRegular'>
          <img
              className='h-9 w-9'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'
              alt=''
          />
          <img
              className='h-9 w-9'
              src='https://casbin.org/img/favicon.png'
              alt=''
          />
          <img
              className='h-10 w-9'
              src='https://static-00.iconduck.com/assets.00/redis-original-wordmark-icon-2045x2048-nz2tg5u6.png'
              alt=''
          />
          <img
              className='h-9 w-9'
              src='https://cdn.sanity.io/images/34ent8ly/production/b6da5379df1e6ddb31c34f3e5690575800680e07-824x824.png'
              alt=''
          />
          {/* PostgreSQL */}
          <img
              className='h-8 w-8'
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png'
              alt=''
          />
      </div>

      <ul className='mt-8 flex flex-col gap-4'>
        <li className='text-base text-gray-500 max-w-[50rem]'>
          <span>
            As a Quantitative Developer with the UW Quantitative Finance 
            Design Team since May 2023, I&apos;ve contributed to improving trading 
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

export default Boosted
