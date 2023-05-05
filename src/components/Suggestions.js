import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeAll } from '../utils/toggleSlice';
import { YOUTUBE_SEARCH_SUGGESTIONS_API } from '../utils/constants';

const Suggestions = () => {
  const dispatch = useDispatch();
    //usesearchparams is used for getting details of queries of url which cant be done by useparams as it searches after / only
    const [params] = useSearchParams();
    const [videos,setVideos] = useState([]);
    useEffect(()=>{
        dispatch(closeAll());
    },[]);
    useEffect(()=>{
      getSuggestions();
    },[])

    const getSuggestions = async()=>{
      const data = await fetch(YOUTUBE_SEARCH_SUGGESTIONS_API+params.get("search_query"));
      const json = await data.json();
      setVideos(json.items)
      console.log(json);
    }

  return (
    <div>Suggestions</div>
  )
}

export default Suggestions