import React from 'react'
import Navbar from './components/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './components/footer/Footer'

function Root() {
  return (
    <div className='font-lato'>
      <Navbar/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Root
