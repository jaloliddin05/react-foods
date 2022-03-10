import React, { useState } from "react";
import { useRef } from "react";

const MoneyBtn = () => {
  let btn_inner = useRef();
  const [money, setMoney] = useState();

  const handleClick = (event) => {
    let value = event.target.innerText;
    let num = value.substring(0, value.length - 1);
    let newNum = Number(num) + 0.2;
    event.target.innerText = newNum.toFixed(1) + "$";
  };

  return (
    <button ref={btn_inner} onClick={handleClick} className="nav_menu">
      2.0$
    </button>
  );
};

export default MoneyBtn;
