import '../App.css';
import Sidenav from "./Sidenav"
import React, { useState, useLocation } from "react";
import { Switch, Route } from "react-router-dom";
import Recipes from "./Recipes"
import Creators from "./Creators"
import Search from "./Search"
// ***** ORIGINAL CODE *****

import About from "./About"
import Home from "./Home"
import UserHomePage from "./UserHomePage"
import SHITS_BROKEN from './SHITS_BROKEN';
import RegistrationForm from './RegistrationForm';
import { useHistory } from 'react-router-dom';

function App() {
  const history = useHistory();
  const [username, setUsername] = useState('');

  function handleCreatorNameChange(username) {
    setUsername(username);
    history.push(`/userpage?username=${username}`);
  }

  return (
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
            <RegistrationForm />
          </Route>
          <Route exact path="/">
            <Home handleCreatorNameChange={handleCreatorNameChange} />
          </Route>
          <Route path= "/userpage">
            <UserHomePage username={username} />
          </Route>
          <SHITS_BROKEN />
        </Switch>
       
        </main>
    </div>
  );
}

export default App;

// // ***** ORIGINAL CODE *****




// ***** TEST CODE *****

// import '../App.css';
// import Sidenav from "./Sidenav"
// import React, { useState, useLocation } from "react";
// import { Switch, Route } from "react-router-dom";
// import Recipes from "./Recipes"
// import Creators from "./Creators"
// import Search from "./Search"
// import About from "./About"
// import Home from "./Home"
// import UserHomePage from "./UserHomePage"
// import RecipePage from "./RecipePage"
// import SHITS_BROKEN from './SHITS_BROKEN';
// import RegistrationForm from './RegistrationForm';
// import { useHistory } from 'react-router-dom';

// function App() {
//   const history = useHistory();
//   const [username, setUsername] = useState('');

//   function handleCreatorNameChange(username) {
//     setUsername(username);
//     history.push(`/userpage?username=${username}`);
//   }

//   return (
//     <div className="collapse">
//       <Sidenav />
//       <main>
//         <Switch>
//           <Route path="/recipes" >
//             <Recipes creatorName={username} />
//           </Route>
//           <Route path="/users" >
//             <Creators handleCreatorNameChange={handleCreatorNameChange} />
//           </Route>
//           <Route path="/search">
//             <Search />
//           </Route>
//           <Route path= "/about">
//             <About />
//           </Route>
//           <Route path= "/create">
//             <RegistrationForm />
//           </Route>
//           <Route exact path="/">
//             <Home handleCreatorNameChange={handleCreatorNameChange} />
//           </Route>
//           <Route path= "/userpage">
//             <UserHomePage username={username} />
//           </Route>
//           <Route path="/recipes/:id" render={(props) => <RecipePage {...props} />} />
//           <RecipePage />
//         </Switch>
//       </main>
//     </div>
//   );
// }

// export default App;
