import React, { useState } from "react";

function MyShop(props) {
  const [sum, setSum] = useState(0);

  const updateSumDecrement = (id) => {
    /*   setSum(0); */
    /*     props.shop.forEach((element) => {
      setSum(element.qte * element.price);
    });
    console.log("sum", sum);
    console.log("obdhghgyycgdgject :>> ", props.shop); */
    const elt = props.shop.find((elt) => elt.id === id);
    setSum(sum - elt.price);
  };
  const updateSumIncrement = (id) => {
    const elt = props.shop.find((elt) => elt.id === id);
    setSum(sum + elt.price);
  };

  const increment = (id) => {
    const newTable = props.shop.map((elt) => {
      if (elt.id === id) {
        return { ...elt, qte: elt.qte + 1 };
      } else {
        return elt;
      }
    });
    props.setShop(newTable);
    updateSumIncrement(id);
  };

  const decrement = (id) => {
    const newTable = props.shop.map((elt) => {
      if (elt.id === id && elt.qte > 0) {
        return { ...elt, qte: (elt.qte -= 1) };
      } else {
        return elt;
      }
    });

    props.setShop(newTable);
    updateSumDecrement(id);
  };
  return (
    <div>
      <h1>this is my shop page</h1>
      {props.shop.map((item, index) => (
        <div className="all-products" key={item.id}>
          <ul className="ul-home">
            <li>
              <h3>{item.name}</h3>
            </li>

            <li>
              <span>{item.date}</span>
            </li>
            <li style={{ marginTop: "20px" }}>
              <span> ${item.price}</span>
            </li>
            <li>
              <img
                className="img-products"
                style={{ marginTop: "20px" }}
                src={item.img}
                alt=""
              />
            </li>

            <button
              onClick={() => props.removeTodo(item.id)}
              className="btn-carts"
            >
              Remove
            </button>
            <div>
              <button className="btn-carts" onClick={() => increment(item.id)}>
                +
              </button>

              <span style={{ fontSize: "25px" }}>{item.qte}</span>
              <button className="btn-carts" onClick={() => decrement(item.id)}>
                -
              </button>
            </div>
          </ul>
        </div>
      ))}
      <h1>{sum}</h1>
    </div>
  );
}

export default MyShop;

// <h1>MyShop</h1>
