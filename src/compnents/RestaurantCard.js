import CDN_LINK from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData;
  return (
    <div className="w-[230px] p-2 m-2 rounded-lg bg-gray-200 hover:bg-gray-400">
      <img className="rounded-lg" src={CDN_LINK + cloudinaryImageId} />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h5>{avgRating} Star</h5>
      <h5>₹{costForTwo / 100} FOR TWO</h5>
      <h5>{deliveryTime} minutes</h5>
    </div>
  );
};

export default RestaurantCard;