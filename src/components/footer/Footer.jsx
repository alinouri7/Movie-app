import React from 'react'
import ContextWrapper from '../contentWrapper/ContentWrapper'
import { Link } from 'react-router-dom'


const Footer = () => {



  return (
    <footer className='h-[400px] bg-black3 text-white font-sans py-14'>
    <ContextWrapper className=' flex flex-col justify-center items-center'>
     <div className='flex items-center p-4'>
      <Link className='mr-3 hover:text-pink'>TermsOfUse</Link>
      <Link  className='mr-3 hover:text-pink'>PrivacyPolicy</Link>
      <Link className='mr-3 hover:text-pink'>About</Link>
      <Link className='mr-3 hover:text-pink'>Blog</Link>
      <Link className='mr-3 hover:text-pink'>FAQ</Link>
     </div>
       <p className='font-[12px] opacity-[0.5] text-center mb-[20px] md:font-[14px] md:mb-[30px] '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta voluptatibus nisi, officiis sit quasi exercitationem officia excepturi impedit fugit nobis quae sequi cupiditate error mollitia consequuntur necessitatibus. Dignissimos optio adipisci totam quidem officia, temporibus earum accusantium corporis esse rem facere facilis veniam id illum assumenda tempora odio libero aut labore.</p>
       <div className='mt-2'>
       <i className="bg-black text-white mr-3 rounded-[50%] p-2 hover:text-pink transition-all ease-in duration-[0.3] cursor-pointer  ri-facebook-fill"></i>
       <i className="bg-black text-white mr-3 rounded-[50%] p-2 hover:text-pink transition-all ease-in duration-[0.3] cursor-pointer ri-instagram-line"></i>
       <i className="bg-black text-white mr-3 rounded-[50%] p-2 hover:text-pink transition-all ease-in duration-[0.3] cursor-pointer ri-twitter-line"></i>
       <i className="bg-black text-white mr-3 rounded-[50%] p-2 hover:text-pink transition-all ease-in duration-[0.3] cursor-pointer ri-linkedin-box-fill"></i>

        </div>   
      
    </ContextWrapper>
      
    </footer>

  )
}

export default Footer