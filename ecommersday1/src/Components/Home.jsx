import React from 'react'
import { useFetchProducts } from '../Hooks/fetchproducts'
import GroCard from "./GroCard"

 const Home = () => {
  const{loading,error,data}=useFetchProducts("http://localhost:8000/products")
  console.log(data)



  return (
     loading? <h1>......Loading</h1>
     : error ?<h1>Something Went Wrong</h1>
     :data.map(item=> <GroCard key={item.id} {...item}/>)
  )
}
export default Home;