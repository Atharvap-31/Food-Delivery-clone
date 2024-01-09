import { MENU_API } from "../utils/constant";
import { useState, useEffect } from "react";

const useRestaurantMenu = (resId) => {
  const [menuItems, setMenuItems] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setMenuItems(json.data);
  };

  return menuItems;
};

export default useRestaurantMenu;
