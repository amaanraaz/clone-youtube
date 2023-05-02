import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { openSideBar } from '../utils/toggleSlice';

const Body = () => {
  const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(openSideBar());
    },[])
  return (
    <div className='flex'>
        <Sidebar/>
        <Outlet />
    </div>
  )
}

export default Body