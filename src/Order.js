import React from "react";
import "./Order.css";
import CheckoutProduct from "./CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Order() {
  const [{ basket }, dispatch] = useStateValue();

  const emptyBasket = () => {
    console.log(basket.length);
    return (basket.length = 0);
  };
  return (
    <div className="order">
      <h2>Order</h2>
      {basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: {value}</h3>
        )}
        decimalScale={2}
        value={getBasketTotal()}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      {emptyBasket}
    </div>
  );
}

export default Order;
