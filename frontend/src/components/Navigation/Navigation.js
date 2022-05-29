import React from 'react'
import "./Navigation.css"
import { ImSearch } from 'react-icons/im';
import {NavLink} from "react-router-dom"
function Navigation() {
  return (
    <div className='Container'>
    <div className='Home_Nav'>
         <a href='/'>
            <img src='/images/home-logo.svg' />
         </a>
         <div className='search'>
                 <ImSearch size={20} style={{ padding: "10px 8px 10px 30px"}} />
                <input placeholder='Search for jobs,skills,companies'/>
         </div>
       
         <div className='Nav_Menu'>
             <div className='icons'>
               <NavLink to="/home">
                  <img src='/images/nav-home.svg' color='red' />
                  <span>Home</span>
               </NavLink>
               
             </div>
            
             
             <div className='icons'>
               <NavLink to="/mynetwork">
                 <img src='/images/nav-network.svg' />
                 <span>My network</span>
               </NavLink>
            </div>

             <div className='icons'>
               <NavLink to="/myjobs">
               <img src='/images/nav-jobs.svg' />
               <span>jobs</span>
               </NavLink>
            </div>   
            
            <div className='icons'>
               <NavLink to="/mymessage">
                  <img src='/images/nav-messaging.svg' />
                  <span>messaging</span>
               </NavLink>
               </div>

            <div className='icons'>
               <NavLink to="/mynotication">
                  <img src='/images/not.svg' />
                  <span>Notification</span>
               </NavLink>
            </div>  
           
            <div className='icons'>
               <NavLink to="/myprofile">
                     <img src='/images/user.svg' style={{borderRadius:"50%"}}/>     
                  <div className='profile'>
                     <span>Me</span>
                     <img src='/images/down-icon.svg ' />

                  </div>
               </NavLink>
            </div>  
            <div className='icons'>
               <NavLink to="/mynotication">
                  <img src='/images/nav-work.svg ' />
                  <span>work</span>
               </NavLink>
            </div> 
            <div className='icons'>
               <NavLink to="/mynotication">
                  <img src='/images/nav-work.svg ' />
                  <span>work</span>
               </NavLink>
            </div> 

               
         </div>


    </div>

</div >
  )
}

export default Navigation