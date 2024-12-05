import { WeatherContext } from "../context";
import { useWeather } from "../hooks";

const WeatherProvider = ({children}) => {
    const {weatherData, error, isLoading } = useWeather();
    return (
        <WeatherContext.Provider value={{weatherData, error, isLoading}}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherProvider;