import React, { useContext, useState } from "react";
import "./header.css";
import img_logo from "../images/Mcdonalds.svg";
import MoneyBtn from "./buttons/money_btn";

import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <a href="#" className="logo_link">
            <img
              src={img_logo}
              alt=""
              width={60}
              height={60}
              className="site_logo"
            />
          </a>
          <nav className="nav">
            <ul className="nav_list">
              <li className="nav_item">
                <NavLink className={"nav_menu"} to="/foods">
                  {/* <FoodBtn/> */}Foods
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink className={"nav_menu"} to="/drinks">
                  {/* <Drinksbtn /> */}Drinks
                </NavLink>
              </li>
              <li className="nav_item">
                <NavLink className={"nav_menu"} to="/order">
                  {/* <OrderBtn /> */}Order
                </NavLink>
              </li>
              <li className="nav_item">
                <MoneyBtn />
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
