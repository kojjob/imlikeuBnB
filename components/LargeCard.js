import React from "react"
import Image from "next/image"

function LargeCard({ img, title, description, buttonText }) {
  return (
    <section className='relative cursor-pointer py-16'>
      <div className='relative h-96 min-w-[300] mt-12'>
        <Image
          src={img}
          layout='fill'
          objectFit='cover'
          className='rounded-xl'
        />
      </div>
      <div className='absolute top-44 left-12'>
        <h3 className='text-4xl text-gray-100 mb-3 w-64'>{title}</h3>
        <p className='text-gray-100'>{description}</p>
        <button className='text-md text-gray-700 font-bold px-12 py-3 rounded-lg mt-5 bg-white'>
          {buttonText}
        </button>
      </div>
    </section>
  )
}

export default LargeCard
