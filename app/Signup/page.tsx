"use client"
import React, { useEffect, useState } from 'react'
import SignupFooter from './Footer/SignupFooter'
import Link from 'next/link'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { userState } from '../state'
import { auth } from '@/Firebase'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'

const page = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const setUser = useSetRecoilState(userState)
  const [isClient, setIsClient] = useState(false) 

 const handleSignUp = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user; // ✅ Now `user` exists

    setUser({
        name: "",
        email: user.email || "",
        uid: user.uid,
        userName: "",
      });
  } catch (error) {
    console.error("Sign-up error:", error)
  }
};
  
  
 useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || '',
          userName: currentUser.email!.split('@')[0] || '',
          email: currentUser.email || '',
          uid: currentUser.uid,
        })
      }
      setIsClient(true)
    })

    return () => unsubscribe()
  }, [setUser])
    
    if (!isClient) return null
  return (
    <div className='min-h-screen flex flex-col lg:grid lg:grid-cols-2'>
      <div className='flex flex-col flex-grow space-y-8 bg-white
           items-center justify-center px-4 py-8 overflow-y-auto'>
        <div className='text-center flex flex-col space-y-4'>
         <h1 className='font-bold text-3xl text-[#2E2A47]'>
          Welcome Back!
         </h1>
         <p className='text-base text-[#7E8CA0]'>
          Log in or Create account to get back to your dashboard
         </p>
        </div>
        <div className='flex flex-col  items-center justify-center 
             mb-8 w-full max-w-sm bg-white shadow-xl rounded-xl border border-gray-200
             pt-8'>
          <div className='text-center flex flex-col space-y-1 mb-8'>
            <h1 className='font-bold text-[17px]'>Create your account</h1>
            <p className='text-[13px] text-[#7E8CA0]'>Welcom! Please fill in the details to get started</p>
          </div>
          <div className='flex flex-col space-y-4 w-full px-10 pb-6'>
           <div className='flex space-x-2 w-full'>
            <button className='flex items-center justify-center px-2 py-1.5
                    rounded-md w-full border border-gray-200 cursor-pointer'>
              <img 
                width={15}
                height={15}
                src="/images/github.png" 
              />
            </button>
            <button className='flex items-center justify-center px-2 py-1.5
                    rounded-md w-full border border-gray-200 cursor-pointer'>
                      <Link href="/Dashboard">
               <img 
                width={15}
                height={15}
                src="/images/google.png" 
                />
                </Link>
            </button>
            <button className='flex items-center justify-center px-2 py-1.5
                    rounded-md w-full border border-gray-200 cursor-pointer'>
               <img 
                width={15}
                height={15}
                src="/images/microsoft.png" 
              />
            </button>
           </div>
           <div className="flex items-center justify-center space-x-5 w-full">
            <div className="flex-grow border-b border-gray-200"></div>
              <p className="text-gray-500">or</p>
            <div className="flex-grow border-b border-gray-200"></div>
           </div>
           <form className='flex flex-col space-y-3'>
            <div className='flex flex-col'>
             <label className='mb-1 text-[13px]'>
               Email adress
             </label>
             <input 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className='bg-[#3a3a3a] text-[13px] text-[#a3a3a3] px-2 py-1.5 rounded-md'
               type='email' 
               placeholder='Enter your emaila adress'
             />
            </div>
            <div className='flex flex-col'>
             <label className='mb-1 text-[13px]'>
               Password
             </label>
             <input 
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               className='bg-[#272727] text-[13px] text-[#a3a3a3] px-2 py-1.5 rounded-md'
               type='password' 
               placeholder='Enter your emaila adress'
             />
            </div>
            <div className='relative mt-6'>
            <button
            onClick={handleSignUp}
               className='bg-[#3a3a3a] w-full text-white text-[13px]
                py-1.5 rounded-md cursor-pointer'
            >
              Continue
             </button>
            </div>
           </form>
          </div>
          <SignupFooter />
        </div>
      </div>
      <div 
        className='bg-blue-600 flex items-center justify-center
        py-2 sm:py-0 '>
        <Link href="/">
         <img
          width={70}
          height={70} 
          src="/images/rlogo.jpg" 
         />
        </Link>
      </div>
    </div>
  )
}

export default page


