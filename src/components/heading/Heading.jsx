import React from 'react'
import line1 from '../../assets/line1.png'
import line2 from '../../assets/line2.png'

function Heading({heading , className}) {
  return (
    <div className={className}>
      <div className='font-lato p-0 m-0 flex items-baseline justify-center'>
        <img src={line1} alt="" className=' h-5 mt-4 mr-4 w-[30vw]'/>
        <div className='text-blue-600 md:text-[50px] text-[30px] font-semibold font-sans '>{heading}</div>
        <img src={line1} alt="" className=' h-5 mt-4 ml-4 w-[30vw]'/>
      </div>
      <p className='text-center mt-3 mb-16'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo aliquam amet accusamus itaque nemo. Obcaecati iure porro eos repellat ab. Ducimus nihil consequatur, veniam quibusdam officiis at molestias debitis cupiditate accusamus, dolorem aliquid, vero consequuntur!</p>
    </div>
  )
}

export default Heading
