import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import NavMenu from './components/NavMenu'
import Calendar from './routes/Calendar'
import Home from './routes/Home'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <NavMenu />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/calendar' element={<Calendar />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}
