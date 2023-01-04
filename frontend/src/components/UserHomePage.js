import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import RecipeList from './RecipeList';

function UserHomePage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const creatorName = params.get('creator_name');

  const [creator, setCreator] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:9292/users/${creatorName}`)
      .then((r) => r.json())
      .then((creator) => {
        console.log(creator)
        setCreator(creator)})
        .catch((error) => {
          console.log(error);
        });
  }, [creatorName]);

  if (!creator) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
        <h1>{creator.username}</h1>
        <h3>About: {creator.email}</h3>
        {/* <img src={creator.image} alt={creator.name} /> */}
        <h2>Recipes:</h2>
        <RecipeList creatorName={creator.username} />
    </div>
  );
}

export default UserHomePage;