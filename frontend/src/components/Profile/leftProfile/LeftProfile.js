import React from 'react'
import "./LeftProfile.css"
const  LeftProfile =()=> {
  return (
    <div className='leftSide'>
        <div className='profilebanner'>
                <div className='UserProfile'>
                    <div className='ProfileBackground'/>
                         <a>
                            <div className='profilesection'>
                                <div className='Profilephoto'/>     
                                <img src='/images/penclie.svg'/>

                            </div>
                         </a>
                    <div className='UserInfo'>
                        <h1>Rohan Thakran</h1>
                        <div className='rightyourself'>
                                <div>
                                  <p>Software Engineer at Neuronimbus Software Services P. Ltd. || MERN STACK ||React Native|| Reactjs</p>
                                </div>
                                <div>
                                    <h1>Company Name</h1>
                                    <h1>College Name</h1>

                                </div>
                        </div>
                    </div>     
                </div>

        </div>
    </div>
  )
}

export default LeftProfile