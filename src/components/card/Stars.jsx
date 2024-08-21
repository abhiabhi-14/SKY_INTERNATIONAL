import React from 'react';
import stars from '../../assets/star.png'; 
function Stars({ rating }) {

  const renderStars = () => {
    let starsArray = [];
    for (let i = 0; i < rating; i++) {
      starsArray.push(
        <img
          key={i}
          src={stars}
          alt=""
          className="h-4 w-4"
        />
      );
    }
    return starsArray;
  };

  return (
    <div className="flex justify-around">
      {renderStars()}
    </div>
  );
}

export default Stars;
