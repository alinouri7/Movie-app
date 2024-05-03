import React, { useState } from 'react'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper'
import useFetch from '../../../hooks/useFetch'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {Img} from '../../../components/lazyLoadinging/img'
import PageNotFound from '../../404/PageNotFound'
import dayjs from 'dayjs'
import Genres from '../../../components/genres/Genres'
import CircleRating from '../../../components/circleRating/CircleRating'
import { PlayIcon } from '../PlayIcon'
import VideoPopup from '../../../components/videoPopup/VideoPopup'

const DetailsBanner = ({video, crew}) => {

  const [show, setShow] = useState(false)
  const [videoId, setVideoId] = useState(null)

  const {mediaType, id} = useParams()
  const {data, loading} = useFetch(`/${mediaType}/${id}`)
  console.log(data);
     
    const {url} = useSelector((state)=> state.home)

    const _genres = data?.genres?.map((g)=> g.id)

    const director = crew?.filter((f)=> f.job === 'Director')
    const writer = crew?.filter((f)=> f.job === "Screenplay" || f.job === "story" || f.job === "Writer")
    
    const toHoursAndMinutes = (totalMinutes)=>{
     const hours = Math.floor(totalMinutes / 60)
     const minutes = Math.floor(totalMinutes % 60)
     return `${hours}h${minutes > 0 ? `${minutes}m` : ""}`;
    }
 
    const playIcon = `cursor-pointer transition-all 
    duration-[0.7s] ease-in-out hover:text-pink`




  return (
    <div className=' w-full bg-black  pt-[100px] mb-[50px] 
     md:mb-0 md:pt-[120px] min-h-[700px] 
    '>
       {!loading ? (
        <>
         {!!data && ( 
          <React.Fragment>
        <div className=''> 
          <div className="w-full h-full absolute top-0 left-0 opacity-[0.1] overflow-hidden ">
            <Img src={url.backdrop + data?.backdrop_path} className='w-full h-full object-cover object-center'/>
          </div>
        </div>
             <div className='w-full h-[250px] bg-bg-gradient absolute bottom-0 left-0'>

             </div>
             <ContentWrapper >
              <div className="flex relative  flex-col gap-[25px] md:gap-[50px] md:flex-row">
                <div className="flex-shrink-0">
                  {
                    data.poster_path ? (
                      <Img src={url.backdrop + data.poster_path} className='w-full block rounded-[12px] md:max-w-[350px]' />
                    ) :( <Img src={PageNotFound} className='w-full block rounded-[12px] md:max-w-[350px]' />)
                  }
                </div>
                <div className="text-white">
                  <div className="text-[28px] leading-[40px] md:text-[34px] md:leading-[44px]">
                    {`${data.name || data.title} (${dayjs(data?.release_date).format("YYYY")})`}
                  </div>
                  <div className='text-[16px] leading-[24px] mb-[15px] italic opacity-[0.5] md:text-[20px] md:leading-[28px]'>
                    {data.tagline}
                  </div>
                     <Genres data={_genres} className=' flex flex-row flex-wrap justify-start mb-[25px]'/>
                         <div className="flex justify-start items-center w-full gap-4 mt-3">
                          <CircleRating className='max-w-[60px] '  rating={data?.vote_average.toFixed(1)}/>
                          <div className={`playbtn  text-white flex justify-start  items-center 
                          gap-[10px] ${playIcon}`} onClick={()=> {
                            setShow(true)
                            setVideoId(video.key)
                          }}>
                            <PlayIcon />
                            <span>
                              Watch Trailer
                            </span>
                          </div>
                            </div>

                            <div className="flex flex-col text-white mt-2">
                              <div className='text-[24px] mb-[10px]'>
                                Overview
                              </div>
                              <div className='leading-[24px] md:pr-[100px]'>
                                {data.overview}
                              </div>
                         </div>  
                         <div className="info  text-white flex mt-4 gap-4 border-b border-black-rgba pb-2">
                           {data.status && <div className='infoItem flex flex-col'>
                              <span className="text-[20px] transition-all duration-[0.7s] ease-in-out ">
                                Status : {''}
                              </span>
                              <span className="text-white opacity-[0.5] ">
                                {data.status}
                              </span>
                            </div>}  
                            {data.release_date && <div className='infoItem flex flex-col'>
                              <span className="text-[20px] transition-all duration-[0.7s] ease-in-out">
                                Release Date: {''}
                              </span>
                              <span className="text-white opacity-[0.5] ">
                                {dayjs(data.release_date).format("MMM D, YYYY") }
                              </span>
                            </div>}  
                            {data.runtime && <div className='infoItem flex flex-col'>
                              <span className="text-[20px] transition-all duration-[0.7s] ease-in-out">
                                Runtime: {''}
                              </span>
                              <span className="text-white opacity-[0.5] ">
                                {toHoursAndMinutes(data.runtime)}
                          
                              </span>
                            </div>}  
                        </div>             
                        {director?.length > 0 && (
                          <div className='border-b-[1px] border-black-rgba flex py-[15px]'>
                            <span className='text-white font-[600] opacity-[1]'>
                              Director : { " "}

                            </span>
                            <span className="text">
                              {
                                director?.map((d,i)=> (
                                  <span className='text-white opacity-[0.5] ml-2' key={i}>
                                    {d.name}
                                    {director?.length - 1 !== i && ", "}
                                    </span>
                                ))
                              }
                            </span>
                          </div>
                        )}
                         {writer?.length > 0 && (
                          <div className='border-b-[1px] border-black-rgba flex py-[15px]'>
                            <span className='text-white font-[600] opacity-[1]'>
                              Writer : { " "}

                            </span>
                            <span className="text">
                              {
                                writer?.map((d,i)=> (
                                  <span className='text-white opacity-[0.5] ml-2' key={i}>
                                    {d.name}
                                    {director?.length - 1 !== i && ", "}
                                    </span>
                                ))
                              }
                            </span>
                          </div>
                        )}
                         {data?.created_by?.length > 0 && (
                          <div className='border-b-[1px] border-black-rgba flex py-[15px]'>
                            <span className='text-white font-[600] opacity-[1]'>
                              Creator:{" "}
                            </span>
                            <span className="text">
                              {
                               data?.created_by?.map((d,i)=> (
                                  <span className='text-white opacity-[0.5] ml-2' key={i}>
                                    {d.name}
                                    {director?.length - 1 !== i && ", "}
                                    </span>
                                ))
                              }
                            </span>
                          </div>
                        )}
                </div>
              </div>
              <VideoPopup show={show}
               setShow={setShow}
                videoId={videoId}
                setVideoId={setVideoId}
               />
             </ContentWrapper>
          </React.Fragment>
         )}
        </>
       ) : (
        <div className='detailsBannerskeleton'>
          <ContentWrapper>
           <div className='left skeleton'></div>
           <div className='right'>
            <div className='row skeleton'></div>
            <div className='row skeleton'></div>
            <div className='row skeleton'></div>
            <div className='row skeleton'></div>
            <div className='row skeleton'></div>
            <div className='row skeleton'></div>
            <div className='row skeleton'></div>
           </div>
          </ContentWrapper>
        </div>
       )}
    </div>
  )
}

export default DetailsBanner
