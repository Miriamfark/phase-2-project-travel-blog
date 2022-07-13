import React, { useState } from "react";
import Home from "./Home";
import NavBar from "./NavBar";
import { Routes, Route } from "react-router-dom"
import NewLocation from "./NewLocation";
import Passport from "./Passport";
import LocationList from "./LocationList";
import BucketList from "./BucketList";

function App() {
  
  const [locations, setLocations] = useState([])
  const [location, setLocation] = useState()
  const [passport, setPassport] = useState([])
  const [bucketList, setBucketList] = useState([])

  return (
      <div className="App">
       <NavBar />
            <Routes>
                <Route path="/locations/*" element={<LocationList
                locations={locations}
                setLocations={setLocations}
                location={location}
                setLocation={setLocation}
                passport={passport}
                setPassport={setPassport}
                bucketList={bucketList}
                setBucketList={setBucketList}
                />} />
                <Route path="locations/new" element={<NewLocation />} />
                <Route exact path="/" element={<Home />} />
                <Route path="/mypassport" element={<Passport passport={passport} />} />
                <Route path="/mybucketlist" element={<BucketList bucketList={bucketList} />} />
                <Route path="*" element={<h1>Sorry, this page does not exist</h1>} />
            </ Routes>
     </div>
  );
}

export default App;
