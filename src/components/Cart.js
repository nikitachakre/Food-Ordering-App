import { useDispatch, useSelector } from "react-redux";
import CategoryItemsList from "./CategoryItemsList";
import { clearCart } from "../utils/cartSlice";
import { useNavigate } from "react-router";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const navigate = useNavigate(); /// to navigate the home page
  const clickHandler =() => {
    navigate("/");
  }

  return (
    <div className="text-center bg-white mt-24 mx-4 p-5 ">
      {cartItems.length === 0 ? (
        <div className="mt-10 p-4">
          <h1 className="font-bold text-gray-600 text-2xl ">Your cart is empty</h1>
          <p className="text-sm text-gray-700 p-1 mb-2">
            You can go to home page to view more restaurants
          </p>
          <button onClick={clickHandler}className="bg-orange-600 text-white p-2 m-2 font-bold">
            SEE RESTAURANTS NEAR YOU
          </button>
        </div>
      ) : (
        <div>
          <h1 className="text-2xl font-bold underline">Cart</h1>
          <div className="m-2 p-4">
            <button
              onClick={handleClearCart}
              className="px-2 py-1 rounded-lg bg-gray-800 text-white"
            >
              Clear Cart
            </button>
          </div>
          <div className="w-6/12 m-auto  p-4">
            <CategoryItemsList items={cartItems} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
