import {LOGO_URL} from "../utils/constants";

export const Header=()=>{
    return (
      <div className="Header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>Contact</li>
            <li>Cart</li>
            <li>About US</li>
          </ul>
        </div>
      </div>
    );
  };