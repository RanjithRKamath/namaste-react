import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.906497&lng=74.855362&offset=15&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING"
    );
    const parsedData = await data.json();
    setRestaurants(parsedData?.data?.cards);
    setFilteredRestaurants(parsedData?.data?.cards);
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }

  return restaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">
        <input
          type="text"
          value={searchParam}
          onChange={(e) => setSearchParam(e.target.value)}
        ></input>
        <input
          type="button"
          value="Submit"
          onClick={() => {
            const filteredRestaurant = restaurants.filter((res) =>
              res.data.data.name
                .toLowerCase()
                .includes(searchParam.toLowerCase())
            );
            setFilteredRestaurants(filteredRestaurant);
          }}
        ></input>
        <input
          type="button"
          value="Top Rated Restaurant"
          className="top-res"
          onClick={() => {
            updatedRestaurants = restaurants.filter(
              (res) => res.data.data.avgRating > 4
            );
            setFilteredRestaurants(updatedRestaurants);
          }}
        ></input>
      </div>
      <div className="restaurantContainer">
        {filteredRestaurants.map((restaurant) => (
          <Link
            to={"/restaurant/" + restaurant.data.data.id}
            key={restaurant.data.data.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
