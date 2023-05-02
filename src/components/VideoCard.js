import React from 'react'

const VideoCard = ({info}) => {
    const {snippet,statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;
    const {viewCount} = statistics;

    const totalView = (number)=>{
        if (number >= 1000000) {
            return (Math.floor(number/1000000)) + 'M';
          } else if (number >= 1000) {
            return (Math.floor(number/1000))+ 'K';
          } else {
            return number;
          }
    }

  return (
    <div className='w-64 p-1 shadow-xl my-2 flex flex-col'>
        <img src={thumbnails.medium.url} alt="thumbnail" />
        <ul>
            <li className='font-semibold line-clamp-2 font-mono text-gray-900'>{title}</li>
            <li className='font-mono text-sm text-gray-600'>{channelTitle}</li>
            <li className='font-mono text-sm text-gray-600'>{totalView(viewCount)} views</li>
        </ul>
    </div>
  )
}

export default VideoCard