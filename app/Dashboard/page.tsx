import React from 'react'
import DashNavigation from './components/DashNavigation/DashNavigation'
import DashContent from './components/DashContent/DashContent'

const page = () => {
  return (
    <div className='flex h-screen w-full'>
      <DashNavigation />
      <DashContent />
    </div>
  )
}

export default page
