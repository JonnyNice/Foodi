import React, { useState } from 'react'
import { useHistory } from  'react-router-dom'

function RegistrationForm({handleDash}) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("http://localhost:9292/users", {
            method: 'POST',
            body: JSON.stringify({
              username,
              email,
              password
            }),
            headers: {
              'Content-Type': 'application/json'
            }
          })
            .then(response => {
              if (response.ok){
                setUsername('');
                setEmail('');
                setPassword('');
                setMessage('User created successfully');
                window.location.replace(`/login`);
              } else {
                setMessage('Error creating user');
              }
            })
            .catch(error => {
              setMessage('Error creating user');
            });
        };

      return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
          <br />
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <br />
          <button onClick={handleDash}type="submit">Sign Up</button>
        </form>
      );
    }

export default RegistrationForm