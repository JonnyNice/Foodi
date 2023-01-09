import { useState } from 'react';
import './CSS/formstyle.css'

function LoginForm({handleDashName}) {

  const [emailOrUsername, setEmailOrUsername] = useState('');

  const [password, setPassword] = useState('');

  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:9292/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailOrUsername, password }),
    }).then((response) => {
      return response.json();
    }).then((responseBody) => {
      if (responseBody.error) {
        // Handle unsuccessful login
        console.log('Invalid email/username or password');
        setMessage(responseBody.error);
      } else {
        sessionStorage.setItem('user', JSON.stringify(responseBody));
        setMessage('User created successfully')
        window.alert('Success!')
        handleDashName(emailOrUsername);
      }
    });
  };
  

  return (
     // *****TESTING*****
     <div className='formpad'>
      {message && <p>{message}</p>}
    <form onClick={handleSubmit}>
      <label htmlFor="emailOrUsername">
        Username:
        <input
          type="text"
          id="emailOrUsername"
          value={emailOrUsername}
          onChange={(event) => setEmailOrUsername(event.target.value)}
        />
      </label>
      <br />
      <label htmlFor="password">
        Password:
        <input
          type="password"
          id="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button type="submit">Log in</button>
    </form>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <p style={{ color: '#588157' }}>-----</p>
    </div>
  );
}

export default LoginForm






// import React from 'react'

// function LoginForm() {
//   return (
//     <form action="/login" method="POST">
//         <label for="username-or-email">Username or email:</label>
//         <input type="text" id="username-or-email" name="username-or-email" required/>
//         <br />
//         <label for="password">Password:</label>
//         <input type="password" id="password" name="password" required/>
//         <br />
//         <button type="submit"> Log in</button>
//     </form>
//   )
// }

// export default LoginForm