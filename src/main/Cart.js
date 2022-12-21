import React from "react";

function Cart(props) {
  // console.log("object :>> ", props.thisProduct);

  return (
    <div className="one-cart">
      <ul className="ul-home">
        <li>
          <h3>{props.thisProduct.name}</h3>
        </li>

        <li>
          <span>{props.thisProduct.qte}</span>
        </li>
        <li style={{ marginTop: "20px" }}>
          <span> ${props.thisProduct.price}</span>
        </li>
        <li>
          <img className="img-products" src={props.thisProduct.img} alt="" />
        </li>
        <li>
          <button
            onClick={() => props.addToFavorite(props.thisProduct.id)}
            className="btn-carts"
          >
            Add To Favorite
          </button>
        </li>
        <li>
          <button
            onClick={() => props.addToShop(props.thisProduct.id)}
            className="btn-carts"
          >
            Add To Shop
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Cart;

//
