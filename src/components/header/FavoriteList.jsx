import Favorite from '../../assets/heart.svg';
const FavoriteList = ({onShow}) => {
  return (
    <div className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all text-white">
      <img src={Favorite} alt="" />
      <span onClick={onShow}>Favourite Locations</span>
    </div>
  );
};

export default FavoriteList;
