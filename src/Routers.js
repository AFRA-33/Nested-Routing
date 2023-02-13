import React from 'react'
import Products from './Screens/Products';
import Blogs from './Screens/Blogs';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Prices from './Screens/Prices';
import Appbar from './Screens/Appbar';
import Home from './Screens/Home';


const Routers = () => {
  return (
    <>
    <BrowserRouter>
    <Appbar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
        <Route path='/products' element={<Products/>}/>
        <Route  path='/pricing' element={<Prices/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routers