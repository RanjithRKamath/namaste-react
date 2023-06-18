import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/mokcData";
import { useState } from "react";

const Body = () => {
  const [restaurants, setRestaurants]=useState(resList);

  return (
    <div className="body">
      <div className="search">
        <input type="text" className="text-box"></input>
        <input
          type="button"
          value="Submit"
          onClick={()=>{
            updatedRestaurants=restaurants.filter((res)=>res.data.data.avgRating>4)
            setRestaurants(updatedRestaurants)
            }
          }
        ></input>
      </div>
      <div className="restaurantContainer">
        {restaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.data.data.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;