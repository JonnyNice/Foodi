import { useState } from 'react';

function LoginForm({handleDashName}) {

  const [emailOrUsername, setEmailOrUsername] = useState('');

  const [password, setPassword] = useState('');

  // *****TESTING*****
  const [message, setMessage] = useState('');
  // *****TESTING*****

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
         // *****TESTING*****
        setMessage(responseBody.error);
         // *****TESTING*****
      } else {
        sessionStorage.setItem('user', JSON.stringify(responseBody));
         // *****TESTING*****
        setMessage('User created successfully')
        window.alert('Success!')
         // *****TESTING*****
        // window.location.replace(`/dashboard?username=${emailOrUsername}`)
        handleDashName(emailOrUsername);
      }
    });
  };
  

  return (
     // *****TESTING*****
     <>
      {message && <p>{message}</p>}
    <form onClick={handleSubmit}>
      <label htmlFor="emailOrUsername">
        Email or username:
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
    </>
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