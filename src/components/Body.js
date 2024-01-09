import RestaurantCard, { withLabelOffer } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";

const Body = () => {
  const [resCard, setResCard] = useState([]);
  const [filterRes, setFilterRes] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  // const RestaurantCardOffer = withLabelOffer(RestaurantCard);

  console.log(resCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.0987398&lng=79.0772159&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setResCard(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilterRes(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
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
