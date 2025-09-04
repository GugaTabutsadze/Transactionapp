"use client"

import React from 'react'
import DashContent from './components/DashContent/DashContent'
import Dashnavi from './components/Dashnavi'

const DashboardMain = () => {
  return (
    <div className='flex h-screen w-full'>
      <Dashnavi />
      <DashContent />
    </div>
  )
}

export default DashboardMain