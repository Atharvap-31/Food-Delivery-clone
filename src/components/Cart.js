import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart, removerItems } from "../utils/cartSlice";
import { Link } from "react-router-dom/dist";

const Cart = () => {
  const cardItems = useSelector((store) => store.cart.items);
  console.log(cardItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const deleteItems = () => {
    dispatch(removerItems());
  };

  return (
    <div>
      <div className="text-center mb-14 flex justify-center items-center">
        <h1 className="text-2xl font-bold mx-10 ">Cart</h1>
        <button
          className=" mr-6 bg-green-400 hover:bg-green-300 px-4 py-2 font-medium rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <button
          className="bg-red-500 hover:bg-red-400 px-4 py-2 font-medium rounded-lg"
          onClick={deleteItems}
        >
          Delete Items
        </button>
      </div>
      <div className="w-6/12 m-auto">
        {cardItems?.length === 0 && (
          <div className="text-center mb-14 items-center ">
            <h1 className="text-xl font-bold mb-4">Your cart is empty</h1>
            <h2 className="text-lg font-semibold mb-4">
              You can go to home page to view more restaurants
            </h2>
            <button className="m-4 bg-orange-400 font-medium hover:bg-orange-300 px-4 py-2 rounded-lg">
              <Link to="/">See Restaurant near you</Link>
            </button>
          </div>
        )}
        <ItemList className="text-left" items={cardItems} />
      </div>
    </div>
  );
};

export default Cart;
