import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

export const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const onlineStatus=useOnlineStatus();
  const {loggedInUser}=useContext(UserContext);
  const cartItems = useSelector((store) => (store.cart.items));

  return (
    <div className="flex justify-between shadow-lg mb-2 border border-black">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex m-4 p-4">
          <li className="px-4">
            Online Status: {onlineStatus?"✅":"⛔"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4">
            <Link to="/aboutus">About US</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart ({cartItems.length} items)</Link>
          </li>
          <input
            type="button"
            value={loginBtn}
            onClick={() =>
              loginBtn === "Login"
                ? setloginBtn("Logout")
                : setloginBtn("Login")
            }
          ></input>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};
