import Favorite from "../../assets/heart.svg";
import RedFavorite from "../../assets/heart-red.svg";
import { useState, useEffect, useContext } from "react";
import { FavoriteContext, WeatherContext } from "../../context";

const AddToFavorite = () => {
  const [isFavorite, setIsFavorite] = useState(false);
  const { favorites, addToFavorite, removeFromFavorite } =
    useContext(FavoriteContext);
  const { weatherData } = useContext(WeatherContext);

  const { location, latitude, longitude } = weatherData;

  const handleFavorite = () => {
    const found = favorites.find((fav) => fav.location === location);
    if (!found) {
      addToFavorite(latitude, longitude, location);
    } else {
      removeFromFavorite(location);
    }
    setIsFavorite(!isFavorite);
  };

  useEffect(() => {
    const found = favorites.find((fav) => fav.location === location);
    setIsFavorite(found);
  }, [favorites,location]);
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavorite}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          {isFavorite ? (
            <span>Remove from Favourite</span>
          ) : (
            <span>Add to Favourite</span>
          )}

          <img src={isFavorite ? RedFavorite : Favorite} alt="" />
        </button>
      </div>
    </div>
  );
};

export default AddToFavorite;
