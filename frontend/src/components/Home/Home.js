import React from 'react'
import "./Home.css"
import { ImSearch } from 'react-icons/im';
import {NavLink} from "react-router-dom"
import Navigation from '../Navigation/Navigation';
import LeftsideHome from '../LeftsideHome/LeftsideHome';
import MainHome from '../MainHome/MainHome';
import RightHome from '../Rightsidehome/RightHome';

function Home() {
  return (
    <div>
      <Navigation/>
      <div className='container'> 
      <div className='layout'> 
         <LeftsideHome/>
         <MainHome/>
        <RightHome/>

      </div>
      </div>
     
    </div >
  )
}

export default Home