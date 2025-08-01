import { CheckCircleIcon } from '@heroicons/react/24/outline'
import React from 'react'

const Essential = () => {
  return (
    <div className='flex flex-col items-start w-full p-8 md:w-[522px] border-t-6 border-2 border-[#0096fb] rounded-lg
         transform hover:scale-105 transition-all duration-300'>
        <h1 className='text-[#173773] text-2xl font-bold mb-6'>Essential Features</h1>
      <EssentialItems 
        text={"Track daily expenses"} 
        />
        <EssentialItems 
        text={"Set budget goals"} 
        />
        <EssentialItems 
        text={"View financial reports"} 
        />
        <EssentialItems 
        text={"Get AI-powered insights"} 
        />
    </div>
  )
}

export default Essential

function EssentialItems({text, img}:any) {
    return (
        <div className='flex items-center justify-between rounded-lg p-4 mb-4
             transform hover:translate-x-1 hover:-translate-y-1 transition-all duration-200
              shadow-md hover:shadow-lg text-lg border-2 border-[#0096fb] w-full'>
          <p className='text-[#174773] font-medium w-[150px] sm:w-auto'>{text}</p>
          <img src='/images/check.png' width={40}
                height={40}/>
        </div>
    )
}
