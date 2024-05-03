import React, { useState } from 'react'



const SwitchTabs = ({data, onTabChange}) => {
  const [selectedTab, setSelectedTab] = useState(0)
  const [left, setLeft] = useState(0)
    const activeTab = (tab,index) =>{
      setLeft(index * 100)
      setTimeout(()=>{
         setSelectedTab(index)
      },30)
      onTabChange(tab,index)
    }
    
    return (
        <div className='h-[34px]  bg-white rounded-[20px] p-[2px] '>
    <div className="flex items-center h-[30px]  text-white relative">
         {data.map((tab,index)=>(
             <span key={index} 
             className={`h-full flex items-center justify-center w-[100px] text-black text-[14px] z-10 cursor-pointer relative ${selectedTab === index ? 'text-white ': ''}`} 
             onClick={()=> activeTab(tab,index)}
             >
                {tab}
            </span>
         ))}
          <span className="h-[30px] w-[100px] 
          rounded-[15px] gradientimg absolute left-0 
          animate-transition" 
          style={{left}}>  
          </span>
        </div>    
    </div>
  )
}

export default SwitchTabs