import { useState, useEffect } from "react";
import RecipeList from './RecipeList';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

function UserHomePage(props) {
  const { username } = props;

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:9292/users/${username}`)
      .then((r) => r.json())
      .then((data) => {
        setUser(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [username]);
  
  console.log(user);

  if (!user) {
    return <div>Loading...</div>;
  }
  return (
    <div className="userHomePage" >
      <div className='spacer2'>
            <RestaurantMenuIcon fontSize='small'/>
            <RestaurantMenuIcon fontSize='small'/>
            <RestaurantMenuIcon fontSize='small'/>
            <RestaurantMenuIcon fontSize='small'/>
            <RestaurantMenuIcon fontSize='small'/>
            <RestaurantMenuIcon fontSize='small'/>
            <RestaurantMenuIcon fontSize='small'/>
            <RestaurantMenuIcon fontSize='small'/>
        </div>
      <div className="userText">
        <h1>{user[0].username}</h1>
        {user[0] && (
        <>

          <img src={user[0].image} alt={user[0].username} className="userHomePic"/>
          <h4>contact: {user[0].email}</h4>
          <h3>About: {user[0].bio}</h3>
        </>
      )}
    </div>
    <h2>Recipes:</h2>
    <RecipeList user={user[0]} />
    <div className='spacer2'>
            <RestaurantMenuIcon fontSize='small'/>
            <RestaurantMenuIcon fontSize='small'/>
            <RestaurantMenuIcon fontSize='small'/>
            <RestaurantMenuIcon fontSize='small'/>
            <RestaurantMenuIcon fontSize='small'/>
            <RestaurantMenuIcon fontSize='small'/>
            <RestaurantMenuIcon fontSize='small'/>
            <RestaurantMenuIcon fontSize='small'/>
        </div>
  </div>
)
}

export default UserHomePage