import React from "react"
import Image from "next/image"

function Banner() {
  return (
    <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[80vh]'>
      <Image
        src='https://links.papareact.com/0fm'
        layout='fill'
        objectFit='cover'
        objectPosition='center'
      />
      <div className='absolute top-1/2 w-full text-center'>
        <p className='text-sm sm:text-lg font-bold'>Not sure where to go</p>
        <button className='text-gray-600 bg-white px-10 py-4 rounded-full shadow-md font-bold my-3 hover:shadow-xl active:scale-90 transition duration-150'>
          I'm flexible
        </button>
      </div>
    </div>
  )
}

export default Banner
