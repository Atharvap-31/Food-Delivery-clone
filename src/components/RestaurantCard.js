import React from "react";
import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import UserContext from "../utils/UserContext";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, cloudinaryImageId, costForTwo, sla } =
    resData?.info;

  const { loggedInUser } = useContext(UserContext);

  return (
    <div
      data-testid="resCard"
      className="p-4 w-[300px] m-auto rounded-lg hover:scale-95 transition-all"
    >
      <img
        className="size-56 pb-3 rounded-lg cover-fit "
        src={`${CDN_URL}${cloudinaryImageId}`}
        alt="res-logo"
      />
      <div className="px-2 ">
        <h3 className="font-bold text-lg">{name}</h3>
        <div className="flex font-bold pb-2">
          <span className="pr-4">⭐{avgRating} </span>
          <span>{sla.slaString}</span>
        </div>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

export const withLabelOffer = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <RestaurantCard {...props} />
        <label>120 off</label>
      </div>
    );
  };
};

export default RestaurantCard;
