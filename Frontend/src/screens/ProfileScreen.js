import React from 'react'
import './ProfileScreen.css';
import {useNavigate} from 'react-router-dom';

function ProfileScreen() {
  const navigate=useNavigate();
  return (
    <div className='profileScreen'>
      <img className="prof__logo"  src="https://i.imgur.com/vGdP70t.png" alt="" onClick={()=>navigate('/homepage')}/>
      <img  className="prof__avatar" src="https://i.imgur.com/TvdSKFV.png" alt=''/>
      <div className='profile__body'>
        <h1>Profile</h1>
        <div className='Profile__info'>
            <img src='https://i.imgur.com/TvdSKFV.png' alt=''/>
            <div className='profile__details'>
              <h1>Profile Name</h1>
        
            <div className='profile__plans'>
              <h3>Plans</h3>
              {/* <PlansScreen/> */}
             <button   className='profile__signout'>Sign Out</button>
             </div>
             </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
