import React, { useRef } from 'react'
import dayjs from 'dayjs'

import ContentWrapper from '../contentWrapper/ContentWrapper'
import {Img} from '../lazyLoadinging/img'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
 import posternofound from '../../assets/no-poster.png'
import CircleRating from '../circleRating/CircleRating'
import Genres from '../genres/Genres'

const Carousel = ({data,loading,endpoint, title }) => {
  const carouselContainer = useRef()
  const {url} = useSelector((state) => state.home)
  const navigate = useNavigate()
   
  
 const navigation = (dir)=>{
     const container = carouselContainer.current;
     const scrollAmount = dir === 'left' ? 
     container.scrollLeft - (container.offsetWidth + 20) 
     : container.scrollLeft + (container.offsetWidth + 20)

  container.scrollTo({
    left: scrollAmount,
    behavior : "smooth"
  }) 
 }



 const skItem = ()=>{
    return (
        <div className="w-[125px]  md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] flex-shrink-0 ">
            <div className="rounded-[12px] w-full aspect-[1/1.5] mb-[30px] skeleton">
                <div className="flex flex-col">
                    <div className="w-full h-[20px] mb-[10px] skeleton">                        
                    </div>
                    <div className="w-[75%] h-[20px] skeleton">                        
                    </div>
                </div>
            </div>
        </div>
    )
 }



  return (
    <div  className='mb-[50px]'>
      <ContentWrapper className='relative '>
      {
        title && <div className='carouselTitle '>
          {title}
        </div>
      }
     <i className="ri-arrow-left-line text-[30px] text-black absolute top-[44%] translate-y-[-50%] cursor-pointer opacity-[0.5] z-[1] hidden md:block hover:opacity-[0.8] left-[30px] bg-white rounded-[50%]" 
     onClick={()=> navigation('left')}></i> 
     <i className="ri-arrow-right-line text-[30px] text-black absolute top-[44%] translate-y-[-50%] cursor-pointer opacity-[0.5] z-[1] hidden md:block hover:opacity-[0.8] right-[30px] bg-white rounded-[50%]"  
     onClick={()=> navigation('right')}></i>      
     {!loading ? (<div ref={carouselContainer} className='flex  gap-[10px]  mx-[-20px] overflow-y-hidden overflow-auto  scrollbar-hide
      md:gap-[20px] md:overflow-hidden md:m-0 md:p-0  '>
          {data?.map((item)=> {
            const posterUrl = item.poster_path ? url.poster + item.poster_path : posternofound
            
            return (
                <div onClick={()=> navigate(`/${item.media_type || endpoint}/${item.id}`)}
                key={item.id} 
                className='w-[200px]  cursor-pointer md:w-[calc(25%-15px)] lg:w-[calc(20%-16px)] flex-shrink-0   '>
                  <div className="relative w-full  bg-cover bg-center mb-[30px] flex items-end justify-between p-[10px] aspect-[1/1.5] ">
                    <Img src={posterUrl} className='w-full h-full object-cover object-center rounded-[12px] circle' />
                    <CircleRating rating={item.vote_average.toFixed(1)} className='absolute left-0 w-[50px]'  />
                    <Genres data={item?.genre_ids.slice(0,2)} className='hidden absolute right-0 md:flex  justify-end '/>
                  </div>
                  <div className="text-white flex flex-col   ">
                    <span className="text-[16px] mb-[10px] 
                    md:text-[20px] text-white">
                        {item.title || item.name}
                    </span>
                    <span className="text-[14px] opacity-[0.5]">
                        {dayjs(item?.release_date).format("MMM D, YYYY")}
                    </span>
                  </div>
                 
                </div>
            )
          })}
     </div>) : (<div className="flex gap-[10px] overflow-y-hidden mx-[-20px] p-[0_20px] md:gap-[20px] md:overflow-hidden 
     md:m-0 md:p-0  ">
                {skItem()}
                {skItem()}
                {skItem()}
                {skItem()}
                {skItem()}
               
        </div>
        ) }
     
    </ContentWrapper>        
    </div>
  )
}

export default Carousel