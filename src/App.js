import React from "react";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Foods from "./components/foods";
import Drinks from "./components/drinks/drinks";
import Order from "./components/order/order";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index path="foods" element={<Foods />} />
          <Route path="drinks" element={<Drinks />} />
          <Route path="order" element={<Order />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
