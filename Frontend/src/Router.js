import React from 'react'
import HomeScreen from './screens/HomeScreen'
import SignInScreen from './screens/SignInScreen'
import PlansScreen from './screens/PlansScreen'
import ProfileScreen from './screens/ProfileScreen'
import Payment from './screens/Payment'
import Login from './screens/Login'
import AddProfilescreen from './screens/AddProfilescreen'
import { BrowserRouter,
     Routes, 
     Route 
    } from 'react-router-dom';

function Router() {
  return (
    <div className='Routes'>
       <Routes>
       <Route path='/homepage' element={<HomeScreen/>}/>
       <Route path='/signin' element={<SignInScreen/>}/>
       <Route path='/plans' element={<PlansScreen/>}/>
       <Route path='/profile' element={<ProfileScreen/>}/>
       <Route path='/payments' element={<Payment/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/addprofile' element={<AddProfilescreen/>}/>

       </Routes>
    </div>
  )
}

export default Router
