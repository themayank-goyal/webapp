import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  return (
    <div className=''>
      <div className='px-4 border- p-2 flex flex-col text-center justify-between items-center sm:flex-row'>
        <Logo />
        <div className=' gap-8 flex mt-3 mb-2 sm:flex-row'>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/contactUs'>Contact us</Link>
        </div>
      </div>
      <div className='h-16 bg-darkbg'>

      </div>
    </div>
  );
};

export default Navbar;
