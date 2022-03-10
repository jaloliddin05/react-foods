import { React, useState } from "react";
import OrderItem from "./order_item";
import "./order.css";

const Order = () => {
  const [local, setLocal] = useState(
    JSON.parse(window.localStorage.getItem("local")) || []
  );

  let shopping_cost = 0;
  local?.forEach((element) => {
    shopping_cost += Number(element.totalCost);
    console.log(element.totalCost);
    console.log(element.name);
  });

  return (
    <div className="order_drop">
      <ul className="order_list">
        {local?.map((items) => {
          return (
            <OrderItem
              key={items?.id}
              id={items?.id}
              name={items?.name}
              totalCost={items?.totalCost}
              totalNum={items?.totalNum}
            />
          );
        })}
      </ul>
      <div className="selling_box">
        <p className="shopping_all_cost">{shopping_cost.toFixed(2)}</p>
        <button className="buy_btn">Buy</button>
      </div>
    </div>
  );
};

export default Order;
