import React,{useState} from 'react'
import "./SignupScreen.css";
import axios from 'axios';

function SignupScreen() {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  return (
    <div className="SignupScreen">
    <form>
        <h1 className='heading'>SignIn</h1>
        <input type="email" placeholder='Email' onChange={(e)=>{setEmail(e.target.value)}} />
        <input type='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />
        <button type='submit' onClick={async ()=>{
         const res= await axios.post('http://localhost:5000/login',{
            email:email,
            userpassword:password
          })
           console.log(res.data);
        }}>signin</button>
             </form>
    </div>
  )
}

export default SignupScreen
