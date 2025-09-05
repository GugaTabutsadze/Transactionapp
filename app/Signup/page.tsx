"use client"
import React, { useEffect, useState } from 'react'
import SignupFooter from './Footer/SignupFooter'
import Link from 'next/link'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { loadingScreenState, userState } from '../state'
import { auth } from '@/Firebase'
import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signInWithRedirect } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import Loading from '../components/Loading'
import { Router } from 'next/router'




const page = () => {
  const router = useRouter() // Add this line
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const setUser = useSetRecoilState(userState)
  const [isClient, setIsClient] = useState(false)    
  const [isLoading, setIsLoading] = useRecoilState(loadingScreenState)
  
  const handleSignUp = async () => {
    setIsLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth!, email, password);
      const user = userCredential.user;
      
      setUser({
        name: "",
        email: user.email || "",
        uid: user.uid,
        userName: "",
      });
      
      router.push("/Dashboard")
    } catch (error) {
      console.error("Sign-up error:", error)
      setIsLoading(false)
    }
    setEmail("")
    setPassword("")
  };
  
const provider = new GoogleAuthProvider();

const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const handleSignUpWithGoogle = async () => { 
  setIsLoading(true) // Add loading state
  try { 
    const provider = new GoogleAuthProvider() 

    let result;
    if (isMobile()) {
      // Mobile: use redirect
      await signInWithRedirect(auth!, provider)
      // After redirect, Firebase handles the result automatically
      // You can handle it with getRedirectResult elsewhere if needed
    } else {
      // Desktop: popup works
      result = await signInWithPopup(auth!, provider) 
      const user = result.user 
      setUser({ 
        name: user.displayName || "", 
        email: user.email || "", 
        uid: user.uid, 
        userName: user.email?.split("@")[0] || "", 
      })
      router.push("/Dashboard") 
    }
  } catch (error) { 
    console.error("Google sign-in error:", error)
    setIsLoading(false) // Hide loading on error
  } 
}

 const handleSignUpWithGithub = async () => { 
    setIsLoading(true) // Add loading state
    try { 
      const provider = new GithubAuthProvider() 
      const result = await signInWithPopup(auth!, provider) 
      const user = result.user 
      setUser({ 
        name: user.displayName || "", 
        email: user.email || "", 
        uid: user.uid, 
        userName: user.email?.split("@")[0] || "", 
      })
      router.push("/Dashboard") 
    } catch (error) { 
      console.error("Github sign-in error:", error)
      setIsLoading(false) // Hide loading on error
    } 
  }


  useEffect(() => {
    setIsLoading(true)
    
    const unsubscribe = onAuthStateChanged(auth!, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || '',
          userName: currentUser.email!.split('@')[0] || '',
          email: currentUser.email || '',
          uid: currentUser.uid,
        })
        // If user is already authenticated, redirect to dashboard
        router.push("/Dashboard")
      }
      
      setTimeout(() => {
        setIsLoading(false)
        setIsClient(true)
      }, 1000)
    })

    return () => unsubscribe()
  }, [setUser, setIsLoading, router])

  // Show loading component while loading
  if (!isClient || isLoading) {
    return <Loading />
  }
  return (
    <>
    <Loading />
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
            <button 
              onClick={handleSignUpWithGithub}
              className='flex items-center justify-center px-2 py-1.5
              rounded-md w-full border border-gray-200 cursor-pointer'>
              <img 
                width={15}
                height={15}
                src="/images/github.png" 
              />
            </button>
            <button 
                onClick={handleSignUpWithGoogle}
                className='flex items-center justify-center px-2 py-1.5
                rounded-md w-full border border-gray-200 cursor-pointer'> 
               <img 
                width={15}
                height={15}
                src="/images/google.png" 
                />
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
           <div className='flex flex-col space-y-3'>
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
           </div>
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
    </>
  )
}

export default page


function setUser(arg0: { name: string; email: string; uid: string; userName: string }) {
  throw new Error('Function not implemented.')
}

