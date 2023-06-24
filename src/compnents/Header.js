import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

export const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  console.log(loginBtn);
  return (
    <div className="Header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact</li>
          <li>Cart</li>
          <li>About US</li>
          <input
            type="button"
            value={loginBtn}
            onClick={() =>
              loginBtn === "Login"
                ? setloginBtn("Logout")
                : setloginBtn("Login")
            }
          ></input>
        </ul>
      </div>
    </div>
  );
};
