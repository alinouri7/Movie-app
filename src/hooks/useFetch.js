import React, { useEffect, useState } from 'react'
import {fetchDataFromApi} from '../utils/api'
const useFetch = (url) => {
 const  [loading, setLoading] = useState(null)
 const  [data, setData] = useState(null)
 const  [err, setErr] = useState(null)

    
    useEffect(()=>{
      setLoading('loading')
      setData(null)
      setErr(null)

      fetchDataFromApi(url).then((res)=>{
        setLoading(false)
        setData(res)
      }).catch((err)=>{
        setLoading(false)
        setErr("something went wrong!")
        
      });
    },[url])

  return {loading, data, err}
  
  
}

export default useFetch