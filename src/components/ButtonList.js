import React from 'react'

const ButtonList = () => {
  return (
    <div className='fixed mt-0 ml-24'>
        <ul className='flex'>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono text-sm'>All</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono text-sm'>Under 10 mins</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono text-sm'>Music</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono text-sm'>Mixes</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono text-sm'>Live</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono text-sm'>Bollywood Music</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono text-sm'>Indian Pop Music</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono text-sm'>Podcasts</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono text-sm'>Courses</li>
            <li className='py-1 px-2 bg-slate-300 rounded-lg m-1 cursor-pointer text-stone-600 font-mono text-sm'>Watched</li>
        </ul>
    </div>
  )
}

export default ButtonList