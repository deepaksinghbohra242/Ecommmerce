import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/Home';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/home' element= {<Home />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
