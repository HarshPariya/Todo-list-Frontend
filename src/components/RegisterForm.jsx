import React, { useState } from 'react';

function RegisterForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function onSubmit(e) {
    e.preventDefault();
    const data = {
      email,
      password,
    };

    console.log('Form Submitted', data);
  }

  return (
    <div>
      <form method='POST' onSubmit={onSubmit}>
        <div>
          <h1>Register Form</h1>
          <input 
            type="text"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
