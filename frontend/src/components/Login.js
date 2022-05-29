// require('dotenv').config()
import React from 'react'
import "./Login.css"
import { AiOutlineArrowRight } from 'react-icons/ai';


function Login() {

  return (
    <div className='container' >
        <div className='Nav'>
            <a href='/'>
                <img src='/images/login-logo.svg' />
            </a>
            <div className='connect'>
            <div className='join'>
                <a> Join Now</a>
               
            </div>
           <div className='signin'>
               <a href='/signin'>Sign in</a>
           </div>
            </div>

        </div >

     
        <div className='section'>
            <div className='sub_section'>
                <h1>
                  Welcome to your professional community
                </h1>
                <div className='submenu'>
                   <div className='google'>
                        <a>Search for a job </a>
                        <AiOutlineArrowRight/>
                     </div>
                     <div className='google'>
                        <a>Find a person you know </a>
                        <AiOutlineArrowRight/>
                     </div> <div className='google'>
                        <a>Learn a new skill </a>
                        <AiOutlineArrowRight/>
                     </div>
                   
                </div>
                </div>
            <div className='logo'>
              <img src='/images/hero.svg'/>
              

            </div>
        
        </div>
        <div style={{ backgroundColor: "rgba(0,0,0,0.08)", padding: "10px 0px 20px 0px"}}>
          <div className="topic">
                <h2>Explore topics you are intereted</h2>
                <h1>Content topics</h1>
            </div>
        </div>
      
        
    </div >
  )
}

export default Login