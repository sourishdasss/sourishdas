import React from 'react'
import {BsArrowReturnRight} from 'react-icons/bs';

const Baraka = () => {
  return (
    <div className='w-full'>
      
      <h3 className='flex gap-1 font-medium text-gray-300 text-2xl tracking-wide font-robotoRegular'>
        Software Engineer  
        <span className='text-[#3792c0] uppercase tracking-wide'>@ Baraka</span>
      </h3>

      <p className='text-base mt-3 uppercase font-medium text-[#3792c0] font-robotoRegular'>May 2023 - September 2023</p>

      <div className='flex mt-8 space-x-6 my-2 font-robotoRegular'>
        <img 
          className='h-8 w-8'
          src='https://cdn-icons-png.flaticon.com/512/5968/5968381.png'
          alt=''
        />
        <img
            className='h-8 w-8'
            src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png'
            alt=''
        />
        <img
            className='h-9 w-5'
            src='https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png'
            alt=''
        />
        <img
            className='h-8 w-9'
            src='https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png'
            alt=''
        />
        <img 
          className='h-9 w-9 rounded-full'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png'
          alt=''
        />
        <img 
          className='h-8 w-8'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png'
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
            Increased total search requests by 17% by implementing a semantic search feature using OpenAI API and Milvus DB
          </span>
        </li>

        {/* Point 2 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
          <span>
            Reduced search latency by up to 60% for both lexical and semantic searches, leveraging Meillisearch and NNS
          </span>
        </li>

        {/* Point 3 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
          <span>
            Built a RESTful API to boost investments in dividend-paying stocks by <span className='text-[#3792c0] tracking-wide font-bold'>17%</span> using TypeScript, NestJS and SQL
          </span>
        </li>

        {/* Point 4 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
          <span>
            Saved 10k dollars/month by developing an ETL pipeline to introduce new financial metrics using Python and SQL
          </span>
        </li>

        {/* Point 5 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
          <span>
            Implemented a microservice that detects fraudulent trades amongst 25k+ accounts, using Java, Springboot and EC2
          </span>
        </li>

        {/* Point 6 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
          <span>
            Utilized parallelization and caching in TypeScript to achieve an enhancement of +35% in API request response times
          </span>
        </li>

        {/* Point 7 */}
        <li className='text-base flex gap-2 text-gray-500'>
          <BsArrowReturnRight className='text-[#3792c0]' style={{ fontSize: '1rem' }} />
          <span>
            Optimized data storage and retrieval mechanisms by integrating AWS S3 services, reducing data fetch time by 30%
          </span>
        </li>

      </ul>
    </div>
  )
}

export default Baraka