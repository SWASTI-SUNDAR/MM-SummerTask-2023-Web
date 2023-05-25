import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Home from './Home'
function Mainheader() {
    return (
        <>
            <Navbar />
            <Home/>
        </>
    )
}

export default Mainheader
