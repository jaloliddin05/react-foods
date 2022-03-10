import React from "react";
import drinks from "../objectsDrink";
import Drinksitem from "./drinksItem";
import "../foods.css";

const Drinks = () => {
  return (
    <>
      <div className={"foodDrop"}>
        <ul className="foods_list">
          {drinks.map((items) => {
            return (
              <Drinksitem
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
    </>
  );
};

export default Drinks;
