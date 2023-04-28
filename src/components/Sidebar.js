import React from 'react';
import { FaHome } from 'react-icons/fa';
import {MdExplore,MdSubscriptions,MdVideoLibrary} from 'react-icons/md'

const Sidebar = () => {
  return (
    <div className='w-40 shadow-xl p-3 cursor-pointer'>
        <ul>
          <div className='flex items-center'>
            <FaHome />
            <li className='mx-2 font-mono'>Home</li> 
          </div>
          <div className='flex items-center'>
            <MdExplore />
            <li className='mx-2 font-mono'>Explore</li> 
          </div>
          <div className='flex items-center'>
            <MdSubscriptions />
            <li className='mx-2 font-mono'>Subscription</li> 
          </div>
          <div className='flex items-center'>
            <MdVideoLibrary />
            <li className='mx-2 font-mono'>Library</li> 
          </div>
        </ul>
    </div>
    
  )
}

export default Sidebar