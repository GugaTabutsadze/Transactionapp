"use client"
import React from 'react'
import { LinearProgress } from '@mui/material'
import { useRecoilState } from 'recoil'
import { loadingScreenState } from '../state'

const Loading = () => {
  const [isLoading, setIsLoading] = useRecoilState(loadingScreenState)
  
  // Don't render anything if not loading
  if (!isLoading) return null
  
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 bg-white z-50 flex items-center justify-center">
      <div className='flex flex-col items-center'>
        <img src={'/images/world.png'} alt='world' width={120} height={120} />
        <h1 className='text-6xl font-bold mb-10'>
          Busy <span className='text-[#F4AF01]'>Bee</span>
        </h1>
        <LinearProgress 
          sx={{ 
            width: 265, 
            height: 10, 
            backgroundColor: '#F4AF01',
            "& .MuiLinearProgress-bar": { backgroundColor: '#000' } 
          }}
        />
      </div>
    </div>
  )
}

export default Loading
