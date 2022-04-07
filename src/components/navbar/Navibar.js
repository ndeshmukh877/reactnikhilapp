import React, { useState } from 'react'
import "./navbar style/Navibar.css"


const Navbar = () => {

const [username, setUserName] = useState();
const[password, setPassword] = useState();



  return (
    <>
        <div className='form'>
            <div className='login-form'>
                <div className='title'>SIGN-IN</div>
            </div>
        <form action="">
         <div className='input-container'>
            <label >Username</label>
            <input type="text" required />
         </div>
         <div className='input-container'>
             <label htmlFor="password">Password</label>
             <input type="password" name="password" id="password"  required/>

         </div>
        </form>

        <div className='button-container'>
            <input type="submit" />

        </div>
          </div>
    </>
  )
}

export default Navbar