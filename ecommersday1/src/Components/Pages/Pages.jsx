import React from 'react'
import {Route,Routes} from "react-router-dom"
import  Home from '../Home'
import Login from './Login'
import { Private } from '../Private'

 const Pages = () => {
  return (
    <div>
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login"  element={<Login/>}/>
       </Routes>  
    </div>
  )
}
export default Pages;