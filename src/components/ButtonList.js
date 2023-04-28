import React from 'react'

const ButtonList = () => {
  return (
    <div>
        <ul className='flex'>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono'>All</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono'>Under 10 mins</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono'>Music</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono'>Mixes</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono'>Live</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono'>Bollywood Music</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono'>Indian Pop Music</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono'>Podcasts</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono'>Courses</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono'>Watched</li>
        </ul>
    </div>
  )
}

export default ButtonList