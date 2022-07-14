import React, { useState, useEffect } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom"
import NewLocation from "./NewLocation";
import Passport from "./Passport";
import LocationList from "./LocationList";
import BucketList from "./BucketList";
import ComponentDetail from "./ComponentDetail";

function App() {
  
  const [locations, setLocations] = useState([])
  const [passport, setPassport] = useState([])
  const [bucketList, setBucketList] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/locations")
        .then(r => r.json())
        .then(data => setLocations(data))
}, [])

  return (
      <div className="App">
       <NavBar />
            <Routes>
                <Route path="/locations/*" element={<LocationList locations={locations}/>} />
                <Route path="locations/new" element={<NewLocation locations={locations} setLocations={setLocations} />} />
                <Route exact path="/" element={<Home />} />
                <Route path="/mypassport" element={<Passport passport={passport} />} />
                <Route path="locations-detail/:id" element={<ComponentDetail 
                locations={locations}
                passport={passport} 
                setPassport={setPassport} 
                bucketList={bucketList} 
                setBucketList={setBucketList}
                />} />
                <Route path="/mybucketlist" element={<BucketList bucketList={bucketList} />} />
                <Route path="*" element={<h1>Sorry, this page does not exist</h1>} />
            </ Routes>
     </div>
  );
}

export default App;
