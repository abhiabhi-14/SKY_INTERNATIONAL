import React, { useEffect, useState } from 'react';
import Card2 from '../card/Card2';


function Slider2() {
    const [activeSlide, setActiveSlide] = useState(0);

    const changeSlide = (index) => {
        setActiveSlide(index);
    }



    const makeCardArray = () => {
        const arrayOfCard = [];
        for (let i = 0; i < 4; i++) {
            arrayOfCard.push(
                <Card2
                    key={i}
                    number={i}
                    heading='Heading'
                    content='Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, tempore fuga. Repellat quia commodi officiis esse unde dolor molestiae aliquid omnis illum eius laudantium porro ea obcaecati tempore, in neque amet voluptatum placeat distinctio, rem corporis veritatis! Obcaecati, libero impedit!'
                    style={{ transform: i === activeSlide ? '' : 'translateX(100%)' }}
                />
            );
        }
        return arrayOfCard;
    }
    useEffect(() => {
        const timer = setTimeout(() => { changeSlide((activeSlide + 1) % 4) }, 5000)

        return () => clearTimeout(timer);
    }, [activeSlide])

    return (
        <div className='contain relative h-screen w-full overflow-hidden z-50'>
            {makeCardArray()}
            <button
                onClick={() => changeSlide(0)}
                className={`absolute top-[650px] md:left-[50vw] left-[46vw] border rounded-full w-3 h-3 z-50 hover:scale-125 ${activeSlide === 0 ? 'scale-150 bg-gray-600' : 'scale-100 bg-white'}`}
            ></button>
            <button
                onClick={() => changeSlide(1)}
                className={`absolute top-[650px] md:left-[52vw] left-[50vw]  border rounded-full w-3 h-3 z-50 hover:scale-125 ${activeSlide === 1 ? 'scale-150 bg-gray-600' : 'scale-100 bg-white'}`}
            ></button>
            <button
                onClick={() => changeSlide(2)}
                className={`absolute top-[650px] md:left-[54vw] left-[54vw] border rounded-full w-3 h-3 z-50 hover:scale-125 ${activeSlide === 2 ? 'scale-150 bg-gray-600' : 'scale-100 bg-white'}`}
            ></button>
            <button
                onClick={() => changeSlide(3)}
                className={`absolute top-[650px] md:left-[56vw] left-[58vw]  border rounded-full w-3 h-3 z-50 hover:scale-125 ${activeSlide === 3 ? 'scale-150 bg-gray-600' : 'scale-100 bg-white'}`}
            ></button>

            {/* {[...Array(4)].map((_, index) => (
                <button
                    key={index}
                    onClick={() => changeSlide(index)}
                    className={`absolute top-[650px] left-[${750 + (index * 2)}px] bg-white border rounded-full w-3 h-3 z-50 hover:scale-125 ${activeSlide === index ? 'scale-150' : 'scale-100'}`}
                ></button>
            ))} */}
        </div>
    );
}

export default Slider2;
