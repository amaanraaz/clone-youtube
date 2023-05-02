import React from 'react';
import logo from "../assets/YoutubeLogo.png"
import { GiHamburgerMenu } from 'react-icons/gi';
import {FaUserAlt} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/toggleSlice';

const Head = () => {

  const dispatch = useDispatch();
  const toggleMenuHandler = ()=>{
      dispatch(toggleMenu());
  }

  return (
    <div className='sticky top-0 flex justify-between p-3 content-center shadow-xl '>
        <div className='flex justify-between content-center'>
          <GiHamburgerMenu className='mt-2 cursor-pointer' onClick={toggleMenuHandler} size={25}/> 
          <a href='/'><img alt='logo' src={logo} className='h-8 mx-4 cursor-pointer' /></a>
        </div>
        <div>
          <input type='text' className='w-96 border-2 border-gray-400 rounded-l-2xl p-[2px]' placeholder='Search' />
          <button className='border-2 border-gray-400 rounded-r-2xl pt-[4.5px] pb-[7px] pr-4 border-l-0 bg-slate-300'><BsSearch className='ml-2'/></button>
        </div>
        <div>
          <FaUserAlt />
        </div>
    </div>
  )
}

export default Head