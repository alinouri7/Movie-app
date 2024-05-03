import React from 'react'
import { ClipLoader } from 'react-spinners'

const Spinner = ({initial}) => {
  return (
    <div className={`w-full h-[150px] relative flex items-center justify-center 
      ${initial ? "h-[700px]" : ''}`}>
        <ClipLoader color="#fff"
        size={50}
        />
    </div>
  )
}

export default Spinner