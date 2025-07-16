import React from 'react'
import "./App.css"
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import {Country} from './Pages/Country'
import AppLayout from './Components/Layouts/AppLayout'
import ErrorPage from './Pages/ErrorPage'
import CountryDetails from './Components/Layouts/CountryDetails'
import SearchFilter from './Components/UI/SearchFilter'


const router=createBrowserRouter([
  {
    path:"/",
    element:<AppLayout/>,
    errorElement:<ErrorPage/>,
    children:[
      {
           path:"/",
      element:<Home/>,
    },
    {
      path:"About",
      element:<About/>,
    },
    {
      path:"Contact",
      element:<Contact/>,
    },
    {
      path:"Country/:countryName",
      element: <SearchFilter/>,
    },
    {
      path:"Country",
      element:<Country/>,
    }  ]
  }
   
])

function App() {
  return (
   <RouterProvider router={router}></RouterProvider>
  )
}

export default App