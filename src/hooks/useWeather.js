import { useState, useEffect, useContext } from "react";
import { LocationContext } from "../context";
const useWeather = () => {
  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    weather: "",
    maxTemp: "",
    minTemp: "",
    humidity: "",
    cloud: "",
    time: "",
    wind: "",
    longitude: "",
    latitude: "",
  });

  const [isLoading, setIsLoading] = useState({
    loading: false,
    message: "",
  });

  const [error, setError] = useState(null);
  const { selectedLocation } = useContext(LocationContext);
 

  const fetchWeatherData = async (longitude, latitude) => {
    try {
      setIsLoading({
        ...isLoading,
        loading: true,
        message: "Loading weather data...",
      });
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${ import.meta.env.VITE_API_KEY }&units=metric`
      );
      if (!response.ok) {
        const errorMessage = `Fetching data failed: ${response.status} ${response.statusText}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      const updateData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        weather: data?.weather[0]?.description,
        maxTemp: data?.main?.temp_max,
        minTemp: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloud: data?.clouds?.all,
        time: data?.dt,
        wind: data?.wind?.speed,
        longitude: data?.coord?.lon,
        latitude: data?.coord?.lat,
      };
      setWeatherData(updateData);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading({
        ...isLoading,
        loading: false,
        message: "",
      });
    }
  };

 

  useEffect(() => {
    setIsLoading({
      ...isLoading,
      loading: true,
      message: "Finding Position...",
    });
    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchWeatherData(selectedLocation.longitude, selectedLocation.latitude);
    } else {
      navigator.geolocation.getCurrentPosition(function (position) {
        fetchWeatherData(position.coords.longitude, position.coords.latitude);
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return {
    weatherData,
    isLoading,
    error,
  };
};

export default useWeather;
