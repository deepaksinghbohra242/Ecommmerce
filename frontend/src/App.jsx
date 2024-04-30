import React, { Fragment } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './component/home/Home';
import Login from './component/login/Login';
import Register from './component/login/Register';
import Profile from './component/profile/Profile';
import Item from './component/shop/Item';
import Shop from './component/shop/Shop';

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element= {<Home />}/>
        <Route path='/login' element= {<Login />}/>
        <Route path='/register' element= {<Register />}/>
        <Route path='/profile' element= {<Profile />}/>
        <Route path='/item' element= {<Item />}/>
        <Route path='/shop' element= {<Shop />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
