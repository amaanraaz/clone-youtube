import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[]);
  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    setVideos(json.items);
  }

  return (
    <div className='flex flex-wrap p-2 pl-20 ml-28 mt-5'>
      {
        videos.map((video)=>(
        <Link to={"/watch?v=" + video.id} key={video.id}>
          <VideoCard info = {video} />
        </Link>
      ))}
      
    </div>
  )
}

export default VideoContainer