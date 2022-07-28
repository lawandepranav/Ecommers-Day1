import React from 'react'
import { useSelector } from 'react-redux'
import axios from "axios"
import ShowData from "./Showdata"
import { Button } from '@chakra-ui/react'
 const Home = () => {

  const [products,setProducts]=React.useState([])

    
  React.useEffect(() => {

    axios({
      method:"get",
      url:"http://localhost:8000/products",
     
    }).then(res=>setProducts(res.data))
    .catch(err=>{
     
    })
    
  }, []);

 

  return (
    <div>
      <h1>Home</h1>
      <div>{products?.map((item) => (
                <div>
                  <img src={item.imageBase}></img>
                 <div style={{display:"flex"}}><p> {item.price}</p></div> 
                 <div style={{display:"flex"}}><p>{item.rating}</p></div>
                 <div style={{display:"flex"}}><p >{item.color}</p></div>
                 <div style={{display:"flex"}}><p>{item.hex}</p></div>
                 </div>
             ))}
           
            </div>

    </div>
  )
}
export default Home;