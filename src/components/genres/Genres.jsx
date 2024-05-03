import React from 'react'
import { useSelector } from 'react-redux';



const Genres = ({data,className}) => {
  const {genres}= useSelector((state)=> state.home)
  
  return (
    <div className={className}>

    <div className='flex gap-[5px] flex-wrap justify-end '>
        {data?.map((g)=> {
            if(!genres[g]?.name) return;
            return(
                <div key={g} className='bg-pink p-[3px_5px] text-[12px] rounded-[4px] text-white whitespace-nowrap'>
                    {genres[g]?.name}
                </div>
            )
        })}
        </div>
    </div>
  )
}

export default Genres;