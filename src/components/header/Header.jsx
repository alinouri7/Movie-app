import React, { useEffect, useState } from 'react'
import ContentWrapper from '../contentWrapper/ContentWrapper'
import { useNavigate , useLocation, Link } from 'react-router-dom'
import logo from '../../assets/movix-logo.svg'




const Header = () => {
  const [show,setShow] = useState("top")
  const [lastScrollY,setLastScrollY] = useState(0)
  const [mobileMenu, setMobileMenu] = useState(false)
  const [showSearch, setShowSearch] = useState('')
  const [query,setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  
 useEffect(()=>{
   window.scrollTo(0,0) 
 },[location])

 const controllNavbar = ()=>{
 
  if(window.scrollY > 200){
     if(window.scrollY > lastScrollY && !mobileMenu ){
      setShow("hide")
     }else {
      setShow("show")
     } 
    } else{
      setShow("top")
    }
    setLastScrollY(window.scrollY)
 }

  useEffect(()=>{
    window.addEventListener("scroll", controllNavbar)
     return ()=> window.removeEventListener('scroll',controllNavbar)  
  },[lastScrollY])

  const searchQueryHandler = (e)=>{ 
    if(e.key === "Enter" && query.length > 0 ){
       navigate(`/search/${query}`)
       setTimeout(() => {
          setShowSearch(false)
       }, 1000);
    } 
   }


 const openSearch = ()=>{
  setMobileMenu(false)
  setShowSearch(true)
 }

 const openMobileMenu = ()=>{
  setMobileMenu(true)
  setShowSearch(false)
 }

 const navigationHandler = (type)=>{
  if (type === "movie"){
      navigate("/explore/movie")
  }else {
    navigate("/explore/tv")
  }
   setMobileMenu(false)
 }

  return (
    <header className={`fixed top-0 translate-y-0 w-full h-[60px] z-[2] flex items-center justify-between transition-all duration-[0.5s] ${mobileMenu ? 'mobileView' :'' } ${showSearch ? 'bg-[#000]' : ''}  ${show}`}>
      <ContentWrapper className={`flex items-center justify-between }`} > 
       <Link to='/'>
        <img src={logo} alt="logo" />
      </Link>   
      <ul className={` ${mobileMenu ? ' bg-[#000] absolute top-[60px] left-0 flex flex-col w-full py-[20px] border-t-[1px] border-black-rgba animate-translatey  ' : 'max-md:hidden flex  ' }  text-white gap-2`}>
        <li className={`${mobileMenu ? 'p-[15px_20px] m-0' : '' }  text-white cursor-pointer hover:text-pink `} onClick={()=> navigationHandler("movie")}>Movies</li>
        <li className={`${mobileMenu ? 'p-[15px_20px] m-0' : '' } cursor-pointer hover:text-pink `} onClick={()=> navigationHandler("tv")}>TV Shows</li>
        <li className={`${mobileMenu ? 'hidden' : ''} cursor-pointer hover:text-pink`} onClick={()=>setShowSearch(true) }>
          <i className="ri-search-line" />
          </li>  
      </ul>   
           <div className='md:hidden text-white '>
           <i className="ri-search-line p-2 cursor-pointer hover:text-pink" onClick={openSearch}></i>
            {
            mobileMenu ? (
              <i className="ri-close-fill cursor-pointer hover:text-pink" onClick={()=>setMobileMenu(false) }></i>
            ) : (<i className="ri-menu-line cursor-pointer hover:text-pink" onClick={openMobileMenu}></i>)
            }
           </div>
       </ContentWrapper> 
       <div className=" ">
        <ContentWrapper>
          {
            showSearch && 
        <div className="flex items-center w-full absolute right-0 top-[60px] animate-translatey">
            <input className='w-full  h-[50px] bg-white outline-0 border-0  p-[0_15px] 
            text-[14px] md:w-[calc(100%- 150px)] text-black
            md:h-[60px] md-text-[20px] md:p-[0_30px] relative '
             type="text" onKeyUp={searchQueryHandler}
            onChange={(e)=> setQuery(e.target.value)}
            value={query}
            placeholder='Search for movie or tv shows...'
            />
              <i className="ri-close-fill cursor-pointer hover:text-pink 
              absolute  right-4  text-[24px]" onClick={()=>setShowSearch(false) }></i>
          </div>
    }
      </ContentWrapper>
       </div>
      </header>
  )
}
export default Header