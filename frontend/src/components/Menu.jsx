import React from 'react'
import restApi from '../restApi.json'

const Menu = () => {
  const dishes = restApi.data[0].dishes

  return (
    <section id='menu' className='w-full py-20 px-5 flex justify-center'>
      <div className='w-full max-w-7xl flex flex-col items-center gap-12'>

        {/* Heading */}
        <div className='text-center flex flex-col gap-2'>
          <h1 className='text-4xl sm:text-5xl font-bold tracking-widest'>
            POPULAR DISHES
          </h1>
          <p className='text-gray-500 text-lg font-light'>
            Handpicked favourites loved by thousands of our customers every week
          </p>
        </div>

        {/* Dishes Grid */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 w-full'>
          {dishes.map((element) => (
            <div
              key={element.id}
              className='flex flex-col items-center gap-4 p-4 border border-gray-100 rounded-2xl hover:shadow-md transition'
            >
              <img
                src={element.image}
                alt={element.title}
                className='w-full h-48 object-cover rounded-xl'
              />
              <h3 className='text-lg font-semibold text-center'>{element.title}</h3>
              <button className='border border-black px-4 py-1 rounded-full text-sm hover:bg-black hover:text-white transition'>
                {element.category}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Menu