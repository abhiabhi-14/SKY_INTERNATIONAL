import React from 'react'
import Form from './form/Form'
import bgimage1 from '../../assets/glueimg2.png'
import ContentCard from './contentCard/ContentCard'
import Map from '../contact/map/Map.jsx'
import Heading1 from '../heading/Heading1.jsx'

const style = {
  container1: {
    backgroundImage: `url(${bgimage1})`
  }
}

function ContactPage() {
  return (
    <>
      <div
        style={style.container1}
        className='relative p-0 m-0 h-[750px] bg-cover bg-fixed bg-no-repeat bg-slate-400'>
        <div className='absolute h-full w-full bg-opacity-40 bg-black '>
        </div>
        <div className='relative '>
          <div className='absolute w-[78vw] h-[75vh] top-20 left-[10vw] bg-gray-600 bg-opacity-25 backdrop-blur-lg shadow-2xl border-gray-600 rounded-xl z-50 '>
            <Form />
          </div>
        </div>
      </div>
      <div className='md:flex mt-20 mb-20'>
        <div>
          <Heading1 heading='Our Details' />
          <ContentCard />
        </div>
        <div>
          <Heading1 heading='Locate Us' />
          <Map />
        </div>
      </div>
    </>
  )
}

export default ContactPage
