import React ,{useState}from 'react'
import {  useNavigate } from 'react-router-dom';
import AddProfilescreen from './AddProfilescreen';
import "./Login.css";
import SignupScreen from "./SignupScreen";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function Login() {

const [Signin,setSignin]=useState(false)
const navigate=useNavigate();
const [signup,setSignup]=useState(false);
// const register=(event)=>{
//    event.preventDefault();  //its not working !!!
// }

  return (
    <div className="Login">
      <div className="login__background">
          <img src="https://i.imgur.com/vGdP70t.png" className="login__screenlogo" alt=""></img>
          <div className="logo_grad"/>
      </div>

      <div className='login__body'>
      {Signin || signup? (
        <Routes>
        <Route  path ="/signup" element={<SignupScreen/>}>
         </Route>
         <Route path="/Addprofile" element={<AddProfilescreen/>}>
         </Route>
         </Routes>
        ):(
            <>
            <button className="login__button" onClick={()=>{setSignin(true);navigate('/signup')}}>SignIn</button>
            <button className="login__button1" onClick={()=>{setSignup(true);navigate('/Addprofile')}}>SignUp</button>
            <h1 className='heading'>All Your  Shows In One Place.</h1>
            <h2 className='heading'>Watch anywhere.</h2>
            <h3 className='heading'>Don't have an account?SignUp!!</h3>
            </>
            
        )}        
        </div>
    </div>
  )
}

export default Login
