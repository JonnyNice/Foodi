import '../App.css';
import React, { useEffect, useState } from "react";
import NavBar from "./NavBar"
import { Switch, Route } from "react-router-dom";
import Recipes from "./Recipes"
import Creators from "./Creators"
import Search from "./Search"
import About from "./About"
import Home from "./Home"

function App() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/recipes")
      .then((r) => r.json())
      .then((recipes) => setRecipes(recipes));
  }, []);

  return (
    <div>
      <NavBar />
        <Switch>
          <Route path="/recipes" >
            <Recipes />
          </Route>
          <Route path="/creators" >
            <Creators />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path= "/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home recipes={recipes} />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
