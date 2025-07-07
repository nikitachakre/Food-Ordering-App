import {CDN_URL} from "../utils/constant"


const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
  } = resData?.card.card.info;

  return (
    <div className="mx-5 mb-3 py-2 md:m-2 px-6 md:p-2 w-72 md:w-56 bg-gray-50 hover:bg-gray-200 active:bg-gray-200 rounded-lg">
      <img
        className="p-1 w-60 md:w-52 h-40 md:h-36 rounded-2xl"
        alt="food-logo"
        src={CDN_URL+cloudinaryImageId}
      />
      <h4 className="font-semibold py-2 text-lg">{name}</h4>
      <p className="font-normal ">{cuisines.join(", ")}</p>
      <p className="font-normal">{avgRating} stars</p>
      <p className="font-normal">₹{costForTwo / 100} FOR TWO</p>
    </div>
  );
};

//Higher Order Component
//Input >>>> RestaurantsCards --- Output>>> PromotedRestaurantcards

 export const withPromotedLabel =(RestaurantCard) => {
  return (props) =>{
    return ( 
      <div className="relative z-10 left-1 md:left-0 ">
        <span className="  absolute top-2 left-6 md:left-4 text-sm text-white bg-orange-400 px-2 py-1 m-1 rounded-lg">Promoted</span>
        <RestaurantCard {...props}/>
      </div>
    );
  }
 }
export default RestaurantCard;

