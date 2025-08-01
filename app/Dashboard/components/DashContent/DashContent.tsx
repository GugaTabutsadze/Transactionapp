import React from 'react'
import Header from './components/Header/Header'
import Content from './components/Content/Content'


const DashContent = () => {
  return (
    <div className='flex-grow  overflow-auto bg-[#1a1a1a]'>
      <Header />
      <Content />
    </div>
  )
}

export default DashContent
