import React from 'react'
import restApi from '../restApi.json'

const WhoAreWe = () => {
  const whoAreWe = restApi.data[0].who_we_are

  return (
    <section id='who_are_we' className='w-full py-20 px-5 flex justify-center'>
      <div className='w-full max-w-7xl flex flex-col items-center gap-12'>

        {/* Heading */}
        <div className='text-center flex flex-col gap-2'>
          <h1 className='text-4xl sm:text-5xl font-bold tracking-widest'>
            WHO ARE WE
          </h1>
          <p className='text-gray-500 text-lg font-light'>
            A team of food lovers dedicated to bringing joy through every bite
          </p>
        </div>

        {/* Main Content */}
        <div className='w-full flex flex-col lg:flex-row items-center gap-12'>

          {/* Left Stats */}
          <div className='flex-1 flex flex-col gap-8'>
            {whoAreWe.slice(0, 2).map((element) => (
              <div key={element.id} className='flex flex-col gap-1 border-l-2 border-black pl-5'>
                <h1 className='text-5xl font-extralight'>{element.number}</h1>
                <p className='text-gray-500 text-sm'>{element.title}</p>
              </div>
            ))}
          </div>

          {/* Center Image */}
          <div className='flex-1 flex justify-center relative'>
            <img
              src='/center.svg'
              alt='center'
              className='absolute inset-0 w-full h-full object-contain opacity-20'
            />
            <img
              src='/whoweare.png'
              alt='who we are'
              className='relative z-10 w-full max-w-sm object-cover'
            />
          </div>

          {/* Right Stats */}
          <div className='flex-1 flex flex-col gap-8'>
            {whoAreWe.slice(2, 4).map((element) => (
              <div key={element.id} className='flex flex-col gap-1 border-r-2 border-black pr-5 items-end text-right'>
                <h1 className='text-5xl font-extralight'>{element.number}</h1>
                <p className='text-gray-500 text-sm'>{element.title}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhoAreWe