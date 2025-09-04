"use client"

import dynamic from 'next/dynamic'

// Disable server-side rendering for the entire dashboard
const DashboardContent = dynamic(() => import('./DashboardMain'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center bg-[#1a1a1a]">
      <div className="text-white text-xl">Loading Dashboard...</div>
    </div>
  )
})

export default function Dashboard() {
  return <DashboardContent />
}
{/*import React from 'react'
import DashContent from './components/DashContent/DashContent'
import Dashnavi from './components/Dashnavi'




const page = () => {
  return (
    <div className='flex h-screen w-full'>
      <Dashnavi />
      <DashContent />
    </div>
  )
}

export default page*/}
