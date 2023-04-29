import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/toggleSlice';
import { useSearchParams } from 'react-router-dom';

const WatchPage = () => {
    const dispatch = useDispatch();
    //usesearchparams is used for getting details of queries of url which cant be done by useparams as it searches after / only
    const [params] = useSearchParams();
    useEffect(()=>{
        dispatch(closeMenu());
    },[])
  return (
    <div className='px-5'>
        <iframe width="850" height="450" src={"https://www.youtube.com/embed/" + params.get("v")+"?autoplay=1"}
        title="YouTube video player" frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowFullScreen></iframe>
    </div>
  )
}

export default WatchPage