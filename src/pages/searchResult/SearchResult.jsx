import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import { fetchDataFromApi } from '../../utils/api'
import ContentWrapper from '../../components/contentWrapper/ContentWrapper'
import MovieCard from '../../components/movieCard/MovieCard'
import { useParams } from 'react-router-dom'
import Spinner from '../../components/spinner/Spinner'
const SearchResult = () => {
      
     const [data, setData] = useState(null)
     const [pageNum, setPageNum] = useState(1)
     const [Loading, setLoading] = useState(false)
     const {query} = useParams()
  
const fetchInitialData = ()=> { 
   setLoading(true)
   fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
   .then((res)=> {
    setData(res)
    setPageNum((prev) => prev + 1 )
    setLoading(false)
   })
}
 
const fetchNextPageData = ()=>{
  fetchDataFromApi(`/search/multi?query=${query}&page=${pageNum}`)
  .then((res)=> {
    
    if(data?.results){
      setData({
        ...data, results:[...data?.results, ...res?.results]
      })
    } else {
      setData(res)
    }
    setPageNum((prev) => prev + 1 )


  })
}

useEffect(()=>{
  setPageNum(1)
  fetchInitialData()
  

},[query])


  return (
    <div className='min-h-[700px] pt-[100px] text-white'>
      {Loading && <Spinner initial={true}/>}
      {!Loading && (
        <ContentWrapper >
         {data?.results.length > 0 ? (
          <>
          <div className="pagetitle">
            {`Search ${data.total_results > 1 ? "results" : 
            "result"} of '${query}'`}
          </div>
          <InfiniteScroll className='content'
          dataLength={data?.results.length || []}
          next={fetchNextPageData}
          hasMore={pageNum <= data?.total_pages}
          loader={<Spinner />}
          >
            {data?.results.map((item, index)=> {
                  if(item.media_type === "person") return;
                  return (
                    <MovieCard data={item} key={index} fromSearch={true} />
                  )

            })}

          </InfiniteScroll>
          </>

         ) : (
          <span className='resultNotFoun'>
           Sorry, Results not Found!  
           </span>
         )}  

        </ContentWrapper>
      )}
      
    </div>
  )
}

export default SearchResult