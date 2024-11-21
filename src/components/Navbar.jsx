import React, { useEffect, useState } from 'react';
import { navLinks } from '../constants/constants';

const Navbar = () => {
  const [navbarData, setNavbarData] = useState(navLinks);

  return (
    <nav className=' fixed top-4 z-50 w-full text-[14px] '>
      <div className='max-w-7xl mx-auto text-white py-4  flex justify-between items-center'>
        <p>Logo</p>

        <div className='p-1 rounded-full flex items-center gap-x-2 bg-gray-200 bg-opacity-30'>
          {navbarData.map((nav, i) => (
            <a href={`#${nav.link}`} key={i} className={`  rounded-full py-[6px] px-6 text-center ${nav.id === '1' ? 'bg-white text-primary' : 'bg-none text-white font-light' }`}>{nav.nav}</a>
          ))}
        </div>

        <div className='opacity-0'>
          test
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
