import React, { useState } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom"
import LocationList from "./LocationList";

function App() {

  const [page, setPage] = useState("/")

  return (
      <div className="App">
       <NavBar onChangePage={setPage} />
            <Routes>
                <Route path="/locations" element={ <LocationList />} />
                <Route exact path="/" element={<Home />} />
                <Route path="*" element={<h1>Sorry, this page does not exist</h1>} />
            </ Routes>
     </div>
  );
}

export default App;
