import { Avatar, Button, Typography } from '@mui/material'
import React,{useState,useEffect} from 'react'
import {NavLink} from "react-router-dom"
import {useDispatch, useSelector } from "react-redux";

import {
    MoreVert,
    Favorite,
    FavoriteBorder,
    ChatBubbleOutline,
    DeleteOutline
} from "@material-ui/icons"
import "./Post.css"
import { likeDislikePost } from '../../Actions/Post';
const Post = ({
    postId,
    caption,
    postImage,
    likes =[],
    comments=[],
    ownerImage,
    ownerName,
    ownerId,
    isDelete = false,
    isAccount = false,
}) => {
  const dispatch = useDispatch()
  const {error,message} = useSelector(state=>state.likePost)

    const [liked,setLiked] = useState(false)
    const handleLiked = () =>{
        setLiked(!liked)
        dispatch(likeDislikePost(postId))
    }
   
    return (
    <div className='post'>
        <div className="postHeader">
            {isAccount ?(
              <Button>
                <MoreVert/>
              </Button>
            ) : null}
        </div>
        <img src={postImage} alt="Post"/>
        <div className='postDetails'>
            <Avatar src={ownerImage} alt="user"
                sx={{
                    height:"3vmax",
                    width:"3vmax"
                }}
            />
            <NavLink to={`/user/${ownerId}`}> 
                    <Typography fontWeight={700}>{ownerName}</Typography>
             </NavLink>
             <Typography 
                fontWeight={100}
                color="rgba(0,0,0,0.582)"
                style={{alignSelf:"center"}}
                >{caption}</Typography>
            
        </div>
        <button 
          style={{
            border:"none",
            backgroundColor:"white",
            cursor: "pointer",
            margin:"1vmax 2vmax"
          }}
          >
            <Typography>5 Likes</Typography>
          </button>
          <div className='postFooter'>
            <Button onClick={handleLiked}>
                {liked?<Favorite style={{color:"red"}}/>:<FavoriteBorder/>}
            </Button>

            <Button>
                <ChatBubbleOutline/>
            </Button>

            {isDelete ? (<Button>
                <DeleteOutline/>
            </Button>) : null}
          </div>
    </div>  
  )
}

export default Post