import React from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import { Switch, Route } from "react-router-dom"

function App() {
  return (
      <div className="App">
        <NavBar />
        <Home />
     </div>
  );
}

export default App;
