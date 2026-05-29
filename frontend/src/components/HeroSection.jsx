import React from 'react'
import NavBar from './NavBar'  // ← this line is missing

const HeroSection = () => {
  return (
    <>
      <NavBar />
      <section
        id='heroSection'
        className='min-h-screen flex items-center justify-center bg-cover bg-right px-5 pt-32'
        style={{ backgroundImage: 'url(/background.svg)' }}
      >
        <div className='w-full max-w-7xl flex flex-row items-center gap-8'>

          {/* Left Section */}
          <div className='flex-1 w-full'>
            <h1 className='text-6xl sm:text-7xl lg:text-8xl font-extralight text-left'>
              Delicious
            </h1>

            {/* ✅ Changed: flex-row always (was flex-col-reverse md:flex-row) */}
            <div className='flex flex-row items-center mt-6 gap-6'>

              {/* Left Image */}
              <div className='flex justify-center'>
                <img
                  src='/hero1.png'
                  alt='hero1'
                  className='w-[280px] sm:w-[320px] lg:w-[350px] object-cover'
                />
              </div>

              {/* Text + Logo */}
              <div className='relative flex flex-col'>
                <div className='relative'>
                  <h1 className='text-6xl sm:text-7xl lg:text-8xl font-extralight'>Food</h1>
                  <h1 className='text-6xl sm:text-7xl lg:text-8xl font-extralight'>Dishes</h1>
                  <img
                    src='/logo.svg'
                    alt='logo'
                    className='absolute top-0 -right-12 w-16 sm:w-20'
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Section — ✅ Changed: removed hidden lg:flex so it always shows */}
          <div className='flex-1 w-full flex flex-col items-end'>
            <img
              src='/hero2.png'
              alt='hero2'
              className='w-[320px] xl:w-[360px] object-cover'
            />
            <h1 className='text-7xl xl:text-8xl font-extralight mt-6'>
              Dishes
            </h1>
          </div>

        </div>
      </section>
    </>
  )
}

export default HeroSection