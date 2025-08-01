import React from 'react'
import Essential from './Advanced and Essential Features/Essential'
import Advanced from './Advanced and Essential Features/Advanced'

const Aboutus = () => {
  return (
    <div id='about' className='scroll-mt-[100px] w-full px-4 py-4 mt-16'>
      <div className='flex flex-col items-center justify-center text-center mx-auto w-full'>
        <div className='flex flex-col space-y-10'>
          <h1 className='text-5xl md:text-7xl font-bold text-[#173773] mb-2 inline-block 
              transition-all duration-1000 text-reveal-on-scroll visible'>
            What is Vorifi?
          </h1>
          <p className='text-[#173773] text-lg md:text-xl font-semibold max-w-[730px] 
             mx-auto leading-relaxed opacity-80 transition-all duration-1000 deley-300 world-reveal-on-scroll visible'>
            Are you tired of not knowing how to keep tracking of all your expenses 
            and income you make as it is way too hard to manage it all at once? Vorifi
            makes this task so much easier and simple without all the hassle.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center gap-4 md:gap-[2vw]
             items-center max-w-7xl mx-auto px-2 w-full mt-7'>
            <Essential />
            <Advanced />
        </div>
      </div>
    </div>
  )
}

export default Aboutus
