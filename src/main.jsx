import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import './index.css'
import Root from './Root'
import HomePage from './components/home/HomePage'
import AboutPage from './components/about/AboutPage'
import ContactPage from './components/contact/ContactPage'
import ProductPage from './components/product/ProductPage'
import Product from './components/product/Product'


const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    children:[
      {
        path:'',
        element:<HomePage/>,
      },
      {
        path:'AboutPage',
        element:<AboutPage/>,
      },
      {
        path:'ContactPage',
        element:<ContactPage/>
      },
      {
        path:'ProductPage',
        element:<ProductPage/>,
      },
      {
        path:'product',
        element:<Product/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
