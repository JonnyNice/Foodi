import '../App.css';
import React from "react";
import Sidenav from "./Sidenav"
import { Switch, Route } from "react-router-dom";
import Recipes from "./Recipes"
import Creators from "./Creators"
import Search from "./Search"
import About from "./About"
import Home from "./Home"


// ***** ORIGINAL CODE *****
function App() {


  return (
  
    <div className="collapse">
      <Sidenav />
      <main>
        <Switch>
          <Route path="/recipes" >
            <Recipes />
          </Route>
          <Route path="/cooks" >
            <Creators />
          </Route>
          <Route path="/search">
            <Search />
          </Route>
          <Route path= "/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home  />
          </Route>
        </Switch>
        </main>
    </div>
  
  );
}

export default App;
// ***** ORIGINAL CODE *****




// ***** TEST CODE *****

// function App() {
//   return (
//     <div className="App">
//       <NavBar/>
//       <main>
//       <Switch>
//         <Route exact path="/" element={<Home />}/>
//         <Route path="/recipes" element={<Recipes />} />
//         <Route path="/cooks" element={<Creators />}/>
//         <Route path="/about" element={<About />} />
//       </Switch>
//       </main>
     
//     </div>
//   );
// }

// export default App;

