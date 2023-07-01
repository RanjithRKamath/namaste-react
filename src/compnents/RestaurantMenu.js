import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
  const [restaurantItems, setRestaurantItems] = useState(null);

  const { resId } = useParams();

  useEffect(() => {
    let a = fetchRestaurantMenu();
  }, []);

  const fetchRestaurantMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.906497&lng=74.855362&restaurantId=" +
        resId
    );
    const jsonData = await data.json();
    console.log(jsonData.data);
    setRestaurantItems(jsonData.data);
  };

  if (restaurantItems === null) {
    return <Shimmer />;
  }

  const { name, avgRating, costForTwoMessage, cuisines } =
    restaurantItems?.cards[0]?.card?.card?.info;

  const { itemCards } =
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
        {itemCards.map((menu) => {
          return (
            <li key={menu.card.info.id}>
              {menu.card.info.name} - Rs.
              {menu.card.info.price / 100 || menu.card.info.defaultPrice / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
