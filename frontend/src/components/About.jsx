import React from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id='about' className='w-full py-20 px-5 flex justify-center'>
      <div className='w-full max-w-7xl flex flex-col md:flex-row items-center gap-12'>

        {/* Left Banner */}
        <div className='flex-1 flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl sm:text-5xl font-bold tracking-widest'>
              ABOUT US
            </h1>
            <p className='text-gray-500 text-lg font-light'>
              The only thing we are serious about is food
            </p>
          </div>

          <p className='text-gray-600 text-base leading-relaxed'>
            Founded in 2015, Foodie was born out of a simple belief — that great food
            should be accessible to everyone. We source the freshest local ingredients,
            work with passionate chefs, and craft every dish with care. Whether you're
            dining in or ordering from home, we bring the same love to your plate every
            single time.
          </p>

          <Link
            to='/'
            className='flex items-center gap-2 w-fit border border-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition text-sm tracking-wide'
          >
            Explore Menu
            <HiOutlineArrowNarrowRight />
          </Link>
        </div>

        {/* Right Banner */}
        <div className='flex-1 flex justify-center'>
          <img
            src='/about.png'
            alt='about'
            className='w-full max-w-md object-cover'
          />
        </div>

      </div>
    </section>
  )
}

export default About