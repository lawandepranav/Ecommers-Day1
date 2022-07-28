import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from "react-redux/es/exports"
import { loginSuccess, loginError,loginLoading } from "../../Redux/Auth/Action";
import axios from "axios";
import { Navigate } from "react-router-dom";


 const Login=()=>{

    const token=useSelector(state=>state.auth.token)
  
   const dispatch=useDispatch()

   const [loginData, setLoginData]=React.useState({
    email:"",
    password:""
   })

  
   const handleChange=(el)=>{
    const {name,value}=el.target;
    setLoginData(prev=>({
        ...prev,
        [name]:value
    }))
    }
    
    const handleLogin=()=>{
      dispatch(loginLoading())
      axios({
        method:"post",
        url:"https://reqres.in/api/login",
        data:loginData
      }).then(res=>{
        dispatch(loginSuccess(res.data.token))
      }).catch(err=>{
        dispatch(loginError())
      })
    }

    if(token){
        return <Navigate to="/"/>
    }

    return(
        <Box
     component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
     {
        Object.keys(loginData).map((el)=><TextField id={el} value={loginData[el]} name={el} onChange={handleChange} label={el.toLocaleUpperCase()} variant="outlined" />)
     }
     <Button   onClick={handleLogin} variant="contained">Login</Button>
   
    </Box>
    )
}
export default Login;


