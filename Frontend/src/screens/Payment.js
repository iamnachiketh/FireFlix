import React from 'react'
import './Payment.css';
function Payment() {
  return (
    <div className='payment__screen'>
      <h1>amount</h1>
      <h3>Select Payment</h3>
      <ul className='list__styling'>
      <form>
      <li><input type='radio' name='payments'/>Debit Card </li>
      <li> <input type='radio' name='payments'/>Credit Card </li>
      <li>  <input type='radio' name='payments'/>Gpay </li>
      <li> <input type='radio' name='payments'/>Phonepay </li>
      </form>
      </ul>
      <button   className='payment__button'>Finish</button>
    </div>
  )
}

export default Payment
