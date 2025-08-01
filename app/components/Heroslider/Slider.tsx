import { ArrowPathIcon, BanknotesIcon, BoldIcon, CalendarIcon, ChartPieIcon, DevicePhoneMobileIcon, LockClosedIcon, WalletIcon } from '@heroicons/react/24/outline'
import React from 'react'
import Marquee from "react-fast-marquee";


const slider =[
    {icon: <ArrowPathIcon width={40} height={40} color='blue'/>, title: 'Multy-Account Sync', description: "Connect and manage all your bank accounts."},
    {icon: <WalletIcon width={40} height={40} color='blue'/>, title: "Expense Tracking",description:"Automatically categorize and track every transaction."},
    {icon: <CalendarIcon width={40} height={40} color='blue'/>, title: "Bill Reminders", description: "Never miss a payment with timely reminders."},
    {icon: <BoldIcon width={40} height={40} color='blue'/>, title: "Instant Insights", description: "Get actionable tips to improve your finances."},
    {icon: <DevicePhoneMobileIcon width={40} height={40} color='blue'/>, title: "Mobile Access", description: "Manage your money on the go, anytime."},
    {icon: <ChartPieIcon width={40} height={40} color='blue'/>, title: "Real-Time Analytics", description: "Visualize your spending and income instantly."},
    {icon: <BanknotesIcon width={40} height={40} color='blue'/>, title: "Smart Budgeting", description: "Set, track, and optimize your budgets with ease."},
    {icon: <LockClosedIcon width={40} height={40} color='blue'/>, title: "Bank-Grade Security", description: "Your data is encrypted and protected at all times."},
]

const Slider = () => {
  return (
    <div id='slider' className="scroll-mt-[100px] w-full mt-10">
      <div className="text-center mb-8">
        <h1 className="text-3xl uppercase tracking-wide font-bold text-[#174773]">
          Product Highlight
        </h1>
      </div>
      <Marquee speed={60} gradient={false} pauseOnClick>
        <div className="inline-flex space-x-10 px-5">
          {slider.map((item, index) => (
            <div
              key={index}
              className="min-w-[260px] max-w-[280px] flex flex-col items-center space-y-8 bg-white rounded-lg p-4 shadow text-center"
            >
              {item.icon}
              <h1 className='font-bold text-lg text-[#174773]'>
                {item.title}
              </h1>
              <p className='text-[#174773] text-sm opacity-80 break-words text-center w-full whitespace-normal'>
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Marquee>
 
    </div>
  );
};

export default Slider;
