import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navigation from './components/Navigation'
import ToDos from './components/ToDos/ToDos'
import Categories from './components/Auth/Categories/Categories'
import About from './components/About/About'
import Login from './components/Auth/Login'
import NotFound from './components/NotFound'

export default function App() {
  return (
    <div className='App'>
      <Router>
        <Navigation />
        <Routes>
          <Route path='/' element={<ToDos />} />
          <Route path='/todos' element={<ToDos />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  )
}
