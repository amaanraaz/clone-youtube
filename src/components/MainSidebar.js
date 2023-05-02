import React, { useEffect } from 'react'
import { FaHome } from 'react-icons/fa'
import { MdExplore, MdSubscriptions, MdVideoLibrary } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { closeMenu } from '../utils/toggleSlice'

const MainSidebar = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(closeMenu());
    },[])

    return (
        
    <div className='flex mt-10'>
        <ul>
          <Link to={"/"}>
          <div className='flex flex-col items-center cursor-pointer'>
            <FaHome size={30}/>
            <li className='mx-2 font-mono'>Home</li> 
          </div>
          </Link>
          <div className='flex flex-col items-center mt-3'>
            <MdExplore size={30} />
            <li className='mx-2 font-mono'>Explore</li> 
          </div>
          <div className='flex flex-col items-center mt-3'>
            <MdSubscriptions size={30} />
            <li className='mx-2 font-mono'>Subscription</li> 
          </div>
          <div className='flex flex-col items-center mt-3'>
            <MdVideoLibrary size={30} />
            <li className='mx-2 font-mono'>Library</li> 
          </div>
        </ul>
    </div>
  )
}

export default MainSidebar