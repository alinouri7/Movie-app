import React from 'react'
import Carousel from '../../../components/carousel/Carousel'
import useFetch from '../../../hooks/useFetch'



const Recommendation = ({mediaType, id}) => {

  const {data, loading, error} = useFetch(`/${mediaType}/${id}/recommendations`)
  

 

  return (
   <>
   {
    data?.results?.length > 1 &&  
    <div className='text-white'>
       <Carousel 
       title="Recommendation" 
       data={data?.results}
       loading={loading}
       endpoint={mediaType}
       />
    </div>
    }
       </>
  )
}

export default Recommendation