import React from 'react'
import "./PlansScreen.css";
//plans has to be returned form db
import {useState} from 'react';
import Payment from './Payment';
function PlansScreen() {

  const [pay,setpay]=useState(false);
  
  return (
    <div className='planScreen'>
      { pay? (
           <Payment/>
      ):(
      <div className='flex-container'>
        <div className='flex-box-1 flex-items'>
          <h1 className='head'>basic</h1>
          <h3 className='head1'>$10.99</h3>
          <h4 className='head2'>480p</h4>
          <button className='sub__button' onClick={()=>setpay(true)}>Subscribe</button>
          </div>
          <div className='flex-box-2 flex-items'>
           <h1 className='head'>standard</h1>
           <h3 className='head1'>$18.79</h3>
           <h4 className='head2'>1080p</h4>
           <button className='sub__button'onClick={()=>setpay(true)}>Subscribe</button>
          </div>
          <div className='flex-box-3 flex-items'>
             <h1 className='head'>premium</h1>
             <h3 className='head1'>$24.53</h3>
             <h4 className='head2'>4k+HDR</h4>
             <button className='sub__button' onClick={()=>setpay(true)}>Subscribe</button>
          </div>
      </div>
      )}
    </div>
  )
}

export default PlansScreen
