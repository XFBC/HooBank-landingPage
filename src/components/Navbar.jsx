import React from 'react';
import { useState } from 'react';
import { logo, close, menu } from '../assets';
import { navLinks } from '../contants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="w-full flex py-6 justify-between items-center navbar">
        <img src={logo} alt="logo" className="w-[124px] h-[32px]" />

        {/* Desktop Navbar  */}
        <ul className="list-none sm:flex hidden justify-end items-center flex-1 gap-14">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className={`font-poppins font-normal cursos-pointer text-[16px] text-white`}
            >
              <a href={nav.id}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Navbar  */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-7 h-7 object-contain"
            onClick={() => setToggle((prev) => !prev)}
          />

          <div
            className={`${
              toggle ? 'flex' : 'hidden'
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl bg-discount-gradient`}
          >
            {' '}
            <ul className="list-none flex justify-center items-center flex-col  mx-8">
              {navLinks.map((nav, index) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-normal cursos-pointer text-[16px] text-white mb-2`}
                >
                  <a href={nav.id}>{nav.title}</a>
                </li>
              ))}
            </ul>{' '}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
