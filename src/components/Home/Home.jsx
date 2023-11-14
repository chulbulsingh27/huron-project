import React from "react";
import { Link } from "react-router-dom";
import ImageSlider from "./ImageSlider";
import CardData from "./CardData";
import Header from "../Header/Header";
import Cart from "../cart/Cart";

export default function Home({ cart, setCart }) {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <ImageSlider />
      <CardData cart={cart} setCart={setCart} />     
    </div>
  );
}
