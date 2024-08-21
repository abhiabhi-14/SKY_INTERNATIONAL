import React, { useEffect, useState } from 'react';
import leftArrow from '../../assets/arrow_left.png';
import Card1 from '../card/Card1.jsx';
import fakeData from '../../data/FakeData.js';

function Test({ cardType }) {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [numberOfCards, setNumberOfCards] = useState(1);
  const [displayCard , setDisplayCard] = useState(0);
  const [mouseDownRight , setMouseDownRight] = useState(false);
  const [mouseDownLeft , setMouseDownLeft] = useState(false);


  const updateWindowSize = () => {
    setWindowSize(window.innerWidth);
  };

  // Effect to add resize event listener and cleanup
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);

  },[]); // Empty dependency array ensures effect runs only on mount and unmount

  // Function to calculate number of cards based on window size and cardType
  useEffect(() => {
    const calculateNumberOfCards = () => {
        if (windowSize >= 1130) {
            setNumberOfCards(2);
          } else  {
            setNumberOfCards(1);
          }
    };

    calculateNumberOfCards(); // Initial calculation on mount
  }, [windowSize, cardType]); // Depend on windowSize and cardType changes

  // Function to dynamically render cards based on numberOfCards and cardType
  const makesCards = () => {
    let cards = [];
    for (let i = 0; i < 10; i++) {
        cards.push(<Card1 key={i} heading = {fakeData[i].heading} content={fakeData[i].content} rating={fakeData[i].rating} image={fakeData[i].image}/>); // Render Card1 component

    }
    return cards;
  };


  const sliderCards = () =>{
    let toBeDisplayedCard = [];
    let totalCards = makesCards();
    for(let i=displayCard ; i<(displayCard + numberOfCards) ; i++){
      toBeDisplayedCard.push(
        totalCards[i]
      )
    }
    return toBeDisplayedCard;
  };


 const increaseDisplayCards = ()=>{
  if(displayCard<8)
  setDisplayCard(displayCard+1)
 }
 const decreaseDisplayCards = ()=>{
  if( displayCard>0)
    setDisplayCard(displayCard-1)   
 }

  return (
    <div className='mr-[10px]'>
      <div className=' lg:mr-28 md:ml-28  p-0 flex justify-around items-center'>
        <img
          src={leftArrow}
          alt=""
          className={`m-0 p-0 h-10 w-10 border rounded-full  ${mouseDownLeft?'scale-90':''}`}
          onClick={decreaseDisplayCards}
          onMouseDown={()=>setMouseDownLeft(true)}
          onMouseUp={()=>setMouseDownLeft(false)}
        />

        {sliderCards()} {/* Render dynamically generated cards */}

        <img
          src={leftArrow}
          alt=""
          className={` m-0 p-0 h-10 w-10 transform rotate-180 invert-0 hover:bg-white border rounded-full  ${mouseDownRight?'scale-90':''}`}
          onClick={increaseDisplayCards}
          onMouseDown={()=>setMouseDownRight(true)}
          onMouseUp={()=>setMouseDownRight(false)}
        />
      </div>
    </div>
  );
}

export default Test;
