import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.scss'
import Home from './views/Home'
import Contact from './views/Contact'
import News from './views/News'
import NotFound from './views/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'





ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <div className="wrapper-grid">
        <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>

    </BrowserRouter>

  </React.StrictMode>
);
