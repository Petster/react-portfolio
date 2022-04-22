import React from 'react'
import ReactDOM from 'react-dom'
import './css/index.css'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route, Link } from 'react-router-dom'

import Index from './pages/index'
import About from './pages/about'
import Portfolio from './pages/portfolio'
import Connect from './pages/connect'
import FoOhFo from './pages/404'

ReactDOM.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/connect" element={<Connect/>} />
        <Route path="*" element={<FoOhFo/>} />
      </Routes>
    </BrowserRouter>,
  document.getElementById('root')
)
