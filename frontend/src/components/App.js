import '../App.css';
import Sidenav from "./Sidenav"
import React, { useState, useLocation } from "react";
import { Switch, Route } from "react-router-dom";
import Recipes from "./Recipes"
import Creators from "./Creators"
import Search from "./Search"
import About from "./About"
import Home from "./Home"
import UserHomePage from "./UserHomePage"
import SHITS_BROKEN from './SHITS_BROKEN';
import RegistrationForm from './RegistrationForm';
import { useHistory } from 'react-router-dom';
import RecipePage from './RecipePage';
import LoginForm from './LoginForm';
import Dashboard from "./Dashboard"


function App() {
  const history = useHistory();
  const [username, setUsername] = useState('');

  function handleCreatorNameChange(username) {
    setUsername(username);
    history.push(`/users/${username}`);
  }

  function handleDashName(username) {
    setUsername(username);
    history.replace(`/dashboard/${username}`);
  }

  return (
    <>
    <div className="collapse">
    <Sidenav />
      <main>
        <Switch>
          <Route path="/recipes" >
            <Recipes creatorName={username} />
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
            <RegistrationForm handleDashName={handleDashName}/>
          </Route>
          <Route path= "/login">
            <LoginForm handleDashName={handleDashName}/>
          </Route>
          <Route exact path="/">
            <Home handleCreatorNameChange={handleCreatorNameChange} />
          </Route>
          <Route path="/dashboard/:username" >
            <Dashboard username={username} />
          </Route>
          <Route path= "/user">
            <UserHomePage username={username} />
          </Route>
          <Route path="/recipepage" >
            <RecipePage onClick={handleCreatorNameChange} />
          </Route>
          <SHITS_BROKEN />
        </Switch>
        <div>
        </div>
        </main>
    </div>
    </>
  );
}

export default App;
