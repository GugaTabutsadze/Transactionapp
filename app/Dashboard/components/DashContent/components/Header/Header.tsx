"use client"
import React, { useState } from "react"
import { DateRange } from "react-date-range"
import { format } from "date-fns"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'

const Header = () => {
   const [showCalendar, setShowCalendar] = useState(false)

  const [range, setRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar)
    
  }

  const applyDate = () => {
    setShowCalendar(false)
    // handle data fetch/filtering here if needed
  }

  const resetDate = () => {
    setRange([{ startDate: new Date(), endDate: new Date(), key: 'selection' }])
  }

  return (
    <div className='bg-gradient-to-r from-blue-500 to-blue-300 w-full shadow-md
         flex flex-col items-center justify-center px-6 py-4'>
      <div className="flex w-full relative">
        <div>
        <img 
          className="cursor-pointer absolute"
          width={30}
          height={30}
          src="/images/menu.png" 
         />
        </div>
        <div className='max-w-2xl mx-auto flex flex-col items-center space-y-3 lg:space-y-8 mb-5'>
          <h1 className='text-3xl lg:text-5xl font-medium text-white'>
            Welcome Back
          </h1>
          <p className='text-md lg:text-base ml-5 text-white'>
            This is your Financial Overview Report
          </p>
        </div>
      </div>
      <div className="flex space-x-4">
        <div className='bg-[#3a3a3a] px-3 rounded-md will-change-transform hover:scale-105 
             transition-all duration-300 cursor-pointer'>
          <select className='sm:h-10 sm:px-3 py-2 outline-none text-[15px]
               rounded-md px-3 bg-[#3a3a3a] text-[#a3a3a3] cursor-pointer'>
            <option>
              All Accounts
            </option>
          </select>
        </div>
          <div className="flex">
            <button
              onClick={toggleCalendar}
              className="bg-[#3a3a3a] text-[#a3a3a3] px-4 py-2 rounded-md
              will-change-transform hover:scale-105 transition-all duration-200 cursor-pointer text-[15px]"
             >
            {format(range[0].startDate, "MMM dd")} - {format(range[0].endDate, "MMM dd, yyyy")}
            </button>
  {showCalendar && (
   <>
    <div className="fixed inset-0  z-40" onClick={applyDate}></div>
     <div className="hidden xl:block absolute bg-[#3a3a3a] mt-2 shadow-lg rounded-md z-50">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={range}
        months={2}
        direction="horizontal"
        className="text-sm"
      />
      <div className="flex space-x-4 px-4 py-2 border-t bg-gray-50">
        <button onClick={resetDate} className="text-sm text-blue-500 hover:underline cursor-pointer">Reset</button>
        <button onClick={applyDate} className="text-sm font-medium bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 cursor-pointer">Apply</button>
      </div>
    </div>
    {/* Mobile (under lg) calendar: 1 month and centered */}
    <div className="xl:hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
      bg-[#3a3a3a] rounded-md shadow-xl z-50 p-2 w-[90%] max-w-sm">
      <DateRange
        editableDateInputs={true}
        onChange={(item) => setRange([item.selection])}
        moveRangeOnFirstSelection={false}
        ranges={range}
        months={1}
        direction="vertical"
        className="text-sm"
      />
      <div className="flex justify-between px-4 py-2 border-t bg-gray-50">
        <button onClick={resetDate} className="text-sm text-blue-500 hover:underline cursor-pointer">Reset</button>
        <button onClick={applyDate} className="text-sm font-medium bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 cursor-pointer">Apply</button>
      </div>
    </div>
   </>
  )}
        </div>
      </div>
    </div>
  )
}

export default Header