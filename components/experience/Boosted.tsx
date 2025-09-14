import React from 'react'

const Boosted = () => {
  return (
    <div className="w-full">
      {/* Company & Role */}
      <h3 className="flex gap-1 font-medium text-gray-300 text-2xl tracking-wide font-robotoRegular">
        Software Engineer Intern
        <span className="text-[#3792c0] uppercase tracking-wide">
          @ Boosted.ai
        </span>
      </h3>

      {/* Timeline */}
      <p className="text-base mt-3 font-medium text-[#3792c0] font-robotoRegular">
        January 2025 - April 2025
      </p>

      {/* Tech Stack */}
      <div className="flex mt-8 space-x-6 my-2 font-robotoRegular">
        {/* Python */}
        <img
          className="h-9 w-9"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
          alt=""
        />

        {/* Casbin */}
        <img
          className="h-9 w-9"
          src="https://casbin.org/img/favicon.png"
          alt=""
        />

        {/* Redis */}
        <img
          className="h-10 w-9"
          src="https://images.icon-icons.com/2415/PNG/512/redis_original_wordmark_logo_icon_146369.png"
          alt=""
        />

        {/* Docker */}
        <img
          className="h-9 w-9"
          src="https://cdn.sanity.io/images/34ent8ly/production/b6da5379df1e6ddb31c34f3e5690575800680e07-824x824.png"
          alt=""
        />

        {/* PostgreSQL */}
        <img
          className="h-8 w-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
          alt=""
        />
      </div>

      {/* Job Description*/}
      <ul className="mt-8 flex flex-col gap-4">
        <li className="text-base text-gray-500 max-w-[50rem]">
          <span>
            At Boosted.ai, I focused on building data systems that improved the
            speed, cost-efficiency, and scalability of AI-driven financial
            analytics. I created a Python-based web crawler with Playwright to
            aggregate data from 100+ sites, reducing data collection time by
            over 90%. To optimize storage and retrieval, I restructured data
            into NumPy cubes stored on S3, cutting costs by 40% and improving
            query speed by 15%. I also accelerated portfolio analysis workflows
            by parallelizing RPC calls with asyncio, reducing latency by more
            than half. Additionally, I built an access control system using
            Casbin and Redis, enabling secure monetization of 300+ datasets for
            100+ enterprise clients.
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Boosted
