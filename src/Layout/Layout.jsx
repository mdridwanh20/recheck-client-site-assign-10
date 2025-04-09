import React from 'react'
import Navbar from '../Components/Share_Compo/Navbar'
import { Outlet } from 'react-router'
import Footer from '../Components/Share_Compo/Footer'


export default function Layout() {
  return (
    <div className=''>
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
