import React from 'react'
import Header from './components/Header/Header'
import Content from './components/Content/Content'


const DashContent = () => {
  return (
    <div className='flex-1 overflow-auto bg-[#1a1a1a] min-w-0'>
      <Header />
      <Content />
    </div>
  )
}

export default DashContent
