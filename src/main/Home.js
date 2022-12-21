import React, { useState } from "react";
import Carts from "./Carts";

function Home(props) {
  const [searchInput, setSearchInput] = useState("");

  const searchItems = (searchValue) => {
    // console.log("hhhhhhhhhhhhhhhhhhhh :>> ", searchValue);
    setSearchInput(searchValue);
    const filteredData = props.products.filter((item) => {
      return item.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1;
    });

    props.setProducts(filteredData);
  };
  //   console.log("objfezgzegzehhhhhhhhhhhhhhhhhhggezect :>> ", searchInput);
  return (
    <div>
      <div className="my-input">
        <input
          className="input-header"
          type="text"
          placeholder="Search Your Product"
          onChange={(e) => searchItems(e.target.value)}
        />
        <button onClick={props.filteredData} className="btn-header" type="text">
          Search
        </button>
      </div>
      <div>
        <Carts
          addToFavorite={props.addToFavorite}
          products={props.products}
          setProducts={props.setProducts}
          addToShop={props.addToShop}
        />
      </div>
    </div>
  );
}

export default Home;
