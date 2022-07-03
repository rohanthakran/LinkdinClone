import React from 'react'
import "./Home.css"
import User from '../User/User'
import Post from '../Post/Post'
const Home = () => {
  return (
    <div className='home'>
        <div className="homeleft">
            <Post 
                postImage={"https://www.kamalinstitute.com/images/placements-students/ROHAN-THAKRAN.jpg"}
                ownerName={"Mr Rohan "}
                caption="This is a sample"
            />
        </div>
        <div className="homeright">
            <User
                userId = {"user._id"}
                name={"user.name"}
                avatar = {"https://www.kamalinstitute.com/images/placements-students/ROHAN-THAKRAN.jpg"}
            />
        </div>

    </div>
  )
}

export default Home