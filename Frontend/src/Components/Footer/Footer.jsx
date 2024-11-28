/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillFacebook, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

const socialLinks = [
  {
    path: "https://www.youtube.com/user/clevelandclinic",
    icon: <AiFillYoutube className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://www.instagram.com/clevelandclinic/",
    icon: <AiFillInstagram className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://www.facebook.com/ClevelandClinic",
    icon: <AiFillFacebook className='group-hover:text-white w-4 h-5' />,
  },
  {
    path: "https://www.linkedin.com/company/cleveland-clinic",
    icon: <AiFillLinkedin className='group-hover:text-white w-4 h-5' />,
  },
];

const quickLink01 = [
  {
    path: "/home",
    display: "Home"
  },
  {
    path: "/",
    display: "About Us"
  },
  {
    path: "/services",
    display: "Services"
  },
  {
    path: "/",
    display: "Blog"
  },
];

const quickLink02 = [
  {
    path: "/doctors",
    display: "Find a Doctor"
  },
  {
    path: "/",
    display: "Request an Appointment"
  },
  {
    path: "/",
    display: "Find a Location"
  },
  {
    path: "/",
    display: "Get a Opinion"
  },
];

const quickLink03 = [
  {
    path: "/",
    display: "Donate"
  },
  {
    path: "/contact",
    display: "Contact Us"
  },
  
];

const Footer = () => {

  const year = new Date().getFullYear()
  return (
    <footer className='pb-16 pt-10'>
      <div className="flex flex-row container">
        <div className="w-1/2 flex justify-between flex-col md:flow-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-[400] text-textColor mt-4'>Copyright &copy; {year} developed by Jefferson Wade all right reserved. </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => <Link to={link.path} key={index} className='w-9 h-9 border border-solid border-[#181a1e] rounded-full flex items-center justify-center group hover:bg-primaryColor hover:border-none'>{link.icon}</Link>)}
            </div>
          </div>
        </div>


        <div  className='flex w-1/2 flex-row justify-between'>
        <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Quick Links</h2>
            <ul>
              {quickLink01.map((item, index) =>
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>)}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>I want to : </h2>
            <ul>
              {quickLink02.map((item, index) =>
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>)}
            </ul>
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-headingColor'>Support</h2>
            <ul>
              {quickLink03.map((item, index) =>
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font-[400] text-textColor'>{item.display}</Link>
                </li>)}
            </ul>
        </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer