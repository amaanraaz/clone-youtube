import React from 'react';
import { FaHome } from 'react-icons/fa';
import {MdExplore,MdSubscriptions,MdVideoLibrary} from 'react-icons/md'
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const isMenuOpen = useSelector(store=>store.toggle.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className='w-44 shadow-xl p-3 cursor-pointer'>
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
        <div className='border-black border-b-[1.5px] w-32 h-1 my-2'></div>
        <h1 className=' font-mono'>Explore</h1>
        <ul>
          <li className='mx-2 font-mono'>Trending</li> 
          <li className='mx-2 font-mono'>Shopping</li> 
          <li className='mx-2 font-mono'>Music</li> 
          <li className='mx-2 font-mono'>Movies&Shows</li> 
          <li className='mx-2 font-mono'>Live</li> 
          <li className='mx-2 font-mono'>Gaming</li> 
          <li className='mx-2 font-mono'>News</li> 
          <li className='mx-2 font-mono'>Sports</li> 
          <li className='mx-2 font-mono'>Learning</li> 
        </ul>
    </div>
    
  )
}

export default Sidebar