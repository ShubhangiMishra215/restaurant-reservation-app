import React, { useState } from 'react'
import restApi from '../restApi.json'
import { Link } from 'react-scroll'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoClose } from 'react-icons/io5'

const NavBar = () => {
  const [show, setShow] = useState(false)
  const navbarLinks = restApi.data[0].navbarLinks

  return (
    <header className='w-full flex justify-center absolute top-0 left-0 z-50'>
      <nav className='w-full max-w-7xl flex flex-row items-center justify-between px-5 py-6 border-b border-gray-300 bg-white/40 backdrop-blur-sm'>

        {/* Logo */}
        <div className='text-3xl font-medium tracking-wide flex-shrink-0'>
          FOODIE
        </div>

        {/* Desktop Links + Button — always row, hidden on mobile */}
        <div className='hidden lg:flex flex-row items-center gap-14'>
          <div className='flex flex-row items-center gap-6 text-lg font-light tracking-wide text-gray-600'>
            {navbarLinks.map((element) => (
              <Link
                key={element.id}
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className='cursor-pointer hover:text-black transition'
              >
                {element.title}
              </Link>
            ))}
          </div>

          <button className='border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition whitespace-nowrap'>
            OUR MENU
          </button>
        </div>

        {/* Hamburger — mobile only */}
        <div
          className='lg:hidden text-3xl cursor-pointer'
          onClick={() => setShow(!show)}
        >
          {show ? <IoClose /> : <GiHamburgerMenu />}
        </div>
      </nav>

      {/* Mobile Dropdown — separate from nav row so it doesn't affect desktop layout */}
      {show && (
        <div className='lg:hidden absolute top-[73px] left-0 w-full bg-white border-b border-gray-200 flex flex-col items-center gap-6 px-6 py-8 z-40'>
          {navbarLinks.map((element) => (
            <Link
              key={element.id}
              to={element.link}
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setShow(false)}
              className='cursor-pointer text-lg font-light tracking-wide text-gray-600 hover:text-black transition'
            >
              {element.title}
            </Link>
          ))}
          <button className='border border-black px-5 py-2 rounded-full hover:bg-black hover:text-white transition'>
            OUR MENU
          </button>
        </div>
      )}
    </header>
  )
}

export default NavBar