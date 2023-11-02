import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const [dummy, setDummy] = useState("abc");
  const onlineStatus=useOnlineStatus();
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            Online Status: {onlineStatus?"✅":"⛔"}
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/aboutus">About US</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>Cart</li>
          <input
            type="button"
            value={loginBtn}
            onClick={() =>
              loginBtn === "Login"
                ? setloginBtn("Logout")
                : setloginBtn("Login")
            }
          ></input>
          <input
            type="button"
            value={dummy}
            onClick={() => {
              setDummy("xyz");
            }}
          ></input>
        </ul>
      </div>
    </div>
  );
};
