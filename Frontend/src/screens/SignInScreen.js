import React,{useState} from 'react'
import "./SignInScreen.css";
import { userAction } from "../features/userSlice";
import { useDispatch } from 'react-redux';
function SignInScreen() {

  const [email,setEmail]=useState("");
 // console.log(email);
 const dispatch= useDispatch();
  const [userpassword,setPassword]=useState("");
   const [login,setlogin]=useState(false);
   function upvote(e){   // function upvote
    e.preventDefault();
    return false
 }
   const callapi = async ()=>{

    console.log('hello',({email:email,password:userpassword}));
   await fetch('http://localhost:3001/login', { method: 'POST',
    headers: {
      'Content-Type':
          'application/json;charset=utf-8'
  },
          body: JSON.stringify({"email":email,"userpassword":userpassword})
  })
          .then(response=>response) // Parsing the data into a JavaScript object
          .then((response)=>{
            if(response.status===401){
              alert("Wrong credetials !!");
            }else{
              alert('loging in!!');
              setlogin(true);
              dispatch(userAction.login());
        }
          })
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

export default SignInScreen
