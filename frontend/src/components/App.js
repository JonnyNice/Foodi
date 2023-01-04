import '../App.css';
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar"
import { Switch, Route } from "react-router-dom";
import Recipes from "./Recipes"
import Creators from "./Creators"
import Search from "./Search"
import About from "./About"
import Home from "./Home"
import UserHomePage from "./UserHomePage"
import SHITS_BROKEN from './SHITS_BROKEN';
import RegistrationForm from './RegistrationForm';

function App() {

  const [creatorName, setCreatorName] = React.useState('');

  function handleCreatorNameChange(creatorName) {
    console.log(creatorName);
    window.location.href = `/recipes?creator_name=${creatorName}`;
  }

  return (
    <div>
      <NavBar />
        <Switch>
          <Route path="/recipes" >
            <Recipes creatorName={creatorName} />
          </Route>
          <Route path="/users" >
            <Creators handleCreatorNameChange={handleCreatorNameChange} />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path= "/about">
            <About />
          </Route>
          <Route path= "/create">
            <RegistrationForm />
          </Route>
          <Route exact path="/">
            <Home handleCreatorNameChange={handleCreatorNameChange} />
          </Route>
          <Route path= "/user">
            <UserHomePage />
          </Route>
          <SHITS_BROKEN />
        </Switch>
    </div>
  );
}

export default App;
