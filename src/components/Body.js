import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { openSideBar } from '../utils/toggleSlice';
import Head from './Head';

const Body = () => {
  const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(openSideBar());
    },[])
  return (
    <div>
      <Head/>
    <div className='flex'>
        <Sidebar/>
        <Outlet/>
    </div>
    </div>
  )
}

export default Body