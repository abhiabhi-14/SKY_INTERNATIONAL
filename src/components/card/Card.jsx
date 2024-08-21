import React from 'react';
import './Card.css'; // Assuming you have CSS file for Card component
import { NavLink } from 'react-router-dom';
import product1 from '../../assets/product1.jpeg';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import product4 from '../../assets/product4.png';
import product5 from '../../assets/product5.png';
import product6 from '../../assets/product6.png';

const products = [
  product1,
  product2,
  product3,
  product4,
  product5,
  product6
];

function Card({ heading, content, rating, image }) {
  const imageUrl = products[image-1]; // Adjust index for 0-based array

  return (
    <div className='container border-black border-1 rounded-md h-[352px] w-[255px] hover:scale-105 duration-700 p-0 m-0 hover:shadow-lg flex justify-center items-center'>
      <NavLink 
        to='/product'
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={`card relative h-[350px] w-[250px] border-zinc-200 rounded-md bg-cover bg-no-repeat bg-center duration-500 scale-100 flex justify-end items-start flex-col hover:shawdow-lg overflow-hidden`}
      >
        <div className='h-full w-full bg-black bg-opacity-20'></div>
        <h1 className='heading absolute m-2 md:m-4 font-bold text-white text-xl bottom-8 duration-1000'>{heading}</h1>
        <p className='content absolute m-2 md:m-4 duration-1000 text-white -bottom-40'>{content}</p>
        {/* <NavLink to='/product' className='absolute text-center bg-slate-300 h-10 w-32 m-2 md:m-4 rounded-lg text-gray-800 font-bold pt-2'>Read More</NavLink> */}
      </NavLink>
    </div>
  );
}

export default Card;
