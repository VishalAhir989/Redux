import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './Container/Home/Home'
import { Route, Routes } from 'react-router'
import ProductView from './Component/Form/Form'
import Add from './Component/Add/Add'

function App() {

  return (
    <>
      <Home/>
      {/* <div className="body-page">
        <Routes>
            <Route path='/ProductView' element={<ProductView/>}></Route>
        </Routes>
      </div> */}

      <div className="body-page">
        <Routes>
            <Route path='/Add' element={<Add/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App
