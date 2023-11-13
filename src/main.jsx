import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.scss'
import Home from './views/Home'
import Contacts from './views/Contacts'
import News from './views/News'




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contacts' element={<Contacts />} />
        <Route path='/news' element={<News />} />
      </Routes>
    </BrowserRouter>

  </React.StrictMode>
);
