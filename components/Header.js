import React from "react"
import Image from "next/image"
import { useState } from "react"
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid"
import "react-date-range/dist/styles.css" // main style file
import "react-date-range/dist/theme/default.css" // theme css file
import { DateRangePicker } from "react-date-range"
// import {useRouter} from 'next/router'
import { useRouter } from "next/router"

function Header() {
  const [searchInput, setSearchInput] = useState("")
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [noOfGuests, setNoOfGuests] = useState(1)
  const router = useRouter()

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate)
    setEndDate(ranges.selection.endDate)
  }

  const resetInput = () => {
    setSearchInput("")
  }

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    })
  }
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-sm p-4 md:px-10'>
      {/* left */}
      <div className='relative flex items-center h-10 my-auto cursor-pointer'>
        <Image
          onClick={() => router.push("/")}
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* middle */}
      <div className='flex items-center py-1 md:border-2 rounded-full'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          type='text'
          placeholder='Search here'
          className='flex-grow pl-5 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-400'
        />
        <SearchIcon className='hidden md:inline-flex h-8 text-white p-2 bg-red-600 rounded-full cursor-pointer md:mx-2' />
      </div>
      {/* right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex items-center space-x-2 border-2 p-2 rounded-full '>
          <MenuIcon className='h-6 cursor-pointer' />
          <UserCircleIcon className='h-6 cursor-pointer' />
        </div>
      </div>
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto mt-1 '>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className='flex items-center mb-4 border-b'>
            <h2 className='text-2xl text-gray-500 flex-grow font-semibold'>
              Number of Guests
            </h2>
            <UsersIcon className='h-5' />
            <input
              type='number'
              value={noOfGuests}
              min={1}
              onChange={(e) => setNoOfGuests(e.target.value)}
              className='w-12 pl-2 outline-none text-red-400'
            />
          </div>
          <div className='flex'>
            <button onClick={resetInput} className='flex-grow text-gray-500 '>
              Cancel
            </button>
            <button onClick={search} className='flex-grow text-red-400'>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
