import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const handleMenu = () => {

  }
  return (
    <div>
      <div className='border- p-2 flex justify-between items-center'>
        <Logo />
        <GiHamburgerMenu onClick={handleMenu} size={28} className='sm:hidden' />
        <div className=' gap-4 hidden sm:flex'>
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
