import React from 'react'
import {BsArrowReturnRight} from 'react-icons/bs';

const StackAdapt = () => {
  return (
    <div className="w-full">
      {/* Company & Role */}
      <h3 className="flex gap-1 font-medium text-gray-300 text-2xl tracking-wide font-robotoRegular">
        Software Engineer Intern
        <span className="text-[#3792c0] tracking-wide">@ StackAdapt</span>
      </h3>

      {/* Timeline */}
      <p className="text-base mt-3 font-medium text-[#3792c0] font-robotoRegular">
        May 2025 - August 2025
      </p>

      {/* Tech Stack */}
      <div className="flex mt-8 space-x-6 my-2 font-robotoRegular">
        {/* Ruby */}
        <img
          className="h-9 w-9"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/1200px-Ruby_logo.svg.png"
          alt=""
        />

        {/* Rails */}
        <img
          className="h-8 w-12"
          src="https://testrigor.com/wp-content/uploads/2022/10/Ruby-On-Rails-testing-logo.png"
          alt=""
        />

        {/* Go */}
        <img
          className="h-8 w-12"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Go_Logo_Blue.svg/1200px-Go_Logo_Blue.svg.png"
          alt=""
        />

        {/* Docker */}
        <img
          className="h-9 w-9"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/2048px-GraphQL_Logo.svg.png"
          alt=""
        />

        {/* Grafana */}
        <img
          className="h-9 w-9"
          src="https://images.icon-icons.com/2699/PNG/512/grafana_logo_icon_171048.png"
          alt=""
        />

        {/* AWS */}
        <img
          className="h-8 w-10"
          src="https://download.logo.wine/logo/Amazon_Web_Services/Amazon_Web_Services-Logo.wine.png"
          alt=""
        />
      </div>

      {/* Job Description*/}
      <ul className="mt-8 flex flex-col gap-4">
        <li className="text-base text-gray-500 max-w-[50rem]">
          <span>
            At StackAdapt, I worked on scaling backend infrastructure that
            powers advertising for hundreds of clients. I enhanced the Vitess
            serializer to enable new audience types, leading to a 20% boost in
            adoption. I also developed predictive modeling pipelines in Go and
            PostgreSQL that improved both accuracy and uptake of new products.
            To ensure performance at scale, I optimized GraphQL queries with
            observability tools like Prometheus and Grafana, reducing backend
            load by over 10% on 1M+ daily requests. Finally, I built a
            background job system in Rails with Sidekiq and S3 that improved
            data pipeline throughput fivefold, directly strengthening platform
            reliability and efficiency.
          </span>
        </li>
      </ul>
    </div>
  );
}

export default StackAdapt
