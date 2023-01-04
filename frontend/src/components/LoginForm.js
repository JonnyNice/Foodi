import { useState } from 'react';

function LoginForm() {
  // Declare a state variable called "emailOrUsername" and a function to update it
  const [emailOrUsername, setEmailOrUsername] = useState('');
  // Declare a state variable called "password" and a function to update it
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Make a POST request to the '/login' endpoint with the email/username and password
    fetch('localhost:9292/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ emailOrUsername, password }),
    }).then((response) => {
      // If the response is successful, save the user's information in the session and redirect to the dashboard
      if (response.ok) {
        response.json().then((user) => {
          sessionStorage.setItem('user', JSON.stringify(user));
          window.location.replace('/dashboard');
        });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
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