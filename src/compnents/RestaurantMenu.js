import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import {useState} from "react";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const restaurantItems=useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState();

  if (restaurantItems === null) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage, cuisines } =
    restaurantItems?.cards[0]?.card?.card?.info;

  const categories = restaurantItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (c)=>
      c.card?.card?.["@type"] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

  return (
    <div className="text-center">
      <h1 className="font-bold my-3 text-lg">{name}</h1>
      <h3 className="font-bold">{cuisines.join(", ")}</h3>
      <h3 className="font-bold">
        {avgRating} - {costForTwoMessage}
      </h3>
      {
        categories.map((category, index) => (
          <RestaurantCategory key={category?.card?.card?.title}
            data={category?.card?.card} show={index==showIndex?true:false} 
            cbFunction={(index)=>setShowIndex(index)} index={index}/>
        ))
      }
    </div>
  );
};

export default RestaurantMenu;
