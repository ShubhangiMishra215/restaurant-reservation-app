import React from 'react'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

const NotFound = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">
        
        <img
          src="/notFound.svg"
          alt="Not Found"
          className="w-full max-w-sm mx-auto mb-6"
        />

        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          LOOKS LIKE YOU ARE LOST
        </h1>

        <p className="text-gray-600 mb-6">
          We can&apos;t seem to find the page you are looking for.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          Back to Home
          <HiOutlineArrowNarrowRight />
        </Link>

      </div>
    </section>
  )
}

export default NotFound