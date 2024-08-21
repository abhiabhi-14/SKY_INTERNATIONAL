import React from 'react';
// import bgimg1 from ''; // Import the image (ensure it's in the correct location)
import Slider from '../slider/Slider'
import Heading from '../heading/Heading.jsx'
import bgimage1 from '../../assets/glueimg3.jpg'

const style = {
  container1: {
    backgroundImage: `url(${bgimage1})`
  }
}

function ProductPage() {
  return (
    <div className='w-full p-0 m-0'>
      <div className='p-0 m-0 h-[750px] w-[99vw] text-gray-200 overflow-hidden'>
        <div
          style={style.container1}
          className='relative overflow-hidden h-full w-full bg-cover bg-center bg-fixed'
        >
          <div className='absolute h-full w-full bg-opacity-30 bg-black '>
          </div>
          <div className='absolute w-[78vw] h-[75vh] top-20 left-[10vw] bg-gray-600 bg-opacity-25 backdrop-blur-lg shadow-2xl border-gray-500 rounded-xl z-50'>
            <div className='md:w-[65vw] w-[65vw] flex flex-col justify-center items-center text-center'>
              <div className='heading text-blue-600 ml-10 md:ml-40 md:mt-32 font-bold text-[75px]'>Our Products</div>
              <div className='content text-white ml-10  md:ml-40 '>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque laborum repellat, sequi officiis repudiandae,
                ipsa, molestias explicabo voluptate laboriosam dignissimos debitis cupiditate delectus corporis quas quidem temporibus
                aliquid dolorum porro laudantium numquam itaque fuga fugiat consequuntur. Dolorem consectetur minima aut? Esse quasi
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=' ml-[2.5vw] w-[95vw] h-[90vh] left-[2.5vw] '>
        <Heading heading='Products' className='ml-20 mr-20 mt-10 text-gray-600' />
        <div className='md:ml-52 md:mr-52 ml-5 mr-5'>
          <Slider />
        </div>
      </div>
      <div className='h-[50px] w-full'></div>

      <div className=' ml-[2.5vw] w-[95vw] h-[90vh] left-[2.5vw] '>
        <Heading heading='Products' className='ml-20 mr-20 mt-10 text-gray-600' />
        <div className='md:ml-52 md:mr-52 ml-5 mr-5'>
          <Slider />
        </div>
      </div>
      <div className='h-[100px] w-full'></div>


    </div>
  );
}

export default ProductPage;
