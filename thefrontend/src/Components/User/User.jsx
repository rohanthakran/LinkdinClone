import React from 'react'
import {NavLink} from "react-router-dom"
import {Typography} from "@mui/material"
const User = ({userId,name,avatar}) => {
  return (
    <NavLink to={`/user/${userId}`} className="homeUser" >
        <img src = {avatar} alt={name}/>
        <Typography>{name}</Typography>
    </NavLink>
  )
}

export default User