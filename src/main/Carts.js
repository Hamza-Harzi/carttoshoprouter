import React, { useState } from "react";
import { ourProducts } from "../Data";
import Cart from "./Cart";

function Carts(props) {
  const [page, setPage] = useState(0);
  const [items, setTtems] = useState(5);

  return (
    <div>
      <div className="all-products">
        {props.products
          .slice(0 + items * page, items + items * page)
          .map((item, index) => {
            return (
              <Cart
                addToFavorite={props.addToFavorite}
                key={item.id}
                thisProduct={item}
                addToShop={props.addToShop}
              />
            );
          })}
      </div>
      <div className="paginationItems">
        {props.products
          .slice(0, props.products.length / items)
          .map((item, index) => {
            return <div onClick={() => setPage(index)}>{index + 1}</div>;
          })}
      </div>
    </div>
  );
}

export default Carts;
