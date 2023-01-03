import '../App.css';
import React, { useEffect, useState } from "react";
import RecipeList from "./RecipeList"
import NavBar from "./NavBar"
import { Switch, Route, Routes } from "react-router-dom";
import Recipes from "./Recipes"
import Creators from "./Creators"
import Search from "./Search"
import About from "./About"
import Home from "./Home"
import Header from "./Header";
// import "./NavBar.css"

function App() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/recipes")
    .then((r) => r.json())
    .then((recipes) => setRecipes(recipes));
  }, []);



  // Jason's code
  // const [sidebarOpen, setSideBarOpen] = useState(false);

  // const handleViewSidebar = () => {
  //   setSideBarOpen(!sidebarOpen);
  // };




  
  return (
    <div className="App">
      <NavBar />
     <main>
        <Switch>
          <Route path="/recipes" >
            <Recipes />
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
        </main>
    </div>
  );
}

export default App;
