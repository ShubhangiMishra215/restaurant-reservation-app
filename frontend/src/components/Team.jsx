import React from 'react'
import restApi from '../restApi.json'

const Team = () => {
  const team = restApi.data[0].team

  return (
    <section id='team' className='w-full py-20 px-5 flex justify-center'>
      <div className='w-full max-w-7xl flex flex-col items-center gap-12'>

        {/* Heading */}
        <div className='text-center flex flex-col gap-2'>
          <h1 className='text-4xl sm:text-5xl font-bold tracking-widest'>
            OUR TEAM
          </h1>
          <p className='text-gray-500 text-lg font-light'>
            The passionate people behind every dish we serve
          </p>
        </div>

        {/* Team Cards */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full'>
          {team.map((element) => (
            <div
              key={element.id}
              className='flex flex-col items-center text-center gap-3 p-6 border border-gray-100 rounded-2xl hover:shadow-md transition'
            >
              <img
                src={element.image}
                alt={element.name}
                className='w-24 h-24 rounded-full object-cover border-2 border-gray-200'
              />
              <h3 className='text-lg font-semibold'>{element.name}</h3>
              <p className='text-gray-500 text-sm'>{element.designation}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Team