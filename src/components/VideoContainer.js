import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [videos,setVideos] = useState([]);
  useEffect(()=>{
    getVideos();
  },[]);
  const getVideos = async ()=>{
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json = await data.json();
    console.log(json.items);
    setVideos(json.items);
  }

  return (
    <div className='flex flex-wrap p-2'>
      {videos.map((video)=>[
        <VideoCard info = {video} key={video.id}/>
      ])}
      
    </div>
  )
}

export default VideoContainer