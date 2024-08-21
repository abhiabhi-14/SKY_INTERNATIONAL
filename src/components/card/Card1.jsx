import React from 'react';
import Stars from './Stars'; // Assuming Stars component exists
import customer1 from '../../assets/customer1.jpg';
import customer2 from '../../assets/customer2.jpg';
import customer3 from '../../assets/customer3.jpg';
import customer4 from '../../assets/customer4.jpg';
import customer5 from '../../assets/customer5.jpg';
import customer6 from '../../assets/customer6.jpg';


const imageMap = [
  customer1,
  customer2,
  customer3,
  customer4,
  customer5,
  customer6,
];

function Card1({ heading, content, rating, image }) {

  const imageUrl = imageMap[image-1];

  return (
    <div className='hover:shadow-custom-shadow rounded-lg m-0 p-2 flex justify-center items-center'>
      <div className=' h-[400px] w-[300px] rounded-sm md:h-[350px] md:w-[500px] md:flex md:items-center'>
        <div>
          <div
          style={{
            backgroundImage : `url(${imageUrl})`
          }}
            className='bg-center bg-cover border-white rounded-bl-[50px] rounded-br-[50px] md:rounded-full md:h-[280px] md:w-[280px] h-[200px] w-[300px]'
          >

          </div>
        </div>
        <div className='flex flex-col justify-center items-center m-4 text-center md:h-[300px] md:w-[200px]'>
          <h1 className='font-bold'>{heading}</h1>
          <Stars rating={rating} /> {/* Assuming Stars component is defined */}
          <div>{content}</div>
        </div>
      </div>
    </div>
  );
}

export default Card1;
