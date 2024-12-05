/* eslint-disable react/prop-types */
import { LocationContext } from "../context";
import { useState } from 'react';

const LocationProvider = ({ children }) => {
    const [selectedLocation, setSelectedLocation] = useState({
        location: "",
        latitude: "",
        longitude: "",
    })
  return <LocationContext.Provider value={{selectedLocation, setSelectedLocation}} >{children}</LocationContext.Provider>;
};

export default LocationProvider;
