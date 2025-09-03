import { ArrowLeftEndOnRectangleIcon, BuildingLibraryIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Content = () => {
  return (
    <div className='w-full flex flex-col justify-center mt-5'>
      <div className='space-y-[80px] lg:space-y-0 lg:grid grid-cols-3 lg:space-x-5 items-center justify-center 
           p-4 max-w-[1550px] w-full'>
        <div className='border border-white p-5 rounded-md flex items-start space-x-10
             will-change-transform hover:scale-105 transition-all duration-300'>
            <div>
              <img 
               className='bg-white rounded-full'
               width={30}
               height={30}
               src="/images/chartup.png" 
               />
            </div>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-[24px] text-white font-semibold'>Income</h1>
                <p className='text-[14px] text-[#a3a3a3]'>Jun 28-Jul 28, 2025</p>
                <span className='text-[24px] text-white font-semibold'>$0.00</span>
                <p className='text-[14px] text-[#a3a3a3]'>0% from last period</p>
            </div>
        </div>
        <div className='border border-white p-5 rounded-md flex items-start space-x-10
             will-change-transform hover:scale-105 transition-all duration-300'>
            <div>

           <img 
           className='bg-white rounded-full'
            width={30}
            height={30}
            src="/images/chartdown.png" 
            />
            </div>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-[24px] text-white font-semibold'>Expanse</h1>
                <p className='text-[14px] text-[#a3a3a3]'>Jun 28-Jul 28, 2025</p>
                <span className='text-[24px] text-white font-semibold'>$0.00</span>
                <p className='text-[14px] text-[#a3a3a3]'>0% from last period</p>
            </div>
        </div>
        <div className='border border-white p-5 rounded-md flex items-start space-x-10
             will-change-transform hover:scale-105 transition-all duration-300'>
            <div>
          <img 
          className='bg-white rounded-full'
            width={30}
            height={30}
            src="/images/piggybank.png" 
            />
            </div>
            <div className='flex flex-col space-y-2'>
                <h1 className='text-[24px] text-white font-semibold'>Remaining</h1>
                <p className='text-[14px] text-[#a3a3a3]'>Jun 28-Jul 28, 2025</p>
                <span className='text-[24px] text-white font-semibold'>$0.00</span>
                <p className='text-[14px] text-[#a3a3a3]'>0% from last period</p>
            </div>
        </div>
      </div>
      <div className='space-y-10 lg:space-y-0 lg:grid grid-cols-2 items-center lg:space-x-5 text-white max-w-[1550px] w-full p-4 mt-20'>
        <div className='border border-white  rounded-md h-[400px] p-5 text-center'>
          <div className='flex justify-between w-full  px-1 mb-30 '>
            <h1 className='text-[20px] font-semibold'>Transactions</h1>
            <div className='bg-[#3a3a3a] rounded-md p-2 '>
            <select className='bg-[#3a3a3a]  text-[#a3a3a3] outline-none 
                     px-2 max-w-[110px] w-full cursor-pointer'>
              <option>Area chart</option>
              <option>Line chart</option>
              <option>Bar chart</option>
            </select>
            </div>
          </div>
          <div className='text-[#a3a3a3] text-[14px]'>
            <p>No Data for this period</p>
          </div>
        </div>
        <div className='border border-white rounded-md h-[400px] p-5 text-center'>
           <div className='flex justify-between w-full  px-1 mb-30 '>
            <h1 className='text-[20px] font-semibold'>Categories</h1>
            <div className='bg-[#3a3a3a] rounded-md p-2 '>
            <select className='bg-[#3a3a3a]  text-[#a3a3a3]  outline-none 
                     px-2 max-w-[110px] w-full cursor-pointer'>
              <option>Pie chart</option>
              <option>Radar chart</option>
              <option>Radial chart</option>
            </select>
           </div>
          </div>
          <div className='text-[#a3a3a3] text-[14px]'>
            <p>No Data for this period</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
