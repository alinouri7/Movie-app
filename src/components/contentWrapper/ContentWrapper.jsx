import React from 'react'

const ContentWrapper = ({children,className}) => {
  return (
    <div className={`w-full max-w-[1200px] m-[0_auto] p-[0_20px] ${className}`} >
        {children}
        </div>
  )
}

export default ContentWrapper