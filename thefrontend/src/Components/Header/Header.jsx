import React,{useState} from 'react'
import "./Header.css"
import {NavLink} from "react-router-dom"

import {
  Home,
  HomeOutlined,
  Add,
  AddOutlined,
  SearchOutlined,
  Search,
  AccountCircle,
  AccountCircleOutlined

} from "@material-ui/icons"
function Header() {
    const [tab,setTab] = useState(window.location.pathname);
   
  return (  
    <div className='header'>
         <NavLink to="/" onClick={() => setTab("/")}>
            {tab === "/" ?  <Home style={{color:"black"}}/> :<HomeOutlined/>}
        </NavLink>

        <NavLink to="/newpost" onClick={() => setTab("/newpost")}>
             {tab === "/newpost" ?  <Add style={{color:"black"}}/> :<AddOutlined/>}
        </NavLink>

        <NavLink to="/search" onClick={() => setTab("/search")}>
             {tab === "/search" ?  <Search style={{color:"black"}}/> :<SearchOutlined/>}
        </NavLink>

        <NavLink to="/profile" onClick={() => setTab("/profile")}>
            {tab === "/profile" ?  <AccountCircle style={{color:"black"}}/> :<AccountCircleOutlined/>}
        </NavLink>
    </div>
  )
}

export default Header