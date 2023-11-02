import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {

  const { resId } = useParams();
  const restaurantItems=useRestaurantMenu(resId);

  if (restaurantItems === null) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage, cuisines } =
    restaurantItems?.cards[0]?.card?.card?.info;

  const { itemCards } =
    restaurantItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;
  
  const { categories } =
    restaurantItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]
      ?.card?.card;

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines.join(", ")}</h3>
      <h3>
        {avgRating} - {costForTwoMessage}
      </h3>
      <ul>
        {itemCards? itemCards.map((menu) => {
          return (
            <li key={menu.card.info.id}>
              {menu.card.info.name} - Rs.
              {menu.card.info.price / 100 || menu.card.info.defaultPrice / 100}
            </li>
          );
        }):(categories[0].itemCards).map((menu)=>{
          return(
            <li key={menu.card.info.id}>
              {menu.card.info.name} - Rs.
              {menu.card.info.price / 100 || menu.card.info.defaultPrice/100}
            </li>
          )
        })};
      </ul>
    </div>
  );
};

export default RestaurantMenu;
