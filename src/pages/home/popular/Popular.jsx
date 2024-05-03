import React, { useState } from 'react'
import {ContentWrapper} from '../../index'
import { SwitchTabs } from '../../../components'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const Popular = () => {
    const [endpoint,SetEndpoint] = useState('movie')


     const {data ,loading } = useFetch(`/${endpoint}/popular`)
     
   const onTabChange = (tab)=>{
     SetEndpoint(tab === 'Movie' ? 'movie' : 'tv')
   }

  return (
    <div className='relative md:my-[70px] '>
      <ContentWrapper className='flex items-center justify-between mb-[20px]'>
        <span className="text-[24px] text-white font-normal"> What's Popular </span>
        <SwitchTabs data={['Movie', 'Tv Shows']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} 
      endpoint={endpoint} />
    </div>
  )
}

export default Popular