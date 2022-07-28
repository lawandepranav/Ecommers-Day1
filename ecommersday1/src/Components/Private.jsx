import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux/es/exports'
export const Private = ({childern}) => {
    const token=useSelector(state=>state.auth.token)
     if(!token){
       return <Navigate to="/login"/>
     }
    return childern
   
  
}