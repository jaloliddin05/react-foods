import React, { useState } from "react";
import fastFoods from "./objects";

const FoodsItem = ({ img, name, price, id }) => {
  let [count, entry] = useState(0);
  let numOfOrder = 5;
  //...................
  function Incr() {
    return entry(count + 1);
  }
  //..........
  function Decr() {
    if (count > 0) return entry(count - 1);
  }
  //.................

  function Buy(evt) {
    let local = JSON.parse(window.localStorage.getItem("local")) || [];
    let lll = fastFoods.find((el) => el.id == evt.target.dataset.orderFood);

    lll.totalCost = (price * count).toFixed(2);
    lll.totalNum = count;
    local = [...local, lll];

    const names = new Set();
    local = local.filter((item) =>
      !names.has(JSON.stringify(item)) ? names.add(JSON.stringify(item)) : false
    );

    window.localStorage.setItem("local", JSON.stringify([...new Set(local)]));
    console.log(local);
  }

  return (
    <li className="foods_item">
      <img src={img} alt="" className="foods_img" width={200} height={120} />
      <div className="foods_item_body">
        <p className="food_title">{name}</p>
        <p className="food_cost">{price + "$"}</p>
        <p className="foods_total_cost">{(price * count).toFixed(2)}$</p>
      </div>
      <div className="foods_bottom">
        <div className="number_orders_box">
          <button className="btn_decr" onClick={Decr}>
            -
          </button>
          <p className="number_orders">{count}</p>
          <button className="btn_incr" onClick={Incr}>
            +
          </button>
        </div>
        <button
          data-order-food={id}
          className="btn_korzinka"
          onClick={Buy}
        ></button>
      </div>
    </li>
  );
};

export default FoodsItem;
