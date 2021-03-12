import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Order from "./Order";

const promise = loadStripe(
  "pk_test_51HRelSI8pkipgQtYdv7yOBaiMe2qZADecpQQ6IFNBM8ldLGlzWWlWBiHs8fdPoc3NgmOdPdEzYvVK3NsqOoBsXbW00UaTq3pRt"
);

function App() {
  const [{}, dispatch] = useStateValue();
  useEffect(() => {
    // will only run when the app component loads
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>>", authUser?.email);
      if (authUser) {
        // the user just logged in OR th euser was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM convention 'app' instead of 'App'
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
            <Order />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
