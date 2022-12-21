import React from "react";
import NavBar from "./NavBar";
import NavSearch from "./NavSearch";

function Header() {
  return (
    <div className="my-header">
      <NavBar />
      <NavSearch />
    </div>
  );
}

export default Header;
