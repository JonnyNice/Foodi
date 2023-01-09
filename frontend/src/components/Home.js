import HomeRecipeList from './HomeComponents/HomeRecipeList';
import React from 'react'
import HomeCreatorList from './HomeComponents/HomeCreatorList'
import homepic from "./*Pictures/homepic.jpg";
import "./CSS/home.css";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';

const Home = ({ handleCreatorNameChange }) => {
  return (
    <div className="App">
      <div className="home__header">
        <img src={homepic} alt="Header image" />
        <div className="home__header-text">Foodi.</div>
      </div>
      <div className="home__content">
      <div className='spacer'>
          <RestaurantMenuIcon fontSize='small'/>
          <RestaurantMenuIcon fontSize='small'/>
          <RestaurantMenuIcon fontSize='small'/>
          <RestaurantMenuIcon fontSize='small'/>
          <RestaurantMenuIcon fontSize='small'/>
          <RestaurantMenuIcon fontSize='small'/>
          <RestaurantMenuIcon fontSize='small'/>
          <RestaurantMenuIcon fontSize='small'/>
      </div>
        <div className="middle-section">
          <h1>Featured Recipes</h1>
          <HomeRecipeList />
        </div>
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
        <div className="bottom-section">
          <h1>Featured Foodies</h1>
          <HomeCreatorList handleCreatorNameChange={handleCreatorNameChange} />
        </div>
      </div>
    </div>
  )
}

export default Home
