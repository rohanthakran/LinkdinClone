import React from 'react'
import "./Signin.css"
function Signin() {
  return (
    <div>
        <div className='Signin'>
            <a className='linkdin-logo'>
                 <img src='/images/Linkedin-Logo-2011-2019.png'/>
            </a>
        </div >

        <div className='main_content'>
                <div className='form'>
                <form action="/">

                <label for="fname">First name:</label>
                <input type="text" id="fname" name="fname"/><br/><br/>

                <label for="lname">Last name:</label>
                <input type="text" id="lname" name="lname"/><br/><br/>
                
                <input type="submit" value="Submit"/>
                </form>
                </div>

        </div>
    </div>
  )
}

export default Signin