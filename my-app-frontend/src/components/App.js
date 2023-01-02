import '../App.css';
import React, { useEffect, useState } from "react";

function App() {

  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    fetch("http://localhost:9292/recipes")
      .then((r) => r.json())
      .then((recipes) => setRecipes(recipes));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
    </div>
  );
}

export default App;
