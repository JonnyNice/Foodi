import HomeRecipeList from './HomeRecipeList';
import React from 'react'
import HomeCreatorList from './HomeCreatorList'


const Home = ({ handleCreatorNameChange }) => {
  return (
    <div>Home
      <div className="App">
        <header className="App-header">
        <div className='spacer'>--------------</div>
          <div className = "middle-section">Featured Recipes
            <HomeRecipeList />
          </div>
          <div className='spacer'>--------------</div>
          <div className = "bottom-section">Featured Creators
            <HomeCreatorList handleCreatorNameChange={handleCreatorNameChange} />
          </div>
          <div className='spacer'>--------------</div>
        </header>
      </div>
    </div>
  )
}

export default Home