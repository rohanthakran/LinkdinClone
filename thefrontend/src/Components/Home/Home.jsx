import React ,{useEffect} from 'react'
import "./Home.css"
import {useDispatch, useSelector } from "react-redux";
import User from '../User/User'
import Post from '../Post/Post'
import { followingPost,allUsers } from '../../Actions/User';
import Loader from '../Loader/Loader';
import { Typography } from '@mui/material';
import { useAlert } from 'react-alert';

const Home = () => {
    const dispatch = useDispatch()
    const {loading,posts,error} = useSelector(state=>state.postOfFollowing)
    const {users,loading:usersLoading} = useSelector(state=>state.allUsers)
    const {error:likeError,message} = useSelector(state=>state.likePost)
    const alert = useAlert();

    useEffect(() =>{
        dispatch(followingPost())
        dispatch(allUsers())
    },[dispatch])

    useEffect(() => {
      if(likeError){
        alert.error(likeError)
        dispatch({type:"clearErrors"})
      }
      if(message){
        alert.success(message)
        dispatch({type:"clearMessage"})
      }
     }, [alert,likeError,message]) 
  return (
     loading === true || usersLoading === true? <Loader/> :(
        <div className='home'>
        <div className="homeleft">
            
           
          {posts && posts.length > 0 ? posts.map((post) =>(
            <Post 
                key={post._id}
                postImage={post.image.url}
                ownerName={post.owner.name}
                postId={post._id}
                caption={post.caption}
                likes ={post.likes}
                comments={post.comments}
                ownerImage={post.owner.avatar.url}
                ownerId={post.owner._id}
                
            />
          )) : <Typography variant='h6'>No post yet</Typography> }
             
        </div>
        <div className="homeright">

               
          {users && users.length > 0 ? users.map((user) =>(
                 <User
                 userId = {user._id}
                 name={user.name}
                 avatar = {"https://www.kamalinstitute.com/images/placements-students/ROHAN-THAKRAN.jpg"}
             />
          )) : <Typography variant='h6'>No post yet</Typography> }
             
           
        </div>

    </div>
     )
  )
}

export default Home