import React from 'react'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

 const Private = ({child}) => {
  const token=useSelector(state=>state.auth.token)
     if(!token){
       return <Navigate to="/login"/>
     }
    return child

}
export default Private;