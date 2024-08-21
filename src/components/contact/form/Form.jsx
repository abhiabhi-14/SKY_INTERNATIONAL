import React from 'react'

function Form() {
    return (
        <div>
            <div className='flex flex-col justify-center items-center mt-1'>
                <div className='heading text-center text-blue-600 font-bold md:text-[70px] text-[60px]'>Contact Us</div>
                <div className='form h-[50vh] w-[40vw] '>
                    <form action="" className='flex flex-col justify-around items-center '>
                        <div className=' m-4 text-gray-800'>
                            <input type="text" placeholder='Email Address*' className=' w-[28vw] p-3' />
                        </div>
                        <div className=' m-4 text-gray-800'>
                            <input type="text" placeholder='Full Name*' className=' w-[28vw] p-3' />
                        </div>
                        <div className=' m-4 text-gray-800'>
                            <input type="text" placeholder='Phone Number*' className=' w-[28vw] p-3' />
                        </div>
                        <div>
                        <textarea name="" id="" className=' m-4 w-[28vw] h-[13vh] p-3' placeholder='Content'></textarea>
                        </div>
                        <button className='text-white text-lg bg-blue-600 h-10 w-40 border-gray-600 rounded-lg'>SEND EMAIL</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form
