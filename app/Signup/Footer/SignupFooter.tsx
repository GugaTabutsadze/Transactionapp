import Link from 'next/link'
import React from 'react'

const SignupFooter = () => {
  return (
    <div className='bg-gray-100 w-full rounded-b-xl'>
      <div className='flex items-center justify-center space-x-2 py-3 px-2 border-b border-gray-200'>
       <span className='text-[13px] text-gray-600'>
        Already have an account?
       </span>
       <Link href="/Signin">
        <button className='text-[14px] text-[#2f3037] font-semibold cursor-pointer'>
            Sign in
        </button>
       </Link>
      </div>
      <div className='flex items-center justify-center py-3 px-2'>
       <p className='text-[13px] text-gray-600'>secured by <span className='font-semibold'>Clerck</span></p>
      </div>
    </div>
  )
}

export default SignupFooter
