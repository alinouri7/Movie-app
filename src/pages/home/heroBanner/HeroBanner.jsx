import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
 import useFetch from '../../../hooks/useFetch'
import {  useSelector } from 'react-redux'
import {Img} from '../../../components/lazyLoadinging/img'
import ContentWrapper from '../../../components/contentWrapper/ContentWrapper' 

const HeroBanner = () => {
const [background, setBackground] = useState('')
const [query,setQuery] = useState("")
const navigate = useNavigate()
const {url} = useSelector((state)=> state.home)
const {data, loading} = useFetch("/movie/upcoming")


useEffect(()=>{
  const bg = url.backdrop + data?.results[Math.floor(Math.random() 
    * 20)]?.backdrop_path
  setBackground(bg)
},[data])

 const searchQueryHandler = (e)=>{
  e.preventDefault()
  if(e.key === "Enter" && query.length > 0 ){
    navigate(`/search/${query}`)
    
  } 
    
    
  
 }
  return (
    <div className='w-full h-[450px] bg-gradient flex items-center relative lg:h-[700px]'>
     {!loading && <div className="w-full h-full absolute top-0 left-0 opacity-[0.5] overflow-hidden ">
      <Img src={background} className='object-cover object-center '/>
     </div>}
       {/* <div className="opacity-layer w-full h-[250px] absolute left-0 bottom-0 bg-white">
       </div> */}
      <ContentWrapper>
      <div>
        <div className="flex flex-col items-center text-white text-center relative max-w-[800px] ">
          <span className="text-[50px] font-[700] mb-[10px] md:mb-0 md:text-[90px] ">
            Welcome
          </span>
          <span className="text-[18px] mb-[40px] md:text-[24px] ">
            Millions of movies, TV shows and people to discover
             Explore Now.
          </span>
          <div  className="flex items-center w-full ">
            <input className='w-[calc(100%-100px)]  h-[50px] bg-white outline-0 border-0 rounded-[30px_0_0_30px] p-[0_15px] 
            text-[14px] md:w-[calc(100%- 150px)] text-black
            md:h-[60px] md-text-[20px] md:p-[0_30px] ' type="text" onKeyUp={searchQueryHandler}
            onChange={(e)=> setQuery(e.target.value)}
            value={query}
             placeholder='Search for movie or tv shows...'
             />
            <button onClick={()=> navigate(`/search/${query}`)} className='w-[100px] h-[50px] gradientimg md:h-[60px] text-white outline-0 border-0 rounded-[0_30px_30px_0] 
             text-[16px] cursor-pointer md:w-[150px] font-[18px] 
            '>Search</button>
          </div>
        </div>
      </div>
             </ContentWrapper>
    </div>
  )
}

export default HeroBanner;
