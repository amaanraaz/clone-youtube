import React, { useEffect, useState } from 'react';
import logo from "../assets/YoutubeLogo.png"
import { GiHamburgerMenu } from 'react-icons/gi';
import {FaUserAlt} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/toggleSlice';
import { YOUTUBE_SEARCH_API } from '../utils/constants';

const Head = () => {
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const toggleMenuHandler = ()=>{
      dispatch(toggleMenu());
  }
  useEffect(()=>{
    // console.log(searchQuery);
    const timer = setTimeout(()=>{
      getSearchSuggestion();
    },100)

    return()=>{
      clearTimeout(timer);
    }
  },[searchQuery])

  const getSearchSuggestion = async()=>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    console.log(searchQuery,json[1]);
  }

  return (
    <div className='sticky top-0 bg-white flex justify-between p-3 content-center shadow-xl'>
        <div className='flex justify-between content-center'>
          <GiHamburgerMenu className='mt-2 cursor-pointer' onClick={toggleMenuHandler} size={25}/> 
          <a href='/'><img alt='logo' src={logo} className='h-8 mx-4 cursor-pointer' /></a>
        </div>
        <div>
          <input type='text' className='w-96 border-2 border-gray-400 rounded-l-2xl p-[2px]' placeholder='Search' value={searchQuery} 
          onChange={(e)=>setSearchQuery(e.target.value)} 
          onFocus={()=>setShowSuggestions(true)} 
          onBlur={()=>setShowSuggestions(false)}
          />
          <button className='border-2 border-gray-400 rounded-r-2xl pt-[4.5px] pb-[7px] pr-4 border-l-0 bg-slate-300'><BsSearch className='ml-2'/></button>
          {showSuggestions && suggestions.length>0 && <div className='bg-white fixed w-96 pt-2 pb-4 px-4 rounded-xl'>
            <ul>
            {
              suggestions.map((s)=>(
                <li className='flex items-center '><BsSearch className='mx-2'/> {s}</li>
              ))
            }
            </ul>
        </div>}
        </div>
        <div>
          <FaUserAlt />
        </div>
    </div>
  )
}

export default Head