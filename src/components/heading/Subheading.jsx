import React from 'react'

function Subheading({heading , className}) {
    return (
        <div>
            <div className={className}>
                <div className='p-0 ml-20 mb-5 flex-col items-baseline justify-start'>
                    <div className='md:text-[30px] text-[15px] font-semibold font-sans '>{heading}</div>
                </div>
            </div>
        </div>
    )
}

export default Subheading
