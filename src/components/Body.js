import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { RESTRODATA_URL } from "../utils/constant";

const Body = () => {
  const [listofRestro, setListofRestro] = useState([]);
  const [inputBox, setInputBox] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const RestaurantPromotedCard = withPromotedLabel(RestaurantCard);

  console.log(listofRestro);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(RESTRODATA_URL);

      const json = await data.json();
      // console.log(json);
      setListofRestro(
        json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
      );
      setFilteredRestaurants(
        json?.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
      );
    } catch (error) {
      console.log("Error fetching restaurant data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <>
        <h2 className="offline-text">Looks like you are offline ! 🙀</h2>
        <h3 className="offline-text">Please check your internet connection.</h3>
      </>
    );

  return listofRestro.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mt-20">
      <div className="flex m-2">
        <div className="m-4 p-4">
          <input
            type="text"
            placeholder="search for restaurants"
            className="rounded-lg w-96 h-8 border border-solid border-gray-600 hover:border p-2 "
            value={inputBox}
            onChange={(e) => {
              setInputBox(e.target.value);
            }}
          />
          <button
            className="px-4 py-1.5 m-2 w-28 rounded-lg font-medium text-white bg-orange-400 hover:bg-orange-500   "
            onClick={() => {
              // console.log(inputBox);
              const searchFiltered = listofRestro.filter((restro) => {
                return restro.card?.card?.info?.name
                  ?.toLowerCase()
                  .includes(inputBox.toLowerCase().trim());
                // const searchInput = inputBox.toLowerCase().trim();
                // return restroName.includes(searchInput);
              });

              console.log(searchFiltered);
              setFilteredRestaurants(searchFiltered);
            }}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <button
            className=" px-4 py-1.5 m-2 rounded-lg font-medium text-white bg-orange-400 hover:bg-orange-500 "
            onClick={() => {
              const topRatedFiltered = listofRestro.filter(
                (restro) => restro?.card?.card?.info?.avgRating > 4
              );
              setFilteredRestaurants(topRatedFiltered);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="max-h-[650px] overflow-y-auto">
        <div className=" flex flex-wrap m-4 p-4">
          {filteredRestaurants.map((restaurant) => (
            <Link
              className="font-normal "
              key={restaurant.card.card.info.id}
              to={"/restaurants/" + restaurant.card.card.info.id}
            >
              {restaurant.card.card.info.promoted ? (
                <RestaurantPromotedCard resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
