import React from 'react'
import Heading1 from '../heading/Heading1'
import Subheading from '../heading/Subheading'

function Product() {
  return (
    <div className='m-0 p-0'>
    <div className='bg-gray-600 h-[80px] w-full'></div>
      <div className='flex flex-col md:flex-row mt-10 mb-10 ml-10 w-[80vw] '>
        <div className='images  md:hidden w-[80vw] grid grid-cols-[70vw] grid-rows-4 gap-4'>
            <div className='bg-blue-200 border-white rounded-lg row-span-1 h-[250px] row-start-1 col-span-1 col-start-1 hover:scale-105'></div>
            <div className='bg-blue-400 border-white rounded-lg row-span-1 h-[250px] row-start-2 col-span-1 col-start-1 hover:scale-105'></div>
            <div className='bg-blue-600 border-white rounded-lg row-span-1 h-[250px] row-start-3 col-span-1 col-start-1 hover:scale-105'></div>
            <div className='bg-blue-800 border-white rounded-lg row-span-1 h-[250px] row-start-4 col-span-1 col-start-1 hover:scale-105'></div>
        </div>

        <div className='images md:grid hidden w-[50vw]  grid-cols-2 grid-rows-2 gap-9'>
            <div className='bg-blue-200 border-white rounded-lg row-span-1 h-[250px] row-start-1 col-span-1 col-start-1 hover:scale-105'></div>
            <div className='bg-blue-400 border-white rounded-lg row-span-1 h-[250px] row-start-2 col-span-1 col-start-1 hover:scale-105 '></div>
            <div className='bg-blue-600 border-white rounded-lg row-span-1 h-[250px] row-start-1 col-span-1 col-start-2 hover:scale-105'></div>
            <div className='bg-blue-800 border-white rounded-lg row-span-1 h-[250px] row-start-2 col-span-1 col-start-2 hover:scale-105'></div>
        </div>

        <div className='md:w-[50vw] w-[80vw] md:mt-1 mt-10'>
            <Heading1 heading='Product name'/>
            <Subheading heading='Rate'/>
            <div className='p-0 ml-20 mb-5 flex-col items-baseline justify-start'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque error numquam libero dolorum expedita similique, officia eum provident quia omnis.</div>
            <Subheading heading='Content'/>
            <div className='p-0 ml-20 mb-5 flex-col items-baseline justify-start'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eligendi rem excepturi iste corrupti repellat tempora, laborum quam eaque, accusantium nulla eius dicta quo aut sed atque vel doloremque laudantium nam sunt fuga numquam ratione? Porro a quidem vitae temporibus, nihil rem harum quisquam officiis eaque laudantium est possimus inventore, commodi id voluptatibus placeat ullam nemo aliquid quod? Facere eveniet repellat architecto excepturi ea suscipit accusantium tempore maiores quaerat aperiam!</div>
        </div>

      </div>
    </div>
  )
}

export default Product
