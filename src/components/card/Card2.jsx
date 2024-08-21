import React from 'react'

function Card2({ number, heading, content,style }) {

    return (
        <div >
            <div 
            className='bg-black w-full flex-shrink transform translate-x-[0%] duration-1000 z-[10000]' 
            style={style}
            >
                <div 
                    className={`content absolute bg-opacity-25 bg-gray-500 backdrop-blur-lg shadow-lg md:h-[75vh] h-[80vh] w-[80vw] top-[10vh] left-[10vw] border-black rounded-lg flex flex-col `}>
                    <div
                        className=' absolute -top-16 md:left-10 left-5 md:text-[300px] text-[200px] font-serif opacity-70 text-blue-600'>
                        {number + 1} </div>
                    <div
                        className='absolute top-48 md:left-10 left-5 md:text-[100px] text-[70px] text-white'>
                        {heading}</div>
                    <div
                        className='absolute md:top-96 top-72 md:left-10 left-5 w-[70vw] text-white'>
                        {content}</div>
                </div>
            </div>
        </div>
    )
}

export default Card2
