import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'
import { toast } from 'react-toastify'
import { data } from 'react-router-dom'

const Reservation = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [phone, setPhone] = useState('')

  const navigate = useNavigate()

  const handleReservation = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/api/v1/reservation/send`,
        { firstName, lastName, email, phone, date, time },
        {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        }
      )
      toast.success(data.message)
      setFirstName('')
      setLastName('')
      setPhone('')
      setDate('')
      setTime('')
      setEmail('')

      navigate('/success')

    } catch (error) {
      toast.error(error.response?.data?.message || error.message)
    }
  }

  return (
    <section id='reservation' className='w-full py-20 px-5 flex justify-center'>
      <div className='w-full max-w-7xl flex flex-col lg:flex-row items-center gap-12'>

        {/* Left Image */}
        <div className='flex-1 flex justify-center'>
          <img
            src='/reservation.png'
            alt='reservation'
            className='w-full max-w-md object-cover rounded-2xl'
          />
        </div>

        {/* Right Form */}
        <div className='flex-1 flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <h1 className='text-4xl sm:text-5xl font-bold tracking-widest'>
              MAKE A RESERVATION
            </h1>
            <p className='text-gray-500 text-lg font-light'>
              For further questions, please call us at{' '}
              <span className='text-black font-medium'>+1 (800) 123-4567</span>
            </p>
          </div>

          <form className='flex flex-col gap-4' onSubmit={handleReservation}>

            {/* Row 1 */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                type='text'
                placeholder='First Name'
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className='flex-1 border border-gray-300 rounded-full px-5 py-3 text-sm outline-none focus:border-black transition'
              />
              <input
                type='text'
                placeholder='Last Name'
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className='flex-1 border border-gray-300 rounded-full px-5 py-3 text-sm outline-none focus:border-black transition'
              />
            </div>

            {/* Row 2 */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className='flex-1 border border-gray-300 rounded-full px-5 py-3 text-sm outline-none focus:border-black transition text-gray-500'
              />
              <input
                type='time'
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className='flex-1 border border-gray-300 rounded-full px-5 py-3 text-sm outline-none focus:border-black transition text-gray-500'
              />
            </div>

            {/* Row 3 */}
            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                type='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='flex-1 border border-gray-300 rounded-full px-5 py-3 text-sm outline-none focus:border-black transition'
              />
              <input
                type='number'
                placeholder='Phone'
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className='flex-1 border border-gray-300 rounded-full px-5 py-3 text-sm outline-none focus:border-black transition'
              />
            </div>

            <button
              type='submit'
              className='flex items-center justify-center gap-2 w-fit border border-black px-8 py-3 rounded-full hover:bg-black hover:text-white transition text-sm tracking-wide mt-2'
            >
              RESERVE NOW
              <HiOutlineArrowNarrowRight />
            </button>

          </form>
        </div>

      </div>
    </section>
  )
}

export default Reservation