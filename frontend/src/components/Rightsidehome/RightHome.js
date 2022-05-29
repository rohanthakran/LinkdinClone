import React from 'react'
import "./RIghtside.css"
function RightHome() {
  return (
    <div className='RightContainer'>
        <div className='FollowCard'>
          <div className='Title'>
              <h2>Add to your feed</h2>
              <img src='/images/feed-icon.svg'/>
          </div>
          <div className='FeedList'>
            <li>
              <a>
                <div className='Avatar'/>
              </a>
              <div>
                <span>#linkdin</span>
                <button>Follow</button>
              </div>
            </li>

            <li>
              <a>
                <div className='Avatar'></div>
              </a>
              <div>
                <span>#Video</span>
                <button>Follow</button>
              </div>
            </li>
          </div>
        </div>
    </div>
  )
}

export default RightHome