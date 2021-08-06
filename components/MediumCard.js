import React from "react"
import Image from "next/image"

function MediumCard({ img, title }) {
  return (
    <div className='cursor-pointer hover:scale-105 transform transition duration-300 ease-out mb-12'>
      <div className='relative h-80 w-80'>
        <Image src={img} layout='fill' className='rounded-lg' />
      </div>
      <h2 className='text-2xl mt-3'>{title}</h2>
    </div>
  )
}

export default MediumCard
