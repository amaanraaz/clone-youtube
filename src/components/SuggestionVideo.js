import React from 'react'

const SuggestionVideo = ({data}) => {
    if(data.id.videoId===undefined){
        return(
        <div className='ml-32 m-2 p-1 flex h-32'>
        <img src={data.snippet.thumbnails.medium.url} alt="img"  className='rounded-full'/>
        <div className='ml-1'>
        <h1 className='font-mono text-xl font-bold'>{data.snippet.title}</h1>
        <h1 className='mt-2 font-mono text-lg text-gray-600'>{data.snippet.channelTitle}</h1>
        <h1 className='mt-1 font-mono text-lg text-gray-600'>{data.snippet.description}</h1>
        </div>
    </div>)
    }
    else{
  return (
    <div className='ml-32 m-2 p-3 shadow-xl flex  '>
        <img src={data.snippet.thumbnails.medium.url} alt="img" />
        <div className='ml-3'>
        <h1 className='font-mono text-xl font-bold'>{data.snippet.title}</h1>
        <h1 className='mt-5 font-mono text-lg text-gray-600'>{data.snippet.channelTitle}</h1>
        <h1 className='mt-3 font-mono text-lg text-gray-600'>{data.snippet.description}</h1>
        </div>
    </div>
  )
    }
}

export default SuggestionVideo