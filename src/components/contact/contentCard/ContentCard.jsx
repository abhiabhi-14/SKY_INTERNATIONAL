import React, { useState } from 'react'
import icon3 from '../../../assets/instagram.png'
import icon2 from '../../../assets/facebook.png'
import icon1 from '../../../assets/telephone.png'

function ContentCard() {
    const [onHover1 , setOnHover1 ] = useState(false)
    const [onHover2 , setOnHover2 ] = useState(false)
    const [onHover3 , setOnHover3 ] = useState(false)
    const [onHover4 , setOnHover4 ] = useState(false)
    return (

        <div 
        onMouseLeave={()=>{
            setOnHover1(false)
            setOnHover2(false)
            setOnHover3(false)
            setOnHover4(false)
        }}  
        className='flex flex-col items-center w-[95vw] md:w-[50vw]'>
            <div className='relative'>
            <div 
            onMouseLeave={()=>{setOnHover1(false)}} 
            className={`absolute transform  bg-black duration-1000 flex justify-center items-center m-5 border-black border rounded-md h-[50px] md:w-[40vw] w-[90vw] ${onHover1 ? ' translate-x-0' : ' -translate-x-[700px]  '}`}></div>
            <div
            onMouseEnter={()=>{setOnHover1(true)}} 
            className= 'flex justify-center items-center m-5 bg-white border-black border rounded-md h-[50px] md:w-[40vw] w-[90vw]'>
                <div className='h-9 w-9  flex justify-center items-center bg-black border-white rounded-lg'><img src={icon1} alt="" className='h-7 w-7 border-black invert '/></div>
                <div className={` ml-2 z-50  ${onHover1 ? ' text-white' : ' text-gray-800'}`}>Call Us : +91 8957509060</div>
            </div>
            </div>
            <div className='relative'>
            <div 
            onMouseLeave={()=>{setOnHover2(false)}}
            className={`absolute transform  bg-blue-500 duration-1000 flex justify-center items-center m-5 border-blue-500  border rounded-md h-[50px] md:w-[40vw] w-[90vw] ${onHover2 ? ' translate-x-0' : '-translate-x-[700px] '}`}></div>
            <div
            onMouseEnter={()=>{setOnHover2(true)}} 
            className='flex justify-center items-center m-5 bg-white border-blue-500  border rounded-md h-[50px] md:w-[40vw] w-[90vw]'>        
                <div className='h-8 w-8 flex justify-center items-center bg-blue-500 border-white rounded-lg '><img src={icon2} alt="" className='h-7 w-7 invert'/></div>
                <div className={`ml-2 z-50  ${onHover2 ? 'text-white ' : ' text-blue-500'}`}>facebook : abhiabhihello</div>
            </div>
            </div>
            <div className='relative'>
            <div 
            onMouseLeave={()=>{setOnHover3(false)}}
            className={`absolute transform  bg-pink-500 duration-1000 flex justify-center items-center m-5  border-pink-500 border rounded-md h-[50px] md:w-[40vw] w-[90vw] ${onHover3 ? ' translate-x-0' : '-translate-x-[700px] '}`}></div>
            <div
            onMouseEnter={()=>{setOnHover3(true)}} 
            className='flex justify-center items-center m-5 bg-white border-pink-500 border rounded-md h-[50px] md:w-[40vw] w-[90vw]'>        
                <div className='h-9 w-9 flex justify-center items-center bg-pink-500 border-white rounded-lg'><img src={icon3} alt="" className='h-7 w-7 invert'/></div>
                <div className={` ml-2 z-50   ${onHover3 ? 'text-white ' : ' text-pink-500'}`}>instagram : abhiabhihello</div>
            </div>
            </div>
            <div className='relative'>
            <div 
            onMouseLeave={()=>{setOnHover4(false)}} 
            className={`absolute transform  bg-green-600 duration-1000 flex justify-center items-center m-5 border-black border rounded-md h-[50px] md:w-[40vw] w-[90vw] ${onHover4 ? ' translate-x-0' : ' -translate-x-[700px]  '}`}></div>
            <div
            onMouseEnter={()=>{setOnHover4(true)}} 
            className= 'flex justify-center items-center m-5 bg-white border-green-600 border rounded-md h-[50px] md:w-[40vw] w-[90vw]'>
                <div className='h-9 w-9  flex justify-center items-center bg-green-600 border-white rounded-lg'><img src={icon1} alt="" className='h-7 w-7 border-black invert '/></div>
                <div className={` ml-2 z-50  ${onHover4 ? ' text-white' : ' text-green-600'}`}>Whatsapp : +91 8957509060</div>
            </div>
            </div>
        </div>
    )
}

export default ContentCard
