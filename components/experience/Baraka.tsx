import React from 'react'
import {BsArrowReturnRight} from 'react-icons/bs';

const Baraka = () => {
  return (
    <div className="w-full">
      <h3 className="flex gap-1 font-medium text-gray-300 text-2xl tracking-wide font-robotoRegular">
        Software Engineer Intern
        <span className="text-[#3792c0] uppercase tracking-wide">@ Baraka</span>
      </h3>

      <p className="text-base mt-3 font-medium text-[#3792c0] font-robotoRegular">
        May 2023 - August 2023
      </p>

      <div className="flex mt-8 space-x-6 my-2 font-robotoRegular">
        {/* TypeScript */}
        <img
          className="h-8 w-8"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
          alt=""
        />

        {/* NestJS */}
        <img
          className="h-8 w-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png"
          alt=""
        />

        {/* Java */}
        <img
          className="h-9 w-5"
          src="https://upload.wikimedia.org/wikipedia/en/thumb/3/30/Java_programming_language_logo.svg/1200px-Java_programming_language_logo.svg.png"
          alt=""
        />

        {/* Springboot */}
        <img
          className="h-8 w-9"
          src="https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png"
          alt=""
        />

        {/* Python */}
        <img
          className="h-9 w-9 rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
          alt=""
        />

        {/* PostgreSQL */}
        <img
          className="h-8 w-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
          alt=""
        />

        {/* AWS */}
        <img
          className="h-8 w-10"
          src="https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png"
          alt=""
        />

        {/* Angular */}
        <img
          className="h-8 w-8"
          src="https://static-00.iconduck.com/assets.00/file-type-angular-icon-1907x2048-tobdkjt1.png"
          alt=""
        />
      </div>

      <ul className="mt-8 flex flex-col gap-4">
        <li className="text-base text-gray-500 max-w-[50rem]">
          <span>
            At Baraka, a Y Combinator-backed fintech startup, I helped build and
            optimize search and analytics systems for thousands of users. I
            implemented semantic search powered by OpenAI and Milvus, which
            increased total search requests by 17%. I then optimized retrieval
            with Meilisearch and nearest-neighbor search, reducing latency by
            over 60%. To cut operational costs, I designed an ETL pipeline for
            computing financial metrics, saving $10K per month in subscription
            fees. I also built a fraud detection microservice in Java and Spring
            Boot to monitor over 25K accounts in real time, strengthening the
            platform’s security and trust.
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Baraka