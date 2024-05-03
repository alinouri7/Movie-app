import React, { useState } from 'react'
import {ContentWrapper} from '../../index'
import { SwitchTabs } from '../../../components'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const TopRated = () => {
    const [endpoint,SetEndpoint] = useState('movie')


     const {data ,loading } = useFetch(`/${endpoint}/top_rated`)
     
   const onTabChange = (tab)=>{
     SetEndpoint(tab === 'Movie' ? 'movie' : 'tv')
   }

  return (
    <div className='relative md:my-[70px]'>
      <ContentWrapper className='flex items-center justify-between mb-[20px]'>
        <span className="text-[24px] text-white font-normal">Top Rated </span>
        <SwitchTabs data={['Movie', 'Tv Shows']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel endpoint={endpoint} data={data?.results} loading={loading}  />
    </div>
  )
}

export default TopRated