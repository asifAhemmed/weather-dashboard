import Page from "./Page";
import { FavoriteProvider, WeatherProvider } from "./providers";
import LocationProvider from "./providers/LocationProvider";

const App = () => {
  return (
    <LocationProvider>
      <WeatherProvider>
        <FavoriteProvider>
          <Page />
        </FavoriteProvider>
      </WeatherProvider>
    </LocationProvider>
  );
};

export default App;
