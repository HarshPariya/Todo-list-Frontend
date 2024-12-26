import React from 'react'
import { useState } from 'react';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();

function onSubmit(e){
  e.preventDefault()
}
  return (
    <div>
    <form method='POST' onSubmit={onSubmit} >
      <div>
      <h1>Register Form</h1>
    <input type="text"
     placeholder="Enter your Email" 
     onChange={(e) => setEmail(e.target.value)} />
     
    <input type="password"
     placeholder="Enter your Password"
    onChange={(e) => setPassword(e.target.value)} />
    <button type='submit'>Submit</button>
      </div>
    </form>
    </div>
  )
}
export default RegisterForm