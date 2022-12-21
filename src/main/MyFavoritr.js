import React from "react";

function MyFavoritr(props) {
  return (
    <div>
      <h1>this is my favorite page</h1>
      {props.favorite.map((elt, index) => (
        <div className="all-products" key={elt.id}>
          <ul className="ul-home">
            <li>
              <h3>{elt.name}</h3>
            </li>

            <li>
              <span>{elt.date}</span>
            </li>
            <li style={{ marginTop: "20px" }}>
              <span> ${elt.price}</span>
            </li>
            <li>
              <img className="img-products" src={elt.img} alt="" />
            </li>

            <button
              onClick={() => props.removeTodo(elt.id)}
              className="btn-carts"
            >
              Remove
            </button>
          </ul>
        </div>
      ))}
    </div>
  );
}

export default MyFavoritr;

// {console.log("ppppppppppppppppppppppppppppp :>> ", item.id)}
