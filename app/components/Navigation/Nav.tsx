'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'

const Nav = () => {
  const [isScrolled, setIsScrolled] = useState(false);
   
     
  
  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', onScroll);
    
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  

  return (
    <div
      className={`fixed flex items-center justify-between bg-[#F1FaFF] transition-all duration-300 ease-in-out
    px-[10px] sm:px-[16px] h-[70px] 
    ${isScrolled 
      ? 'top-[10px] left-[4%] right-[4%] w-[92%] z-50 bg-[#F1FaFF] rounded-xl shadow-md' 
      : 'top-0 left-0 right-0 w-full bg-[#F1FaFF]'}
  `}
    >
      <div>
        <h1 className='text-[26px] text-center md:text-[31px] lg:text-[38.4px] text-[#0096fb] font-semibold'>Transaction</h1>
      </div>
      <div className='hidden lg:flex items-center space-x-16'>
        <MenuLinks text={'Insight'} href='#insight'/>
        <MenuLinks text={'About'} href='#about'/>
        <MenuLinks text={'Demo'} href='#slider'/>
        <MenuLinks text={'Contact'} href='#contact'/>
      </div>
      <div className='hidden  sm:flex items-center space-x-5'>
        <Link href="/Signin">
        <button className='border-2 border-[#0096fb] text-[#0096fb] 
               text-[17.6px] font-semibold px-1 sm:px-6 py-2 rounded-full cursor-pointer
               hover:bg-[rgba(0,150,251,0.1)] transition-all duration-300 hover:text-[#174773]
               hover:-translate-y-0.5'>
            Sign In
        </button>
        </Link>
        <Link href="/Signup">
          <button className='border-2 border-[#0096fb] text-white bg-[#0096fb] 
               text-[17.6px] font-semibold px-1 sm:px-6 py-2 rounded-full cursor-pointer shadow-[0px_4px_15px_rgba(0,150,251,0.3)]
               hover:bg-[#007ACC] transition-all duration-300 hover:-translate-y-0.5
               hover:shadow-[0px_6px_20px_rgba(0,150,251,0.4)]'>
            Sign Up
          </button>
        </Link>
      </div>
        <Bars3Icon width={30} height={30} className='sm:hidden cursor-pointer'/>
    </div>
  )
}

export default Nav

function MenuLinks({text, href}:any) {
    return (
     <div>
        <Link 
          href={href} 
          className="relative group text-black text-[19.2px] font-semibold pb-2"
         >
          {text}
          <span className="absolute left-0 bottom-0 h-[2px] 
           w-0 bg-[#0096fb] transition-all duration-300 group-hover:w-full"></span>
        </Link>
     </div>
    )
}