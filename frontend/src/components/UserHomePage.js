import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import RecipeList from './RecipeList';

function UserHomePage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const username = params.get('username');

  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9292/users/${username}`)
      .then((r) => r.json())
      .then((user) => {
        console.log(user)
        setUser(user[0])})
        .catch((error) => {
          console.log(error);
        });
  }, [location]);

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
        <RecipeList creatorName={user.username} />
    </div>
  );
}

export default UserHomePage;