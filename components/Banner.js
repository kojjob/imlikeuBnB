import React from "react"
import Image from "next/image"

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[80vh]'>
      <Image
        src='https://res.cloudinary.com/dpajlrlfu/image/upload/v1628499287/asad-maldives-1591373_j046mr.jpg'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-gray-100 text-sm sm:text-lg font-bold mb-4'>
          Not sure where to go
        </p>
        <button className='text-gray-500 font-semibold bg-white px-10 py-4 rounded-full shadow-md hover:shadow-lg active:scale-90 transition duration-150'>
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
