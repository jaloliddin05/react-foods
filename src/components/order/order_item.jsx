import React from "react";
import "./order_item.css";

const OrderItem = ({ id, name, totalCost, totalNum }) => {
  return (
    <li className="orderItem">
      <p className="order_title">{name}</p>
      <div className="order_box">
        <p className="order_num">{totalNum}</p>
        <p className="order_cost">{totalCost}$</p>
      </div>
    </li>
  );
};

export default OrderItem;
