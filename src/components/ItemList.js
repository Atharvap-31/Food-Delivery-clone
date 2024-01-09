import React, { useState } from "react";
import { CDN_URL } from "../utils/constant";
import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  console.log(items);

  const handleClick = (item) => {
    dispatch(addItems(item));
  };

  return (
    <div>
      {items.map((item) => {
        return (
          <div
            key={item.card.info.id}
            className="flex justify-between pb-20  border-b-2 mb-4 "
          >
            <div className="w-9/12">
              <p>
                {item.card.info.itemAttribute.vegClassifier === "VEG"
                  ? "🟢"
                  : "🔴"}
              </p>
              <p className="font-semibold">{item.card.info.name}</p>
              <p className="mb-7 font-semibold">
                ₹{item.card.info.price / 100}
              </p>
              <p>{item.card.info.description}</p>
            </div>
            <div>
              <img
                src={CDN_URL + item.card.info.imageId}
                className="w-36 h-28 rounded-xl"
              />
              <button
                onClick={() => handleClick(item)}
                className="bg-slate-100 text-green-400 font-semibold px-4 py-2 shadow-lg absolute rounded-lg -my-6 mx-8 hover:scale-95 transition-all"
              >
                Add +
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
