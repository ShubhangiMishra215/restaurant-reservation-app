import React, { useEffect, useState } from 'react'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'

const Success = () => {
  const [countdown, setCountDown] = useState(10)
  const navigate = useNavigate()

  useEffect(() => {
    const timeoutId = setInterval(() => {
      setCountDown((prevCount) => {
        if (prevCount === 1) {
          clearInterval(timeoutId)
          navigate('/')
          return 0
        }

        return prevCount - 1
      })
    }, 1000)

    return () => clearInterval(timeoutId)
  }, [navigate])

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center max-w-md">

        <img
          src="/sandwich.png"
          alt="success"
          className="w-64 mx-auto mb-6"
        />

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
          Redirecting to Home in {countdown} seconds...
        </h1>

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

export default Success