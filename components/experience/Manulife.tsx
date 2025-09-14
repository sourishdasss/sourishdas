import React from 'react'
import {BsArrowReturnRight} from 'react-icons/bs';

const Manulife = () => {
  return (
    <div className="w-full">
      <h3 className="flex gap-1 font-medium text-gray-300 text-2xl tracking-wide font-robotoRegular">
        Software Developer Intern
        <span className="text-[#3792c0] uppercase tracking-wide">
          @ Manulife
        </span>
      </h3>

      <p className="text-base mt-3 font-medium text-[#3792c0] font-robotoRegular">
        January 2024 - April 2024
      </p>

      <div className="flex mt-8 space-x-6 my-2 font-robotoRegular">
        {/* Python */}
        <img
          className="h-9 w-9 rounded-full"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
          alt=""
        />

        {/* Azure */}
        <img
          className="h-8 w-8"
          src="https://swimburger.net/media/ppnn3pcl/azure.png"
          alt=""
        />

        {/* Docker */}
        <img
          className="h-9 w-13"
          src="https://1000logos.net/wp-content/uploads/2021/11/Docker-Logo-2013.png"
          alt=""
        />

        {/* PostgreSQL */}
        <img
          className="h-8 w-8"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
          alt=""
        />

        {/* MongoDB */}
        <img
          className="h-8 w-13"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/MongoDB_Logo.svg/2560px-MongoDB_Logo.svg.png"
          alt=""
        />

        {/* Airflow */}
        <img
          className="h-8 w-13"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/AirflowLogo.png/1200px-AirflowLogo.png"
          alt=""
        />
      </div>

      <ul className="mt-8 flex flex-col gap-4">
        <li className="text-base gap-2 text-gray-500 max-w-[50rem]">
          <span>
            During my internship at Manulife, I supported enterprise data
            engineering initiatives with a focus on reliability and efficiency.
            I optimized CI/CD pipelines in Azure DevOps, enabling earlier
            detection of failures and improving deployment speed by over 20%. I
            also containerized Python applications with Docker, cutting
            infrastructure costs by 15% while improving portability.
            Additionally, I designed Airflow DAGs to migrate critical datasets
            from PostgreSQL to MongoDB, helping the team scale workflows and
            modernize data infrastructure.
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Manulife
