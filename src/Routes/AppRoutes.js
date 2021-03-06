import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../components/About'
import Contact from '../components/Contact'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import Skills from '../components/Skills'
import Work from '../components/Work'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/work' element={<Work />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes