import React, { useState } from 'react'
import {ContentWrapper} from '../../index'
import { SwitchTabs } from '../../../components'
import useFetch from '../../../hooks/useFetch'
import Carousel from '../../../components/carousel/Carousel'


const Trending = () => {
    const [endpoint,SetEndpoint] = useState('day')


     const {data ,loading } = useFetch(`/trending/all/${endpoint}`)
      
   const onTabChange = (tab)=>{
     SetEndpoint(tab === 'Day' ? 'day' : 'week')



   }

  return (
    <div className='relative md:my-[70px] overflow-x'>
      <ContentWrapper className='flex items-center justify-between mb-[20px]'>
        <span className="text-[24px] text-white font-normal"> Trending </span>
        <SwitchTabs data={['Day', 'Week']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading}  />
    </div>
  )
}

export default Trending