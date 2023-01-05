import React, { useState } from 'react'
import { useHistory } from  'react-router-dom'
import './formstyle.css'

function RegistrationForm({handleDash}) {

    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //@@test@@
        if (password !== confirmPassword) {
          setMessage('Passwords do not match');
          return
        }
        //@@test
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
        if (!passwordRegex.test(password)) {
          setMessage('Password must be at least 8 characters long, contain at least one letter and one number');
          return
        }
        //@@also test above, but first test passes )
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
                setMessage('User created successfully')
                window.alert('User created successfully, please log in');
                window.location.replace(`/login`);
              } else {
                setMessage('Error creating user')
                window.alert('Error creating user')
              }
            })
            .catch(error => {
              setMessage('Error creating user');
            });
        };

      return (
        <>
        {message && <p>{message}</p>}
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
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
           type="password"
           id="confirm-password"
           value={confirmPassword}
           onChange={(event) => setConfirmPassword(event.target.value)}
          />
          <br />
          <button onClick={handleDash}type="submit">Sign Up</button>
        </form>
        </>
      );
    }

export default RegistrationForm