import React, { useEffect } from 'react'
import {useState} from 'react'
import "./Mainhome.css"
import axios from "axios"
import Card from './Card'
function MainHome() {
 const [state, setstate] = useState([])
 const [text,setText] = useState("");
 const [user,setUser] = useState("");
 useEffect( ()=>{
  const fetchPost = async () =>{
    try {
      const res =  await axios.get(`${process.env.REACT_APP_BACKEND}/post/timeline/628360f1b782863e982c6026`)
      setstate(res.data);
    } catch (error) {
       console.log(error)
    }
  }
  fetchPost();
 },[])
 //fetch user 
// useEffect(() => {
//     const fetchUser = async () =>{
//       try{
//         const res = await axios.get(`${process.env.REACT_APP_BACKEND}/get/`)
//       }
//     }
// },[])
 console.log("The post",state)

  return (
    <div className='MainContainer'>
      <div className='CommonCard'>

        <div className='ShareBox'>
          Share
        <div className='Post'>
            <img src='/images/user.svg'/>
            <button>Start a Post</button>
        </div>

        <div className='buttons'>
            <button>
              <img src='/images/image.svg'/>
              <span>Photo</span>
            </button>

            <button>
              <img src='/images/image.svg'/>
              <span>Photo</span>
            </button> <button>
              <img src='/images/image.svg'/>
              <span>Photo</span>
            </button> <button>
              <img src='/images/image.svg'/>
              <span>Photo</span>
            </button>
        </div>
        </div>

      
        </div>
      
      {state.map((user) => (
          <div>
            <h1>THis</h1>
            <Card post ={user}></Card>
            </div>
      ))}
     


    </div>
  )
}

export default MainHome