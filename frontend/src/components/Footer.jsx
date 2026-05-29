import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 border-b border-gray-700 pb-4">
          <div className="text-lg font-semibold tracking-wide">
            SHUBHANGI MISHRA
          </div>

          <div className="text-sm text-gray-300">
            ETAWAH, UTTAR PRADESH
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-4 text-sm text-gray-400">
          <p>DEVELOPED BY SHUBHANGI</p>

          <p>All Rights Reserved By Shubhangi</p>
        </div>

      </div>
    </footer>
  )
}

export default Footer