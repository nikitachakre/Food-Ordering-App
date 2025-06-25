import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { restId } = useParams();
  const [showIndex, setShowIndex] = useState(null);

  const resInfo = useRestaurantMenu(restId);

  if (resInfo === null) return <Shimmer />;

  const { name, avgRatingString, costForTwoMessage, cuisines } =
    resInfo?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card ||
  //   resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
  // console.log(itemCards);
  // console.log(resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards);

  const categories =
    resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter(
      (category) =>
        category.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  // console.log(categories);

  return (
    <div className="mt-32  text-center bg-white">
      <h2 className="font-bold my-4 text-3xl">{name}</h2>
      <p className="font-semibold my-2">
        {avgRatingString} ratings - {costForTwoMessage}
      </p>
      <p className="font-semibold underline mb-10">{cuisines.join(" ,")}</p>
      {/**categories accordian */}
      {categories.map((category, index) => (
        <RestaurantCategory
          data={category?.card?.card}
          key={category?.card?.card?.categoryId}
          showItems={index === showIndex} // one acccordian open at one time
          setShowIndex={() => {
            if (showIndex === index) {
              setShowIndex(null); //collapse the same index
            } else {
              setShowIndex(index); //expand
            }
          }}
        />
      ))}
    </div>
  );
};
export default RestaurantMenu;
