import { useState, useEffect } from "react";
import RecipeList from './RecipeList';

function UserHomePage(props) {
  const { username } = props;

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
  }, [username]);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="userHomePage" >
      <div className="userText">
        <h1>{user.username}</h1>
        <img src={user.image} alt={user.username} className="userHomePic"/>
        <h4>contact: {user.email}</h4>
        <h3>About: {user.bio}</h3>
        </div>
        <h2>Recipes:</h2>
        <RecipeList user={user} />
    </div>
  );
}

export default UserHomePage;