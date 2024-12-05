import Pin from "../../assets/pin.svg";
import { useContext } from "react";
import { WeatherContext } from "../../context";
import CloudIcon from "../../assets/cloud.svg";
import HazeIcon from "../../assets/haze.svg";
import RainyIcon from "../../assets/rainy.svg";
import SunIcon from "../../assets/sun.svg";
import ThunderIcon from "../../assets/thunder.svg";
import getFormattedDate from "../../utils/date-utils";

const WeatherHeadline = () => {
  const { weatherData } = useContext(WeatherContext);
  const { location, climate, temperature, time } = weatherData;
  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Clouds":
        return CloudIcon;
      case "Haze":
        return HazeIcon;
      case "Rain":
        return RainyIcon;
      case "Clear":
        return SunIcon;
      case "Thunderstorm":
        return ThunderIcon;
      case "Fog":
        return HazeIcon;
      case "Mist":
        return HazeIcon;
      default:
        return SunIcon;
    }
  };
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {temperature}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={Pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {" "}
        {getFormattedDate(time, "time", false)} -{" "}
        {getFormattedDate(time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadline;
