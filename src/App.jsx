import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Users from './pages/Users/Users'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='app-wrapper'>
      <Navbar />

      <div className="container">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/users' element={<Users />} />
        </Routes>
      </div>
    </div>
  )
}

export default App