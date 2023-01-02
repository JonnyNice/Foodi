import RecipeList from './RecipeList';
import React from 'react'

const Home = ({ recipes }) => {
  return (
    <div>Home
      <div className="App">
        <header className="App-header">
          <h1>Hello World</h1>
          <RecipeList recipes={recipes}/>
        </header>
      </div>
    </div>
  )
}

export default Home