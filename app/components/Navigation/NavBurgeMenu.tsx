"use client"
import Link from 'next/link'
import React from 'react'

const MenuLinks = [ 
    {text: "Insight"}, 
    {text: "About"}, 
    {text: "Demo"}, 
    {text: "Contact"}, 
]

const NavBurgeMenu = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 z-[9999] flex flex-col justify-between bg-[#F1FaFF] pointer-events-auto">
      <div>
      <button 
        onClick={onClose}
        className="self-end m-4 text-2xl cursor-pointer hover:rotate-90 transition-transform duration-300 ml-90"
      >
        ✕
      </button>
      <ul className='p-4 flex flex-col space-y-6 text-[22px] font-semibold w-full'>
        {
         MenuLinks.map((item, index) => (
         <li 
             className='w-full border-b pb-6 border-[rgba(0,150,251,0.1)] transition-all duration-300 hover:translate-x-2.5'
             key={index} 
             onClick={onClose}>
          <span className='cursor-pointer hover:text-[#0096fb] pb-4'>
            {item.text}
          </span>
         </li>
         ))
        }
      </ul>
      </div>
      <div className='flex flex-col w-full space-y-4 px-4 mt-6'>
        <Link href="/Signin">
            <button 
              className='border-2 border-[#0096fb] text-[#0096fb] w-full
              text-[17.6px] font-semibold px-1 sm:px-6 py-2 rounded-full cursor-pointer
              hover:bg-[rgba(0,150,251,0.1)] transition-all duration-300 hover:text-[#174773]
              hover:-translate-y-0.5'
            >
              Sign In
            </button>
          </Link>
          <Link href="/Signup">
            <button 
              className='border-2 border-[#0096fb] text-white bg-[#0096fb] w-full
              text-[17.6px] font-semibold px-1 sm:px-6 py-2 rounded-full cursor-pointer shadow-[0px_4px_15px_rgba(0,150,251,0.3)]
              hover:bg-[#007ACC] transition-all duration-300 hover:-translate-y-0.5
              hover:shadow-[0px_6px_20px_rgba(0,150,251,0.4)]'
            >
              Sign Up
            </button>
          </Link>
      </div>
    </div>
  )
}

export default NavBurgeMenu
