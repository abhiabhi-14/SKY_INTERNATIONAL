import React, { useState } from 'react';
import './Card3.css'; // Import your CSS file if needed
import customer1 from '../../assets/customer1.jpg';
import customer2 from '../../assets/customer2.jpg';
import customer3 from '../../assets/customer3.jpg';
import customer4 from '../../assets/customer4.jpg';
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'
import linkedin from '../../assets/linkedin.png'

const style = {
    container1:{
        backgroundImage: `url(${customer1})`
    },
    container2:{
        backgroundImage: `url(${customer2})`
    },
    container3:{
        backgroundImage: `url(${customer3})`
    },
    container4:{
        backgroundImage: `url(${customer4})`
    }
}


function Card3({number}) {
    const [ishovered, setIsHovered] = useState(false);
    const [ishovered1, setIsHovered1] = useState(false);

    const handleMouseEnter = (index) => {
        if(index == 0) setIsHovered(true);
        else setIsHovered1(true);
    };

    const handleMouseLeave = (index) => {
        if(index == 0) setIsHovered(false);
        else setIsHovered1(false);
    };

    return (
        <div className='border-zinc-200 border-[1px] rounded-lg p-1 m-2 hover:border-1 hover:shadow-lg'>
        <div 
        onMouseLeave={()=>handleMouseLeave(0)}
        className="relative ml-1 mr-1 p-0 overflow-hidden h-[320px] w-[250px]">

            <div className={`cover rounded-lg flex justify-center items-center absolute z-50 h-[250px] w-[250px] bg-gray-600 bg-opacity-70 transform -translate-y-80 duration-500 ${ishovered ? 'translate-y-1' : ''}`}>
                <a href="https://facebook.com"><img src={facebook} className='h-5 w-5 m-2 invert' alt="" /></a>
                <a href="https://instagram.com"><img src={instagram} className='h-5 w-5 m-2 invert' alt="" /></a>
                <a href="https://linkedin.com"><img src={linkedin} className='h-5 w-5 m-2 invert' alt="" /></a>
            </div>
            
            <div
                onMouseEnter={()=>handleMouseEnter(0)}
                className="image  w-[250px] h-[250px] relative"
            >
                <div
                style={style.container1} 
                className='border rounded-lg mt-1 bg-cover bg-center bg-no-repeat  h-[250px] w-[250px]'>
                </div>
            </div>
            
            <div 
            className="flex justify-center items-center h-20">
                <div 
                className="text-gray-600 font-bold text-2xl ">
                    Name Surname
                </div>
            </div>
        </div>

        </div>
    );
}

export default Card3;
