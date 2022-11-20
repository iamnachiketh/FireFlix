import React, {useState} from 'react'
// import { useNavigate } from 'react-router-dom';
//to add ur details for register the account
import "./AddProfilescreen.css";
import PlansScreen from './PlansScreen';
function AddProfilescreen() {

  const [plans ,setPlans]=useState(false);
  // const navigate=useNavigate();
  return (
    <div>
      {plans?(
      <PlansScreen/>
      ):(
      <div className='addprofilescreen'>
      <form>
        <h1 className='heading'>SignUp</h1>
        <input type="email" placeholder='Email' />
        <input type="name" placeholder='Name' />
        <input type='password' placeholder='Setpassword' />
        <input type="phone number" placeholder='phone number' />
        <button type='submit' onClick={()=>{setPlans(true)}} >Select Plans</button>
     </form>
     </div>
      )}
    </div>
  )
}

export default AddProfilescreen
