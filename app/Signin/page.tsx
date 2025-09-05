"use client"
import React, { useEffect, useState } from 'react'
import Signinfooter from './SigninFooter/Signinfooter'
import Link from 'next/link'
import { 
  GithubAuthProvider, 
  GoogleAuthProvider, 
  onAuthStateChanged, 
  signInWithEmailAndPassword, 
  signInWithPopup, 
  signInWithRedirect,
  getRedirectResult 
} from 'firebase/auth'
import { auth } from '@/Firebase'
import { useRouter } from 'next/navigation'
import { useSetRecoilState } from 'recoil'
import { userState } from '../state'

const page = () => {
  const [isClient, setIsClient] = useState(false) 
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const setUser = useSetRecoilState(userState)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const router = useRouter()

  // Helper function to update user state and redirect
  const updateUserAndRedirect = (user:any) => {
    setUser({
      name: user.displayName || "",
      userName: user.email?.split("@")[0] || "",
      email: user.email || "",
      uid: user.uid,
    })
    router.push("/Dashboard")
  }

  const handleSignIn = async (e:any) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")
    
    try {
      if (!auth) {
        setError("Authentication not initialized")
        return
      }
      
      const userCredential = await signInWithEmailAndPassword(auth, email, password)
      const user = userCredential.user
      
      updateUserAndRedirect(user)
    } catch (err) {
  const error = err as Error;
  setError(error.message);
  console.error("Email sign-in error:", error);
} finally {
      setIsLoading(false)
    }
  }
  
  const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
  const handleSignUpWithGoogle = async () => { 
    setIsLoading(true)
    setError("")
    
    try { 
      const provider = new GoogleAuthProvider() 
  
      if (isMobile()) {
        // Mobile: use redirect
        await signInWithRedirect(auth!, provider)
        // Note: redirect will handle the rest, component will unmount
      } else {
        // Desktop: popup works
        const result = await signInWithPopup(auth!, provider) 
        const user = result.user 
        updateUserAndRedirect(user)
      }
    } catch (error) { 
      console.error("Google sign-in error:", error)
      setError("Failed to sign in with Google")
      setIsLoading(false)
    } 
  }

  const handleSignUpWithGithub = async () => {
    setIsLoading(true)
    setError("")
    
    try {
      const provider = new GithubAuthProvider()
      const result = await signInWithPopup(auth!, provider)
      const user = result.user
      
      updateUserAndRedirect(user)
    } catch (error) {
      console.error("Github sign-in error:", error)
      setError("Failed to sign in with GitHub")
      setIsLoading(false)
    }
  }

  useEffect(() => {
    setIsClient(true)

    if (!auth) return

    // Handle redirect result for mobile Google sign-in
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth!)
        if (result?.user) {
          updateUserAndRedirect(result.user)
        }
      } catch (error) {
        console.error("Redirect result error:", error)
        setError(error instanceof Error ? error.message : "Sign-in failed")
      }
    }

    handleRedirectResult()

    // Listen for auth state changes
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, redirect to dashboard
        updateUserAndRedirect(user)
      }
    })

    return () => unsubscribe()
  }, [])

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
        <div className='flex flex-col items-center justify-center 
             mb-8 w-full max-w-sm bg-white shadow-xl rounded-xl border border-gray-200
             pt-8'>
          <div className='text-center flex flex-col space-y-1 mb-8'>
            <h1 className='font-bold text-[17px]'>Create your account</h1>
            <p className='text-[13px] text-[#7E8CA0]'>Welcome! Please fill in the details to get started</p>
          </div>
          
          {error && (
            <div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 mx-10'>
              <span className='block sm:inline text-sm'>{error}</span>
            </div>
          )}
          
          <div className='flex flex-col space-y-4 w-full px-10 pb-6'>
           <div className='flex space-x-2 w-full'>
            <button 
                onClick={handleSignUpWithGithub}
                disabled={isLoading}
                className='flex items-center justify-center px-2 py-1.5
                rounded-md w-full border border-gray-200 cursor-pointer
                disabled:opacity-50 disabled:cursor-not-allowed'>
              <img 
                width={15}
                height={15}
                src="/images/github.png"
                alt="GitHub" 
              />
            </button>
            <button 
               onClick={handleSignUpWithGoogle}
               disabled={isLoading}
               className='flex items-center justify-center px-2 py-1.5
               rounded-md w-full border border-gray-200 cursor-pointer
               disabled:opacity-50 disabled:cursor-not-allowed'>
               <img 
                width={15}
                height={15}
                src="/images/google.png"
                alt="Google" 
              />
            </button>
            <button 
                disabled
                className='flex items-center justify-center px-2 py-1.5
                rounded-md w-full border border-gray-200 cursor-not-allowed
                opacity-50'>
               <img 
                width={15}
                height={15}
                src="/images/microsoft.png"
                alt="Microsoft" 
              />
            </button>
           </div>
           
           <div className="flex items-center justify-center space-x-5 w-full">
            <div className="flex-grow border-b border-gray-200"></div>
              <p className="text-gray-500">or</p>
            <div className="flex-grow border-b border-gray-200"></div>
           </div>
           
           <form onSubmit={handleSignIn} className='flex flex-col space-y-3'>
            <div className='flex flex-col'>
             <label className='mb-1 text-[13px]'>
               Email address
             </label>
             <input 
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               className='bg-[#3a3a3a] text-[13px] text-[#a3a3a3] px-2 py-1.5 rounded-md'
               type='email' 
               placeholder='Enter your email address'
               required
               disabled={isLoading}
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
               placeholder='Enter your password'
               required
               disabled={isLoading}
             />
            </div>
            <div className='relative mt-8'>
             <button
               type="submit"
               disabled={isLoading || !email || !password}
               className='bg-[#3a3a3a] w-full text-white text-[13px]
                py-1.5 rounded-md cursor-pointer disabled:opacity-50 
                disabled:cursor-not-allowed flex items-center justify-center'
             >
               {isLoading ? (
                 <span>Signing in...</span>
               ) : (
                 'Continue'
               )}
             </button>
            </div>
           </form>
          </div>
          <Signinfooter />
        </div>
      </div>
      <div 
        className='bg-blue-600 flex items-center justify-center
        py-2 sm:py-0'>
        <Link href="/">
         <img
          width={70}
          height={70} 
          src="/images/rlogo.jpg"
          alt="Logo" 
         />
        </Link>
      </div>
    </div>
  )
}

export default page