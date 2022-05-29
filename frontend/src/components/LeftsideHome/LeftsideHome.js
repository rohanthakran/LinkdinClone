import React from 'react'
import "./Leftside.css"
function LeftsideHome() {
  return (
          <div className='Leftcontainer '>
                <div className='ArtCard'>
                    <div className='Userinfo'>
                        <div className='CardBackground'/>
                    
                             <a>
                                 <div className='photo'/>

                                <div className='Link'>
                                    Welcome, there
                                </div>
                            </a>
                            <a>
                                <div className='Addaphoto'>
                                     Add photo
                                </div>
                            </a>
                    </div>

                    <div className='Widget'>
                        <a>
                            <div>
                                <span>Connections</span>
                                <span>Grow your network</span>
                            </div>
                            <img src='/home/neuro/Desktop/Project/linkdinclone/frontend/public/images/widget-icon.svg'/>

                        </a>
                    </div>
                    <div className='Item'>
                        <span>
                            <img src='/images/item-icon.svg'/>
                            My Items
                        </span>
                    </div>
                         
                </div>

                <div className='CommunityCard'>
                    <a>
                        <span>Groups</span>
                    </a>
                    <a>
                        <span>
                            Events
                            <img src='/images/plus-icon.svg'/>
                        </span>
                    </a>

                    <a>
                        <span>Follow Hashtags</span>
                    </a>
                    <a>
                        <span>Discover more </span>
                    </a>
                </div>
          </div>    

   
  )
}

export default LeftsideHome