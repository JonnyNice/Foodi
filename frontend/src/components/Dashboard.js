import React from 'react'
import { useState, useEffect } from 'react'
import RecipeList from './RecipeList'

function Dashboard(props) {
    const { username } = props;

    const [user, setUser] = useState(null);
  
    useEffect(() => {
      fetch(`http://localhost:9292/dashboard/${username}`)
        .then((r) => r.json())
        .then((user) => {
          console.log(user)
          setUser(user)})
          .catch((error) => {
            console.log(error);
          });
    }, [username]);
  
    if (!user) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <div>
          <h1>{user.username}</h1>
          <h3>About: {user.email}</h3>
          </div>
          {/* <img src={user.image} alt={user.name} /> */}
          <h2>Recipes:</h2>
          <RecipeList user={user.username} />
      </div>
    );
  }
export default Dashboard