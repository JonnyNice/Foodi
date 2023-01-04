import { useLocation } from 'react-router-dom';
import { useState, useEffect } from "react";
import RecipeList from './RecipeList';

function UserHomePage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const creatorName = params.get('creator_name');

  const [creator, setCreator] = useState(null);

  useEffect(() => {
    // Fetch the creator data using creatorName
    fetch(`http://localhost:9292/creators/${creatorName}`)
      .then((r) => r.json())
      .then((creator) => {
        console.log(creator)
        setCreator(creator)});
  }, [creatorName]);

  if (!creator) {
    return <div>Loading...</div>;
  }
  
  return (
    <div>
        <h1>{creator.name}</h1>
        <h3>About: {creator.bio}</h3>
        <img src={creator.image} alt={creator.name} />
        <h2>Recipes:</h2>
        <RecipeList creatorName={creator.name} />
    </div>
  );
}

export default UserHomePage;