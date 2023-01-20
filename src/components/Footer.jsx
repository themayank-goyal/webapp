import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import { IoMdPin } from 'react-icons/io';
import { AiOutlineMail } from 'react-icons/ai';
import { BiPhone } from 'react-icons/bi';

const Footer = () => {
  return (
    <footer className='bg-lightbg p-4'>
      <div className='flex flex-col gap-5 justify-center p-5 items-start  sm:flex-row sm:items-center sm:justify-between'>
        <div className='flex flex-col gap-4'>
          <Logo  className="mb-2"/>
          <div className='flex items-center gap-3'>
            <IoMdPin />
            <p>
              Anchal Tower, Sixmile, <br /> Guwahati, Assam 781022, India
            </p>
          </div>
          <div className='flex items-center gap-3'>
            <BiPhone />
            <p>+918333552221</p>
          </div>
          <div className='flex items-center gap-3'>
            <AiOutlineMail />
            <p>sayestagoswami.pt@gmail.com</p>
          </div>
        </div>
        <div className='mb-6 flex flex-col gap-4'>
          <h1 className='font-bold'>Quick Links</h1>
          <Link to='/home'>Home</Link>
          <Link to='/about'>About Me</Link>
          <Link to='/contact'>Contact Us</Link>
        </div>
        <div className='mb-6 flex flex-col gap-4'>
          <h1 className='font-bold'>Legal Stuff</h1>
          <p>Disclaimer</p>
          <p>Privacy Policy</p>
          <p>Terms of Services</p>
        </div>
      </div>
      <p className='text-center text-xxs font-semibold tracking-widest'>All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
