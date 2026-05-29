import React from 'react'
import restApi from '../restApi.json'

const Qualities = () => {
  const qualities = restApi.data[0].ourQualities

  return (
    <section id='qualities' className='w-full py-20 px-5 flex justify-center'>
      <div className='w-full max-w-7xl flex flex-col items-center gap-12'>

        {/* Heading */}
        <div className='text-center flex flex-col gap-2'>
          <h1 className='text-4xl sm:text-5xl font-bold tracking-widest'>
            WHY CHOOSE US
          </h1>
          <p className='text-gray-500 text-lg font-light'>
            We don't just serve food — we craft experiences
          </p>
        </div>

        {/* Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full'>
          {qualities.map((element) => (
            <div
              key={element.id}
              className='flex flex-col items-center text-center gap-4 p-6 border border-gray-100 rounded-2xl hover:shadow-md transition'
            >
              <img
                src={element.image}
                alt={element.title}
                className='w-16 h-16 object-contain'
              />
              <p className='text-lg font-semibold'>{element.title}</p>
              <p className='text-gray-500 text-sm leading-relaxed'>{element.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Qualities