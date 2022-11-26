import React,{useState} from 'react'
import "./SignInScreen.css";
import axios from 'axios';

function SignupScreen() {

  const [email,setEmail]=useState("");
 // console.log(email);
  const [password,setPassword]=useState("");
   function upvote(e){   // function upvote
    e.preventDefault();
    return false
 }
  const callapi = ()=>{
    console.log('hello',({email:email,password:password}));
    fetch('http://localhost:5000/login', { method: 'POST',
    headers: {
      'Content-Type':
          'application/json;charset=utf-8'
  },
          body: JSON.stringify({"email":email,"userpassword":password})
  })
          .then(response=>response) // Parsing the data into a JavaScript object
          .then(json => console.log(json));
  }
  
  return (
    <div className="SignupScreen">
    <form onSubmit={upvote}>
        <h1 className='heading'>SignIn</h1>
        <input type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
        <input type='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />
        <button type='submit' onClick={callapi}>signin</button>
             </form>
    </div>
  )
}

export default SignupScreen
