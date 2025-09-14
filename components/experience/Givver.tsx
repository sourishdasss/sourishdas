import React from 'react'
import {BsArrowReturnRight} from 'react-icons/bs';

const Givver = () => {
  return (
    <div className="w-full">
      <h3 className="flex gap-1 font-medium text-gray-300 text-2xl tracking-wide font-robotoRegular">
        Software Engineer
        <span className="text-[#3792c0] uppercase tracking-wide">@ Givver</span>
      </h3>

      <p className="text-base mt-3 font-medium text-[#3792c0] font-robotoRegular">
        September 2024 - December 2024
      </p>

      <div className="flex mt-8 space-x-6 my-2 font-robotoRegular">
        {/* React */}
        <img
          className="h-8 w-9"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          alt=""
        />

        {/* NestJS */}
        <img
          className="h-8 w-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/NestJS.svg/1200px-NestJS.svg.png"
          alt=""
        />

        {/* TypeScript */}
        <img
          className="h-8 w-8"
          src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png"
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

        {/* AWS S3 */}
        <img
          className="h-8 w-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Amazon-S3-Logo.svg/1712px-Amazon-S3-Logo.svg.png"
          alt=""
        />
      </div>

      <ul className="mt-8 flex flex-col gap-4">
        <li className="text-base text-gray-500 max-w-[50rem]">
          <span>
            At Givver, a fintech startup, I worked on products that made
            document management more secure and intelligent. I developed an
            internal storage system using TypeScript, NestJS, and S3, which
            streamlined how teams stored and accessed sensitive files,
            ultimately increasing user engagement. Alongside this, I engineered
            an AI-powered pipeline in Python and SQL that processed over 25GB of
            data daily, providing real-time insights into documents. This work
            combined scalable backend engineering with applied machine learning,
            helping the company deliver more value to its customers.
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Givver
