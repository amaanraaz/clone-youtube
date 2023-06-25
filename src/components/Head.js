import React, { useEffect, useState } from 'react';
import logo from "../assets/YoutubeLogo.png"
import { GiHamburgerMenu } from 'react-icons/gi';
import {FaUserAlt} from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/toggleSlice';
import { YOUTUBE_SEARCH_API, YOUTUBE_SEARCH_SUGGESTIONS_API } from '../utils/constants';
import { useNavigate } from 'react-router-dom';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery,setSearchQuery] = useState("");
  const [suggestions,setSuggestions] = useState([]);
  const [showSuggestions,setShowSuggestions] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const searchCache = useSelector((store)=>store.search);
  const toggleMenuHandler = ()=>{
      dispatch(toggleMenu());
  }
  useEffect(()=>{
    // console.log(searchQuery);
    const timer = setTimeout(()=>{
      if(searchCache[searchQuery]){
        setSuggestions(searchCache[searchQuery]);
      }
      else{
        getSearchSuggestion();
      }
    },100)

    return()=>{
      clearTimeout(timer);
    }
  },[searchQuery])

  const getSearchSuggestion = async()=>{
    const data = await fetch(YOUTUBE_SEARCH_API+searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // update cache
    dispatch(cacheResults({
      [searchQuery]:json[1]
    }))
  }

  // const handleSearch = (s)=>{
  //   console.log(s);
  // }

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
          {showSuggestions && suggestions.length>0 && <div className='bg-white fixed w-96 pt-2 pb-4 px-1 rounded-xl border-gray-200 shadow-2xl mt-1'>
            <ul>
            {
              suggestions.map((s)=>(
                 <li key={s} className='flex cursor-default items-center mt-1 hover:bg-slate-200 font-semibold' onMouseDown={()=>(navigate('/search?search_query='+s))}><BsSearch className='mx-2'/> {s}</li>
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