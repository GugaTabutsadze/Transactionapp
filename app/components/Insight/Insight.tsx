import React from 'react'

const Insight = () => {
  return (
    <div id='insight' className='scroll-mt-[100px] max-w-6xl mx-auto px-4 sm:px-6 mt-25'>
      <div className='w-full flex flex-col items-center justify-center max-w-3xl mx-auto text-center'>
        <div
          className='inline-block px-4 py-1 rounded-full bg-[#0096fb]/10 
          text-[#0096fb] font-semibold text-sm mb-6' 
        >
          Boost your financial control
        </div>
        <div
          className='text-3xl md:text-5xl font-bold tracking-tight bg-gradient-to-b
          from-[#174773] to-[#0096fb] text-transparent bg-clip-text mb-6' 
        >
          A smarter way to manage your money
        </div>
        <div className='text-[#174773] text-lg md:text-xl opacity-80 mb-10'>
          Instantly visualize, track, and optimize your finances with Vorifi.
          All your accounts, budgets, and insights in one beautiful dashboard.
        </div>
        <div className='w-full'>
           <img 
             className='rounded-2xl shadow-2xl border-2 border-[#0096fb]/20 w-full max-w-4xl 
            bg-white'
             src="/images/dashboard.jpg" 
             alt='dashboard'
             />
        </div>
      </div>
    </div>
  )
}

export default Insight
