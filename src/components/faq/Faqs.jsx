import React, { useState } from 'react'
import cross from '../../assets/close.png'

function Faq() {
    const [open , setOpen] = useState(false)

    const handleClick = ()=>{
        setOpen(!open);
    }
  return (
    <div className='p-0 m-4 h-fit w-[70vw] border-zinc-200 border-[1px] rounded-lg hover:shadow-lg'>
      <div 
      onClick={handleClick}
      className=' grid grid-cols-10 p-5'>
        <h2 className='font-bold col-start-1 col-span-5'> 
            Ques1: Lorem ipsum dolor sit amet.
        </h2>
        <img 
            src={cross} 
            alt="" 
            onClick={handleClick}
            className={`h-3 w-3 col-start-9 duration-500 ${open?'':'transform rotate-45'}`}
            />
      </div>
        <p className={`p-5 transform duration-500 ${open?'':'hidden'}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi sed quibusdam ad ipsam rerum autem, eligendi cupiditate iure vel ex perspiciatis quam labore qui alias quo consequatur cumque! Sit voluptas voluptates rerum, necessitatibus excepturi, quod ut dicta quae molestias corporis quaerat numquam, placeat nam omnis pariatur praesentium officia minus nisi ducimus ad. Iste recusandae omnis nesciunt accusamus velit officiis non maxime fugiat dolorem tempore dignissimos optio, dolore error commodi esse deserunt officia molestiae perferendis! Cum sit voluptatibus molestias distinctio repudiandae laborum tempore vero aperiam illo, maiores eligendi perspiciatis facere corporis explicabo dolore aut placeat in quaerat? Ab laborum cumque corrupti.</p>
    </div>
  )
}

export default Faq
