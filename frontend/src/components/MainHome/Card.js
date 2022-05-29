import React,{useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

function Card({post}) {
  console.log("The card porps",post.userId)
  const [user,setUser] = useState();

   //fetch user 
useEffect(() => {
    const fetchUser = async () =>{
      try{
        const res = await axios.get(`${process.env.REACT_APP_BACKEND}/get/${post._id}`)
        setUser(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
    fetchUser();
},[])
console.log("The user",user)
  
  return (
    <div className='CommonCard'>
    <div className='Article'>
      {/* <input type="text" onChange={e=>setText(e.target.value)}/> */}
      <div className='SharedActor'>
        <a>
          <Link to={{pathname:"/myprofile", state:{statePrapm:true}}}>
            <img src='/images/user.svg'/>
          </Link >
           <div>
             <span>Title</span>
             <span>info</span>
             <span>Datef</span>
           </div>
        </a>
        <button>
            <img src='/images/article.svg'/>
        </button>
        </div>

        {/* Description class */}

        <div className='Description'>
            {post.desc}
        </div>

        {/* ShareImg  class*/}

        <div className='SharedImg'>
            <a>
              <img src='/images/user.svg'/>
            </a>
        </div>

        <div className='SocialCount'>
          <li>
            <button>
              <img src='/images/Like.svg'/>

              <img src='/images/clap.svg'/>
              <span>75</span>
            </button>
          </li>
          <li>
            <a>2 Comments</a>
          </li>
        </div>

        {/* Like button screen */}
        <div className='SocialACtions'>
          <button>
            <img src='/images/Like.svg'/>
            <span>Like</span>
          </button>

          <button>
            <img src='/images/comment.svg'/>
            <span>Comments</span>

          </button>

          <button>
            <img src='/images/share.svg'/>
            <span>Share</span>

          </button>

          <button>
            <img src='/images/send.svg'/>
            <span>Send</span>

          </button>


        </div>
    </div>
</div>
  )
}

export default Card