import React from 'react';
import { Route, useMatch } from "react-router-dom";
import LocationList from './LocationList';
import LocationCard from './LocationCard';

const LocationsPage = ({ locations, setLocations, location, setLocation, passport, setPassport }) => {
    const match = useMatch()
    console.log(match)
    return (
    <div>LocationsPage</div>
  )
}

export default LocationsPage