import React from 'react'
import Card2 from '../card/Card2'
import Card3 from '../card/Card3'
import Slider2 from '../slider/Slider2'
import Heading from '../heading/Heading'
import Faqs from '../faq/Faqs'
import Test from '../testamonials/Test'
import bgimage1 from '../../assets/glueimg6.png'
import video1 from '../../assets/homePagev1.mp4'

const style = {
  container1: {
    backgroundImage: `url(${bgimage1})`
  }
}

function HomePage() {
  return (
    <div className='relative p-0 m-0 w-full'>
      {/* <div className='hearder relative overflow-hidden bg-cover bg-no-repeat bg-fixed h-[750px] w-full '
        style={style.container1}>
        <div className='absolute h-full w-full bg-opacity-40 bg-black '>
          <Slider2 />
        </div>
      </div> */}

      <div className='rounded-lg absolute flex flex-col justify-center items-center text-white '>
        <div 
        className='relative text-center'>
          <div 
          className='absolute text-blue-600 font-serif lg:text-[80px] text-[10vw] top-[35vh] lg:left-[43vw] left-[35vw]'>SKY</div>
          <div 
          className='absolute text-white font-serif lg:text-[90px] text-[10vw] top-[40vh] lg:left-[23vw] left-[5vw]'>INTERNATIONALS</div>
          <div 
          className='absolute text-white w-[70vw] text-[15px] top-[55vh] left-[15vw]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque nihil praesentium expedita labore suscipit modi mollitia deserunt vel consectetur esse, voluptatem repudiandae perspiciatis voluptatibus impedit. Atque in voluptates explicabo molestiae.</div>
        </div>
      </div>
      <video autoPlay muted loop className='w-full h-screen object-cover'>
        <source src={video1} type="video/mp4" />
      </video>

      <div className='h-[50px] w-full'></div>


      <div
      className='hover:shadow-custom-shadow pb-3 ml-[2.5vw] w-[95vw]  left-[2.5vw] '>
        <Heading heading='Team' className='ml-20 mr-20 pt-20 text-gray-600' />
        <div className='lg:flex mb-32 justify-center items-center'>
          <div className='flex sm:flex-row flex-col justify-center items-center '>
          <Card3 />
          <Card3 />
          </div>
          <div  className='flex sm:flex-row flex-col justify-center items-center '>
          <Card3 />
          <Card3 />
          </div>
        </div>
      </div>
      <div className='h-[50px] w-full'></div>

      <div className='hover:shadow-custom-shadow p-5 ml-[2.5vw] w-[95vw]  left-[2.5vw] '>
        <Heading heading='Reviews' className='ml-20 mr-20 pt-20 text-gray-600' />
        <Test />
      </div>
      <div className='h-[50px] w-full'></div>

      <div className='hover:shadow-custom-shadow  ml-[2.5vw] left-[2.5vw] w-[92vw] pb-5'>
        <Heading heading='FAQs' className='ml-20 mr-20 pt-20 text-gray-600' />
        <div className='flex flex-col justify-center items-center mb-32'>
          <Faqs />
          <Faqs />
          <Faqs />
        </div>
      </div>

      <div className='h-[70px] w-full'></div>
    </div>
  )
}

export default HomePage

