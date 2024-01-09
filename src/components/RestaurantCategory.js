import React from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  //console.log(data);

  const handleToggle = () => {
    setShowIndex();
  };

  return (
    <div className="text-center cursor-pointer">
      {/* ACCORDION HEAD */}
      <div className="w-6/12 mx-auto my-4  bg-gray-50 shadow-lg p-2 ">
        <div onClick={handleToggle} className="flex justify-between mb-4">
          <span className="font-bold text-lg mb-2">
            {data.title} ({data.itemCards.length})
          </span>
          {showItems ? <span>⬆️</span> : <span>⬇️</span>}
        </div>
        {showItems && (
          <div className="text-left">
            {/* ACCORDION BODY */}
            <ItemList
              items={data.itemCards}
              setShowIndex={setShowIndex}
              showItems={showItems}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
