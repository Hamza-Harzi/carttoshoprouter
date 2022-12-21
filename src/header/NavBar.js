import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

function NavBar() {
  return (
    <div className="nav">
      <ul className="nav-ul">
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/About">
            About
          </Link>
        </li>
        <li>
          <Link className="link" to="/SignIn">
            Sign In
          </Link>
        </li>
        <li>
          <Link className="link" to="/SignUp">
            Sign Up
          </Link>
        </li>
      </ul>

      <Link style={{ fontSize: "25px" }} className="link" to="/MyShop">
        <FaShoppingCart />
      </Link>

      <button className="btn-favorite">
        <Link className="link" to="/MyFavoritr">
          Go To Favorite
        </Link>
      </button>
      <div></div>
    </div>
  );
}

export default NavBar;
