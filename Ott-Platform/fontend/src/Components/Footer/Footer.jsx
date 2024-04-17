import React from 'react';
import logo from "../../assets/logo.png";

function Cart({ title }) {
  return (
    <span className='w-[44%] lg:w-[20%] text-sm text-start cursor-pointer  transition duration-700 ease-in-out hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:rounded-lg p-2 hover:text-white'>
      {title}
    </span>
  );
}

export default function Footer() {
  return (
    <footer className='relative bg-gray-900 w-full h-fit text-gray-400 pt-5 lg:pt-20'>

      <div className='px-5 lg:px-20'>
        <div className='mb-10'>
          <p>Questions? Call <span className='border-b border-gray-500'>000-800-919-1694</span></p>
        </div>

        <div className='flex flex-wrap justify-between gap-y-5 gap-x-5 lg:gap-y-2 grid-rows-4 mb-10'>
          <Cart title={"FAQ"} />
          <Cart title={"Help Center"} />
          <Cart title={"Account"} />
          <Cart title={"Media Center"} />
          <Cart title={"Investor Relations"} />
          <Cart title={"Jobs"} />
          <Cart title={"Way To Watch"} />
          <Cart title={"Terms of Use"} />
          <Cart title={"Privacy"} />
          <Cart title={"Cookie Preferences"} />
          <Cart title={"Corporate Information"} />
          <Cart title={"Contact Us"} />
          <Cart title={"Speed Test"} />
          <Cart title={"Feedback"} />
          <Cart title={"Legal Notices"} />
          <Cart title={"Only On Stream Hub"} />
        </div>

        <button className='mb-5 bg-blue-900 text-white text-md px-5 py-3 rounded-md hover:scale-[1.1] transition ease-in-out duration-700'>Watch Videos</button>

        <div href="#" className='w-fit' onClick={() => window.location.reload()}>
          <img className='w-40 lg:w-60 mb-10 hover:animate-bounce' src={logo} alt="Company Logo" />
        </div>
      </div>

      <div className='border-t-[0.5px] border-gray-300 px-2 lg:px-5 pt-3 text-center'>
        <p className='text-gray-500 text-sm'>© 2020 Stream Hub, Inc. All rights reserved.</p>
      </div>

    </footer>
  );
}
