import React from 'react'
import "./SignupScreen.css";

function SignupScreen() {

   const signIn =(event)=>{
     event.preventDefault(); // its not working  has to be changed!! 
   };
  return (
    <div className="SignupScreen">
    <form>
        <h1 className='heading'>SignIn</h1>
        <input type="email" placeholder='Email' />
        <input type='password' placeholder='password' />
        <button type='submit' onclick={signIn}>SignIn</button>
     </form>
    </div>
  )
}

export default SignupScreen
