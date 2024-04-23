import React, { useContext } from 'react';
import logo from "../../assets/logo.png";
import {NavLink , useNavigate} from "react-router-dom"
import FooterContext from '../../Context/FooterContext';
import titleObj from './titleObj';

const storeFooterDetails = ({heading , title , navigate , setFooterContextDetails}) => {
  
  
  setFooterContextDetails({heading , title});
  navigate('/footerInfo')
  
}

function Cart({ heading , title}) {
  const { setFooterContextDetails } = useContext(FooterContext)
  const navigate = useNavigate();


  return (
    <button onClick={()=> storeFooterDetails({heading , title , navigate , setFooterContextDetails})} className='w-[44%] lg:w-[20%] text-sm text-start cursor-pointer  transition duration-700 ease-in-out hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-500 hover:rounded-lg p-2 hover:text-white'>
      {heading}
    </button>
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
          <Cart title={titleObj["FAQ"]} heading={"FAQ"}  />
          <Cart title={titleObj["Help Centre"]} heading={"Help Center"} />
          <Cart title={titleObj["Account"]} heading={"Account"} />
          <Cart title={titleObj["Media Centre"]} heading={"Media Center"} />
          <Cart title={titleObj["Investor Relations"]} heading={"Investor Relations"} />
          <Cart title={titleObj["Jobs"]} heading={"Jobs"} />
          <Cart title={titleObj["Ways to Watch"]} heading={"Way To Watch"} />
          <Cart title={titleObj["Terms of Use"]} heading={"Terms of Use"} />
          <Cart title={titleObj["User Responsibilities:"]} heading={"Privacy"} />
          <Cart title={titleObj["Content Licensing Terms"]} heading={"Cookie Preferences"} />
          <Cart title={titleObj["Copyright Policies"]} heading={"Corporate Information"} />
          <Cart title={titleObj["Legal Disclaimers"]} heading={"Contact Us"} />
          <Cart title={titleObj["Privacy"]} heading={"Speed Test"} />
          <Cart title={titleObj["Contact Information"]} heading={"Feedback"} />
          <Cart title={titleObj["Legal Notices"]} heading={"Legal Notices"} />
          <Cart title={titleObj["Only on StreamHub"]} heading={"Only On Stream Hub"} />
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
