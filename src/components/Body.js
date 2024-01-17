import RestaurantCard, { withLabelOffer } from "./RestaurantCard";
import { useEffect, useState } from "react";

import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [resCard, setResCard] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.org/?https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D13.0035068%26lng%3D77.5890953%26is-seo-homepage-enabled%3Dtrue%26page_type%3DDESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setResCard(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRes(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  function filterTopRatedRestuarant() {
    const TopRatedRestuarant = filterRes.filter(
      (res) => res.info.avgRating > 4.1
    );
    setFilterRes(TopRatedRestuarant);
  }

  function filterRestuarant() {
    const filteredRestuarant = resCard.filter((res) => {
      return res.info.name
        .toLowerCase()
        .includes(searchInput.toLocaleLowerCase());
    });
    setFilterRes(filteredRestuarant);
  }

  function fastDel() {
    const fastDelivery = resCard.filter((res) => {
      return res.info.sla.deliveryTime < 24;
    });

    setFilterRes(fastDelivery);
  }

  function pureVeg() {
    const isVeg = resCard.filter((res) => {
      return res.info.veg;
    });

    setFilterRes(isVeg);
  }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <div className="online-status">
        <h1>Internet Connection not Found!!!</h1>
        <h2>Please check your Internet Connection</h2>
      </div>
    );
  }

  if (resCard.length === 0) {
    return (
      <h1 className="w-full m-auto p-4  text-3xl font-bold">LOADING .......</h1>
    );
  }

  return (
    <div className="body">
      <div className="filter flex items-center ml-72 ">
        <div className="m-4 p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="mr-8 border border-solid border-black w-40 rounded-lg py-1 px-3 font-mono"
            placeholder="Search"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="bg-orange-400 font-medium hover:bg-orange-300 px-4 py-2 rounded-lg"
            onClick={filterRestuarant}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4 ">
          <button
            className="mr-6 bg-green-400 hover:bg-green-300 px-4 py-2 font-medium rounded-lg"
            onClick={filterTopRatedRestuarant}
          >
            Rating 4.0+
          </button>
          <button
            className="mr-6 bg-green-400 hover:bg-green-300 px-4 py-2 font-medium rounded-lg"
            onClick={fastDel}
          >
            Fast Delivery
          </button>
          <button
            className="mr-6 bg-green-400 hover:bg-green-300 px-4 py-2 font-medium rounded-lg"
            onClick={pureVeg}
          >
            Pure Veg
          </button>
        </div>
      </div>
      <div className="grid items-start grid-cols-4">
        {filterRes.map((res) => {
          return (
            <Link key={res.info.id} to={"/restaurantmenu/" + res.info.id}>
              <RestaurantCard resData={res} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
export default Body;
