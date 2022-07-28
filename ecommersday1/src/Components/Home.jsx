import React from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"
import ShowData from "./Showdata"
import { Button } from '@chakra-ui/react'
import { useFetchProducts } from '../Hooks/fetchproducts'
 const Home = () => {
  const{loading,error,data}=useFetchProducts("http://localhost:8000/products")

  return (
    loading? <h1>......Loading</h1>
     : error ?<h1>Something Went Wrong</h1>
     :data.map(item=> <div key={item.id}>{item.title}</div>)
  )
}
export default Home;