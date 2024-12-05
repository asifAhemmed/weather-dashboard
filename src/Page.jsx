import Header from "./components/header/Header";
import WeatherBoard from "./components/weather/WeatherBoard";
import useWeather from "./hooks/useWeather";
import { useState,useEffect } from "react";
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterdCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowImage from "./assets/backgrounds/sunny.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";

const Page = () => {
  const { weatherData, isLoading } = useWeather();
  const [bgImage, setBgImage] = useState("");
  const getBackgroundImage = (climate) => {
    switch (climate) {
      case "Rain":
        return RainyDayImage;
      case "Clouds":
        return ScatterdCloudsImage;
      case "Clear":
        return ClearSkyImage;
      case "Snow":
        return SnowImage;
      case "Thunder":
        return ThunderStormImage;
      case "Fog":
        return WinterImage;
      case "Haze":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      default:
        return ClearSkyImage;
    }
  };

  useEffect(() => {
      const backgroundImage = getBackgroundImage(weatherData.climate);
      setBgImage(backgroundImage);
  },[weatherData.climate]);
  return (
    <>
      {isLoading.loading ? (
        <div className="grid place-items-center h-screen bg-gray-400">
          <p className="text-4xl bg-gray-600 text-white p-6 border rounded-md font-semibold">
            {isLoading.message}
          </p>
        </div>
      ) : (
        <div
         style={{ backgroundImage : `url(${bgImage})`}}
         className="grid place-items-center h-screen bg-no-repeat bg-cover">
          <Header />
          <main>
            <section>
              <WeatherBoard />
            </section>
          </main>
        </div>
      )}
    </>
  );
};

export default Page;