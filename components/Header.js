import React from "react"
import Image from "next/image"

function Header() {
  return (
    <header className='sticky top-0 z-50 grid grid-col-3 bg-white shadow-md p-5'>
      {/* left */}
      <div className='relative flex items-center h-10 my-auto cursor-pointer'>
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* middle */}
      <div></div>
      {/* right */}
      <div></div>
    </header>
  )
}

export default Header