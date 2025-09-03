"use client"
import { userState } from '@/app/state'
import { auth } from '@/Firebase'
import { ArrowLeftStartOnRectangleIcon, 
         BanknotesIcon, 
         BuildingLibraryIcon, 
         Cog6ToothIcon, 
         CreditCardIcon, 
         EllipsisVerticalIcon, 
         QueueListIcon } from '@heroicons/react/24/outline'
import { onAuthStateChanged, signOut } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'

const SideLinks = [
  { text: "Overview", icon: <BuildingLibraryIcon width={40} height={40} /> },
  { text: "Transactions", icon: <CreditCardIcon width={40} height={40} /> },
  { text: "Accounts", icon: <QueueListIcon width={40} height={40} /> },
  { text: "Categories", icon: <BanknotesIcon width={40} height={40} /> },
  { text: "Stocks", icon: <CreditCardIcon width={40} height={40} /> },
  { text: "Settings", icon: <Cog6ToothIcon width={40} height={40} /> },
]

const Dashnavi = () => {
  const user = useRecoilValue(userState)
  const setUser = useSetRecoilState(userState)
  const router = useRouter()

  async function handleLogout() {
   try {
    await signOut(auth)
    setUser({ name: "", userName: "", email: "", uid: "" })
    router.push("/Signin")
   }catch (error) {
    console.log(error)
   }
  }
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser({
          name: currentUser.displayName || "",
          userName: currentUser.email?.split("@")[0] || "",
          email: currentUser.email || "",
          uid: currentUser.uid,
        })
      } else {
        setUser({ name: "", userName: "", email: "", uid: "" })
      }
    })

    return () => unsubscribe()
  }, [setUser])


  return (
    <div className='hidden lg:flex flex-col justify-between max-w-[300px] w-full bg-[#1a1a1a] text-white h-screen border-r border-white'>
     <div className='p-3'>
      <div className='flex justify-between items-center'>
        <h1 className='text-xl'>Transaction APP</h1>
        <ArrowLeftStartOnRectangleIcon 
          onClick={handleLogout}
          className='cursor-pointer'
          width={35} height={35}
          />
      </div>
      <div className='mt-10'>
        <ul className='flex flex-col space-y-8'>
        {
          SideLinks.map((link, index) => (
            <li 
              className='flex items-center space-x-5 transition-all
             hover:bg-amber-600 p-2 duration-300 rounded-md cursor-pointer'
              key={index}>
               {link.icon}
               <span className='text-[20px]'>
                {link.text}
               </span>
            </li>
          ))
        }
        </ul>
      </div>
     </div>
     <div className="flex justify-between border-t border-white h-[70px]">
      <div className='flex items-center space-x-6 p-2'>
        <img
          onClick={handleLogout}
          className='w-10 h-10 cursor-pointer' 
          src="/images/user.png"
          alt='User Avatar'
          />
        <div>
          <h1>{user.email ? user.email.split('@')[0] : 'Loading...'}</h1>
          <p>{user.email}</p>
        </div>
      </div>
      <div className='flex items-center p-2'>
        <EllipsisVerticalIcon 
          className='cursor-pointer'
          width={30} height={30}
          />
      </div>
     </div>
    </div>
  )
}

export default Dashnavi
