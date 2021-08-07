import React from "react"
import Image from "next/image"

function NearByCard({ img, location, distance }) {
  return (
    <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out'>
      {/* left */}
      <div className='relative h-16 w-16'>
        <Image src={img} layout='fill' className='rounded-xl' />
      </div>
      {/* right */}
      <dir className='text-gray-500'>
        <h2 className='text-gray-700 font-semibold'>{location}</h2>
        <h2>{distance}</h2>
      </dir>
    </div>
  )
}

export default NearByCard
