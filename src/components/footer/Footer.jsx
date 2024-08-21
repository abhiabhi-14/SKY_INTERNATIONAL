import React, { useEffect, useState } from 'react'
import instagram from '../../assets/instagram.png'
import facebook from '../../assets/facebook.png'
import linkedin from '../../assets/linkedin.png'
import twitter from '../../assets/twitter.png'
import telephone from '../../assets/telephone.png'
import Whatsapp from '../../assets/whatsapp.png'
import { NavLink } from 'react-router-dom'


function Footer() {

  const [scrollBottom , setScrollBottom] = useState(false)

  useEffect( ()=>{
    const handelScrollBottom =() =>{
      const currScroll = window.scrollY;
      let windowHeight = window.innerHeight;
      let bodyHeight = document.body.scrollHeight;

      console.log(currScroll + windowHeight);
      console.log(bodyHeight);

      if(currScroll + windowHeight + 100 >= bodyHeight)  setScrollBottom(true);
      else setScrollBottom(false)

    }
    window.addEventListener('scroll', handelScrollBottom);
    return () => {
        window.removeEventListener('scroll', handelScrollBottom);
    };
  } , [scrollBottom])



  return (
    <div className='footer relative h-[200px] w-full bg-dark-blue '>
      <div>
        <div className='img-container flex justify-center'>
          <div className='mt-4 m-2 mb-4'><a href="http://instagram.com"><img src={instagram} alt="" className='w-5 h-5 invert hover:scale-110 '/></a></div>
          <div className='mt-4 m-2 mb-4'><a href="https://facebook.com"><img src={facebook} alt="" className='w-5 h-5 invert hover:scale-110 '/></a></div>
          <div className='mt-4 m-2 mb-4'><a href="https://linkedin.com"><img src={linkedin} alt="" className='w-5 h-5 invert hover:scale-110 '/></a></div>
          <div className='mt-4 m-2 mb-4'><a href="https://twitter.com"><img src={twitter} alt="" className='w-5 h-5 invert hover:scale-110 '/></a></div>
        </div>
        <NavLink to='/ContactPage'>
          <button className={`transform translate-y-0 ${scrollBottom === true ? 'duration-200 w-32 h-10 bg-white border rounded-lg md:translate-x-[40vw] sm:translate-x-[30vw] translate-x-[20vw]': 'duration-700 fixed bg-black z-50 bottom-5 right-5 h-16 w-16 border-black rounded-full'}`}
          
          >
            <div className='flex justify-center items-center'><img src={telephone} alt="" className={`h-7 w-7 invert ${scrollBottom === false ? 'block' : 'hidden'}`}/></div>
            <div className={`${scrollBottom === true ?'block text-black':'hidden'}`}>Contact-Us</div>
          </button>
        </NavLink>
        <NavLink to='/ContactPage'>
          <button className={`transform translate-y-0 ${scrollBottom === true ? 'duration-200 w-32 h-10 bg-[#25d366] border-[#25d366] rounded-lg md:translate-x-[42vw] sm:translate-x-[33vw] translate-x-[25vw]': 'duration-700 fixed bg-green-500 z-50 bottom-24 right-5 h-16 w-16 border-black rounded-full'}`}
          
          >
            <div className='flex justify-center items-center'><img src={Whatsapp} alt="" className={`h-7 w-7 invert ${scrollBottom === false ? 'block' : 'hidden'}`}/></div>
            <div className={`${scrollBottom === true ?'block text-white':'hidden'}`}>Whatsapp</div>
          </button>
        </NavLink>
        <div className='flex justify-center mt-12'>
          <div className='text-white font-sans font-bold text-2xl'>SKY_INTERNATIONALS</div>
        </div>
        <div className='flex justify-center mt-2'>
          <div className='text-white text-xs'>Copyright . @ 2024 . SKY_INTERNATIONALS.INC</div>
        </div>
      </div>
    </div>
  )
}

export default Footer

// 28.6916608, 77.1981312
