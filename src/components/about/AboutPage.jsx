import React from 'react'
import bgimage1 from '../../assets/glueimg1.jpg'
import bgimage6 from '../../assets/glueimg6.png'
import Card1 from '../card/Card1'
import Slider1 from '../slider/Slider2.jsx'

const style = {
  container1 :{
    backgroundImage: `url(${bgimage1})`
  },
  container2: {
    backgroundImage: `url(${bgimage6})`
  }
}

function AboutPage() {
    return (
        <div className='w-full p-0 m-0'>
            <div className='p-0 m-0 h-[750px]  w-full'>
                <div style={style.container2} className='relative overflow-hidden bg-cover bg-no-repeat bg-fixed h-full w-full  '>
                <div className='absolute h-full w-full bg-opacity-40 bg-black '>
                </div>
                    {/* <div className='absolute w-[78vw] h-[75vh] top-20 left-[10vw] bg-gray-700 bg-opacity-25 backdrop-blur-lg shadow-2xl border-gray-600 rounded-xl z-50'>
                        <div className='content md:w-[65vw] w-[65vw] flex flex-col items-center'>
                            <div className='heading text-gray-800 ml-10 md:ml-40 md:mt-32 font-bold text-[70px] '>What We Do Here</div>
                            <div className='content text-white ml-10  md:ml-40'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque laborum repellat, sequi officiis repudiandae, ipsa, molestias explicabo voluptate laboriosam dignissimos debitis cupiditate delectus corporis quas quidem temporibus aliquid dolorum porro laudantium numquam itaque fuga fugiat consequuntur. Dolorem consectetur minima aut? Esse quasi maxime facilis nihil a. Sint dolor, quibusdam et quidem totam voluptas.</div>
                        </div>
                    </div> */}
                    <Slider1/>
                </div>
            </div>
                {/* <div className='h-screen w-full'></div> */}
                {/* <div className='footer relative overflow-hidden bg-gradient-to-r h-[200px] w-full from-pink-500 to-violet-500 '>
                <div className='absolute top-4 left-[4vw] w-[90vw] h-[170px] bg-white bg-opacity-25 backdrop-blur-lg shadow-lg border rounded-lg z-50'></div>
                <div className='absolute top-10 left-6 w-[200px] h-[200px]  bg-white rounded-full shadow-2xl bg-gradient-to-r from-orange-400 to-red-300'></div>
                <div className='absolute -top-10 -right-6 w-[300px] h-[300px]   rounded-full shadow-2xl bg-gradient-to-r from-orange-400 to-red-300'>
                    <div className='absolute top-40 right-36 w-[200px] h-[200px]   rounded-full shadow-2xl  bg-blue-400'></div>
                </div>
                <div className='absolute top-96 left-72 w-[400px] h-[400px] rounded-full shadow-2xl bg-gradient-to-r from-indigo-400 to-violet-400'></div>
            </div> */}
        </div>
    )
}

export default AboutPage
