import React, { useState } from 'react'
import "./Login.css"
import {Typography, Button} from "@mui/material"
import {NavLink} from "react-router-dom"
import {useDispatch} from "react-redux"
import { loginUser } from '../../Actions/User'
function Login() {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const dispatch = useDispatch()

    const loginHandler = (e) =>{
        e.preventDefault()
        dispatch(loginUser(email,password))
    }
    
  return (

    <div className="login">
    <form className="loginForm" onSubmit={loginHandler}>
        <Typography variant="h3" style={{padding:"2vmax"}}>Social App</Typography>

        <input type="email" placeholder='Email' required value={email} onChange={(e) =>setEmail(e.target.value)} />

        <input type="password" placeholder='Password' required value={password} onChange={(e) => setPassword(e.target.value)}/>

        <NavLink to ="/forgot/password">
                <Typography>Forgot Password</Typography>
        </NavLink>

        <Button type='submit'>
            Login
        </Button>

        <NavLink to ="/register">
            <Typography>New User?</Typography>
        </NavLink>
    </form>

</div>
  )
}

export default Login