import 
{ ArrowLeftEndOnRectangleIcon,
  BanknotesIcon,
  BuildingLibraryIcon,
  Cog6ToothIcon,
  CreditCardIcon,
  EllipsisVerticalIcon,
  QueueListIcon
} from '@heroicons/react/24/outline'
import React from 'react'

const DashNavigation = () => {
  return (
    <div className='hidden lg:flex flex-col h-full min-w-[200px] max-w-[300px] w-full pt-3 bg-[#1a1a1a] text-white border border-white '>
      <div className='flex justify-between items-center cursor-pointer px-3'>
        <div className='flex items-center space-x-4 '>
         <img 
          className='rounded-md'
          width={40}
          height={40}
          src="/images/rlogo.jpg" 
              />
         <h1 className='hidden xl:block text-[25px] font-bold'>Transaction</h1>
        </div>
        <ArrowLeftEndOnRectangleIcon 
        width={40}
        height={40}
        />
      </div>
      <div className='flex-grow mt-8 border-b border-white'>
        <ul>
          <SidebarLinks Icon={BuildingLibraryIcon} text={"Overview"}/>
          <SidebarLinks Icon={CreditCardIcon} text={"Transactions"}/>
          <SidebarLinks Icon={QueueListIcon} text={"Acounts"}/>
          <SidebarLinks Icon={BanknotesIcon} text={"Categories"}/>
          <SidebarLinks Icon={CreditCardIcon} text={"Stocks"}/>
          <SidebarLinks Icon={Cog6ToothIcon} text={"Settings"}/>
        </ul>
      </div>
      <div className='flex justify-between items-center p-2 border'>
        <img 
          className='cursor-pointer'
          width={40}
          height={40}
          src="/images/user.png" 
        />
        <div className='flex items-center space-x-5'>
          <div>
          <h1 className='text-[16px]'>Guest   12345678</h1>
          <p className='text-[12px]'>Guest123@gmail.com</p>
          </div>
          <EllipsisVerticalIcon 
           className='cursor-pointer'
           width={30} 
           height={30}
         />
        </div>
      </div>
    </div>
  )
}

export default DashNavigation

function SidebarLinks({Icon, text}:any) {
    return(
        <div>
          <li className='flex space-x-3 items-center p-4 hover:bg-[#F59EOB]'>
            <Icon width={38} height={38}/>
            <span className='text-[16px] font-semibold'>{text}</span>
          </li>
        </div>
    )
}
