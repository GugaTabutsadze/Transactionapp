import Link from 'next/link'
import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Herosection = () => {
  return (
    <div className='flex flex-col items-center 
        justify-center mx-auto max-w-6xl px-4 sm:px-6 mt-[70px] '>
      <div className='flex items-center justify-center  min-h-[120px] mb-6
          md:min-h-[160px] lg:min-h-[200px] text-center text-reveal-on-scroll visible
          text-5xl md:text-7xl lg:text-8xl font-bold font-sans text-[#174773] relative'>
        <span>
         <Typewriter
          words={['Take Control of Your Finances', 'Track Every Penny',
          'Build Your Wealth', 'Smart Financial Decision']} 
          typeSpeed={70}
          loop={true}
          />
         <span className='animate-pulse text-[#0096fb] mb-8 opacity-80'>
           |
         </span>
        </span>
      </div>
      <div className='text-center'>
        <p 
          className='text-xl md:text-2xl mx-auto  text-[#174773]
          font-semibold max-w-3xl'>
            Vorifi helps you track expenses, manage budgets, 
            and achieve your financial goals with powerful tools and intelligent insights.
        </p>
      </div>
      <div>
        <Link href='/Signup'>
          <button
           className='bg-[#0096fb] text-[#f1f1e6] px-8 p-4 rounded-full
           font-semibold text-lg hover:bg-[#007acc] transition-all duration-300
           transform hover:scale-105 shadow-lg hover:shadow-[#0096fb]/50 inline-block border-2 
         border-[#0096fb] hover:border-[#007acc] cursor-pointer mt-8'
          >
            Get Started
          </button>
        </Link>
      </div>
      <div className='mt-10 max-w-5xl mx-auto animate-fade-in-up-delayed'>
        <img 
          width={900}
          height={900}
          className='rounded-xl transform hover:scale-105 transition-all duration-300 shadow-2xl
          backdrop-blur-sm border-2 border-[#0096fb] overflow-hidden bg-white/80'
          src='/images/dashboard.jpg'
          alt='Dashboard'
        />
      </div>
    </div>
  )
}

export default Herosection
