import { useState, useEffect } from "react";
import { MENU_API } from "./constant";

const useRestaurantMenu = (restId) => {
  const [resInfo, setRestInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API + restId);

    const json = await data.json();
    // console.log(json);
    setRestInfo(json.data);
  };

  return resInfo;
};
export default useRestaurantMenu;
