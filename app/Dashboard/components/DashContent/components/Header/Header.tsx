"use client"
import React, { useEffect, useState } from "react"
import { motion, AnimatePresence, Variants } from "framer-motion"
import { format } from "date-fns"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRange } from "react-date-range"
import { 
  ArrowLeftEndOnRectangleIcon,
  BanknotesIcon, 
  Bars3Icon, 
  BuildingLibraryIcon, 
  Cog6ToothIcon, 
  CreditCardIcon, 
  QueueListIcon, 
  XMarkIcon 
} from "@heroicons/react/24/outline"
import { useSetRecoilState } from "recoil"
import { useRouter } from "next/navigation"
import { userState } from "@/app/state"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "@/Firebase"

const Header = () => {
  const [showCalendar, setShowCalendar] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const setUser = useSetRecoilState(userState)
   const router = useRouter()

  const [range, setRange] = useState([
    { startDate: new Date(), endDate: new Date(), key: 'selection' }
  ])

  const toggleCalendar = () => setShowCalendar(!showCalendar)
  const applyDate = () => setShowCalendar(false)
  const resetDate = () => setRange([{ startDate: new Date(), endDate: new Date(), key: 'selection' }])
  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)


  // Sidebar panel animation
  const menuVariants: Variants = {
    hidden: { x: "-100%", opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
    },
    exit: { x: "-100%", opacity: 0, transition: { duration: 0.3 } }
  }

  // Sidebar item animation
  const menuItemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1 + 0.2,
        duration: 0.3,
        ease: [0.25, 0.1, 0.25, 1],
      },
    }),
    exit: { opacity: 0, x: -20 }
  }

  const menuItems = [
    { Icon: BuildingLibraryIcon, text: "Overview" },
    { Icon: CreditCardIcon, text: "Transactions" },
    { Icon: QueueListIcon, text: "Accounts" },
    { Icon: BanknotesIcon, text: "Categories" },
    { Icon: CreditCardIcon, text: "Stocks" },
    { Icon: Cog6ToothIcon, text: "Settings" }
  ]
async function handleLogout() {
    try {
    if (!auth) return; // 🔹 Prevent null
    await signOut(auth);
    setUser({ name: "", userName: "", email: "", uid: "" });
    router.push("/Signin");
  } catch (error) {
    console.log(error);
  }
  }
 useEffect(() => {
    // Only run if auth is available (client-side)
    if (!auth) return

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

    return () => unsubscribe?.()
  }, [setUser])

  return (
    <div className="bg-gradient-to-r from-blue-500 to-blue-300 w-full shadow-md flex flex-col items-center justify-center px-6 py-4 relative">
      <div className="flex w-full relative">
        {/* Burger Icon */}
        <div className="flex lg:hidden cursor-pointer z-50">
          <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} onClick={toggleMenu}>
            <Bars3Icon width={30} height={30} className="text-white" />
          </motion.div>
        </div>

        {/* Sidebar Menu */}
        <AnimatePresence>
          {menuOpen && (
            <>
              {/* Menu Panel */}
              <motion.div
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={menuVariants}
                className="fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col"
              >
                {/* Menu Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200">
                  <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
                  <div className="flex items-center space-x-6">
                  <ArrowLeftEndOnRectangleIcon 
                    onClick={handleLogout}
                    width={24} height={24} className="text-gray-600 cursor-pointer" 
                    />
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={closeMenu}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <XMarkIcon width={24} height={24} className="text-gray-600 cursor-pointer" />
                  </motion.button>
                  </div>
                </div>

                {/* Menu Items */}
                <div className="flex-1 py-4">
                  <ul className="space-y-2">
                    {menuItems.map((item, index) => (
                      <SidebarLinks 
                        key={item.text}
                        Icon={item.Icon} 
                        text={item.text} 
                        onClick={closeMenu}
                        index={index}
                        variants={menuItemVariants}
                      />
                    ))}
                  </ul>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* Header Text */}
        <div className="max-w-2xl mx-auto flex flex-col items-center space-y-3 lg:space-y-8 mb-5">
          <h1 className="text-3xl lg:text-5xl font-medium text-white">Welcome Back</h1>
          <p className="text-md lg:text-base ml-5 text-white">
            This is your Financial Overview Report
          </p>
        </div>
      </div>

      {/* Filter + Date */}
      <div className="flex space-x-4">
        <div className="bg-[#3a3a3a] px-3 rounded-md will-change-transform hover:scale-105 transition-all duration-300 cursor-pointer">
          <select className="sm:h-10 sm:px-3 py-2 outline-none text-[15px] rounded-md px-3 bg-[#3a3a3a] text-[#a3a3a3] cursor-pointer">
            <option>All Accounts</option>
          </select>
        </div>

        <div className="flex">
          <button
            onClick={toggleCalendar}
            className="bg-[#3a3a3a] text-[#a3a3a3] px-4 py-2 rounded-md
            will-change-transform hover:scale-105 transition-all duration-200 cursor-pointer text-[15px]"
          >
            {format(range[0].startDate, "MMM dd")} - {format(range[0].endDate, "MMM dd, yyyy")}
          </button>

          {showCalendar && (
            <>
              <div className="fixed inset-0 z-40" onClick={applyDate}></div>

              {/* Desktop Calendar */}
              <div className="hidden xl:block absolute bg-[#3a3a3a] mt-2 shadow-lg rounded-md z-50">
                <DateRange
                  editableDateInputs
                  onChange={(item: any) => setRange([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={range}
                  months={2}
                  direction="horizontal"
                  className="text-sm"
                />
                <div className="flex space-x-4 px-4 py-2 border-t bg-gray-50">
                  <button onClick={resetDate} className="text-sm text-blue-500 hover:underline cursor-pointer">Reset</button>
                  <button onClick={applyDate} className="text-sm font-medium bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 cursor-pointer">Apply</button>
                </div>
              </div>

              {/* Mobile Calendar */}
              <div className="xl:hidden fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                bg-[#3a3a3a] rounded-md shadow-xl z-50 p-2 w-[90%] max-w-sm">
                <DateRange
                  editableDateInputs
                  onChange={(item: any) => setRange([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={range}
                  months={1}
                  direction="vertical"
                  className="text-sm"
                />
                <div className="flex justify-between px-4 py-2 border-t bg-gray-50">
                  <button onClick={resetDate} className="text-sm text-blue-500 hover:underline cursor-pointer">Reset</button>
                  <button onClick={applyDate} className="text-sm font-medium bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 cursor-pointer">Apply</button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header

// Sidebar Link Component
function SidebarLinks({ Icon, text, onClick, index, variants }: any) {
  return (
    <motion.li
      custom={index}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={variants}
      className="list-none"
    >
      <motion.div
        whileHover={{ scale: 1.02, backgroundColor: "#f3f4f6" }}
        whileTap={{ scale: 0.98 }}
        className="mx-3 rounded-lg cursor-pointer flex space-x-4 items-center p-4 transition-colors duration-200"
        onClick={onClick}
      >
        <Icon width={24} height={24} className="text-gray-700" />
        <span className="text-[16px] font-medium text-gray-800">{text}</span>
      </motion.div>
    </motion.li>
  )
}
