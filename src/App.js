import "./App.css";
import Header from "./header/Header";
import MyFooter from "./footer/MyFooter";
import { Routes, Route } from "react-router-dom";
import About from "./main/About";
import Home from "./main/Home";
import SignIn from "./main/SignIn";
import SignUp from "./main/SignUp";
import { ourProducts } from "./Data";
import React, { useState } from "react";
import MyFavoritr from "./main/MyFavoritr";
import MyShop from "./main/MyShop";

function App() {
  const [products, setProducts] = useState(ourProducts);
  const [favorite, setFavorite] = useState([]);
  const [shop, setShop] = useState([]);
  // console.log("Loading", products);
  const addToFavorite = (id) => {
    const item = products.find((x) => x.id === id);
    setFavorite([item, ...favorite]);

    //const filterarray = products.filter((x) => x.id !== id);
    //setProducts(filterarray);
  };

  const addToShop = (id) => {
    const item = products.find((x) => x.id === id);
    setShop([item, ...shop]);
  };

  const removeTodo = (id) => {
    const remainder = favorite.filter((item) => item.id !== id);

    setFavorite(remainder);
  };

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path=""
          exact
          element={
            <Home
              addToFavorite={addToFavorite}
              products={products}
              setProducts={setProducts}
              addToShop={addToShop}
            />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />

        <Route
          path="/myFavoritr"
          element={
            <MyFavoritr
              favorite={favorite}
              setFavorite={setFavorite}
              addToFavorite={addToFavorite}
              setProducts={setProducts}
              products={products}
              removeTodo={removeTodo}
            />
          }
        />
        <Route
          path="/myshop"
          element={
            <MyShop
              shop={shop}
              setShop={setShop}
              addToShop={addToShop}
              setProducts={setProducts}
              products={products}
              removeTodo={removeTodo}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
