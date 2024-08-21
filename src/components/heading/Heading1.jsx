import React from 'react'
import line1 from '../../assets/line1.png'
import line2 from '../../assets/line2.png'

function Heading({heading , className}) {
  return (
    <div className={className}>
        {/* <img src={line1} alt="" className=' h-5 mt-4 mr-4 w-[30vw]'/> */}
      <div className='p-0 ml-20 mb-5 flex-col items-baseline justify-start'>
        <div className='md:text-[50px] text-blue-600 text-[30px] font-semibold font-sans '>{heading}</div>
        {/* <img src={line1} alt="" className=' h-5 mt-4 ml-4 w-[30vw]'/> */}
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, maxime!</p>
      </div>
    </div>
  )
}

export default Heading
