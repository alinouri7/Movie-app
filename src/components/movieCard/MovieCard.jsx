import React from 'react'
import { Img } from '../lazyLoadinging/img'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import notFound from '../../assets/no-poster.png'
import CircleRating from '../circleRating/CircleRating'
import Genres from '../genres/Genres'
import dayjs from 'dayjs'



const MovieCard = ({data, fromSearch, mediaType}) => {
  
  const {url} = useSelector((state) => state.home)
  const navigate = useNavigate();
  const posterUrl = data?.poster_path ? 
  url?.poster + data?.poster_path 
  : notFound 
   
  return (
    <div className='w-[calc(50%-5px)] mb-[25px] cursor-pointer flex-shrink-0 md:w-[calc(25%-15px)] 
    lg:w-[calc20%-16px]' onClick={()=>navigate(`/${data?.media_type || mediaType}/${data?.id}`)}>
        <div className='relative w-full aspect-[1/1.5] bg-cover bg-center mb-[30px] flex items-end 
        justify-between p-[10px] transition-all ease-in duration-[0.5s] hover:opacity-[0.5]
        '>
            <Img src={posterUrl}/>
    {!fromSearch && 
   <React.Fragment>
     <CircleRating rating={data?.vote_average.toFixed(1)} className='absolute left-0 bottom-0 w-[45px]' />
     <Genres data={data?.genres_ids?.slice(0,2)} />
   </React.Fragment>
       }
        </div>
        <div className='text-white flex flex-col'>
            <span className='text-[16px] mb-[10px] leading-[24px] md:text-[20px] '>{data?.title || data?.name}</span>
            <span className=' text-[14px] opacity-[0.5]'>
            {dayjs(data?.release_date).format("MMM D, YYYY")}
            </span>
        </div>
    </div>
  )
}

export default MovieCard;