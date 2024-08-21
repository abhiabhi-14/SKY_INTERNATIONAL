import React, { useEffect, useState } from 'react';
import leftArrow from '../../assets/arrow_left.png'
import Card from '../card/Card.jsx';
import fakeData from '../../data/FakeData.js';

function Slider() {
    const [windowSize, setWindowSize] = useState(window.innerWidth);
    const [numberOfCards, setNumberOfCards] = useState(1);
    const [displayCard , setDisplayCard] = useState(0);
    const [mouseDownRight , setMouseDownRight] = useState(false);
    const [mouseDownLeft , setMouseDownLeft] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setWindowSize(window.innerWidth);
      };
      window.addEventListener('resize', handleResize);
  
    },[]);

    useEffect(() => {
      const calculateNumberOfCards = () => {
        if (windowSize >= 1350) {
          setNumberOfCards(3);
        } else if (windowSize < 1010 && windowSize >= 800) {
          setNumberOfCards(2);
        } else if (windowSize < 650) {
          setNumberOfCards(1);
        }
      };
  
      calculateNumberOfCards(); 
    }, [windowSize]); 
  
    const makesCards = () => {
      let cards = [];
      for (let i = 0; i < 5; i++) {
  
          cards.push(<Card key={i} heading = {fakeData[i].heading} content={fakeData[i].content} rating={fakeData[i].rating} image={fakeData[i].image}/>); // Render Card component
        
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
    if( displayCard<4)
      setDisplayCard(displayCard+1)
   }
   const decreaseDisplayCards = ()=>{
    
      if( displayCard>0)
        setDisplayCard(displayCard-1)
     
   }
  
    return (
      <div className='p-0 m-0 box-border'>
        <div className='p-0 m-0 flex justify-around items-center'>
          <img
            src={leftArrow}
            alt=""
            className={`h-10 w-10  border rounded-full  ${mouseDownLeft?'scale-90':''}`}
            onClick={decreaseDisplayCards}
            onMouseDown={()=>setMouseDownLeft(true)}
            onMouseUp={()=>setMouseDownLeft(false)}
          />
  
          {sliderCards()}
  
          <img
            src={leftArrow}
            alt=""
            className={`h-10 w-10 transform rotate-180  border rounded-full  ${mouseDownRight?'scale-90':''}`}
            onClick={increaseDisplayCards}
            onMouseDown={()=>setMouseDownRight(true)}
            onMouseUp={()=>setMouseDownRight(false)}
          />
        </div>
      </div>
    );
  }

export default Slider
