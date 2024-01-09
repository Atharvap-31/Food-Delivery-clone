import React, { useState } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);

  const { resId } = useParams();

  const menuItems = useRestaurantMenu(resId);

  if (menuItems === null) return <Shimmer />;

  const categoriesList =
    menuItems?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (res) =>
        res.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  const { name, cuisines, costForTwo } = menuItems?.cards[0]?.card?.card?.info;

  return (
    <>
      <div className="text-center">
        <h1 className="font-bold text-2xl mt-6 mb-2">{name}</h1>
        <p className="font-bold text-lg">
          {cuisines.join(", ")}- ₹{costForTwo / 100}
        </p>
        {categoriesList.map((category, i) => (
          <RestaurantCategory
            key={i}
            data={category.card.card}
            showItems={showIndex === i ? true : false}
            setShowIndex={() => setShowIndex(i)}
          />
        ))}
      </div>
    </>
  );
};

export default RestaurantMenu;
