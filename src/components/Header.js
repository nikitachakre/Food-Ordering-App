import { useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const Header = () => {
  const [logBtn, setLogBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();
  
  // Subscribing the store using Selecotr
  const cartItems = useSelector((store)=> store.cart.items)

  return (
    <div className="fixed w-full h-20 top-0 left-0 flex justify-between shadow-lg bg-white z-50 px-4 py-2 ">
      <div className="h-16">
        <img className="w-[80px] md:w-[90px] h-[60px] md:h-[65px]" src={LOGO_URL} />
      </div>
      <div className=" mx-2 my-3 md:my-4 md:mx-4 flex align-item-center">
        <ul className="flex m-1 gap-1 md:gap-5 text-lg ">
          <li>
            <Link to="/" className="font-medium hover:text-orange-600">Home</Link>
          </li>
          <li>
            <Link to="/about" className="font-medium hidden md:inline-block hover:text-orange-600">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="font-medium hover:text-orange-600">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery" className="font-medium hidden md:inline-block hover:text-orange-600">Grocery</Link>
          </li>
          <li>
            <Link to="/cart" className="font-medium hover:text-orange-600 ml-1 md:ml-0">Cart({cartItems.length})</Link>
          </li>
          <li className="font-medium hidden md:inline-block">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          <button
            className="align-item-center font-medium hidden md:inline-block hover:text-orange-600 "
            onClick={() => {
              logBtn === "Login" ? setLogBtn("Logout") : setLogBtn("Login");
            }}
          >
            {logBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
