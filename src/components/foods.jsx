import React, { useRef, useState } from "react";
import "./foods.css";
import FoodsItem from "./foods_Item";
import fastFoods from "./objects";

const Foods = ({ change }) => {
  const [food, setFood] = useState(fastFoods);

  return (
    <div className={"foodDrop"}>
      <ul className="foods_list">
        {food.map((items) => {
          return (
            <FoodsItem
              key={items.id}
              id={items.id}
              img={items.img}
              price={items.price}
              name={items.name}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Foods;
