import React from 'react'
import {Link,useParams,useLocation} from "react-router-dom"
import Navigation from '../Navigation/Navigation'
import "./Profile.css"
import LeftProfile from './leftProfile/LeftProfile'
import Rightprofile from './rightProfile/Rightprofile'
function Profile(props) {
  // console.log("The userinfo",props.location.aboutpros)
    const {type} = useParams();
    const statePramval = useLocation().state;
    // console.log("The type", type.length,"The stae",statePramval)
  return (
    <div>
      <Navigation/>
      <div className='container'> 
      <div className='Thelayout'> 
            <LeftProfile/>
            <Rightprofile/>
      </div>
      </div>
     
    </div >
  )
}

export default Profile