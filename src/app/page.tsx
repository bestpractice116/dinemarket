import React from "react";
import Hero from "../../components/widgets/Hero";
import Products from "../../components/widgets/Products";
import Promotions from "../../components/widgets/Promotions";
import Unique from "../../components/widgets/Unique";
import Newsletter from "../../components/widgets/Newsletter";

export default function Home() {
  return (
    <div>
      <Hero />
      <Promotions />
      <Products />
      <Unique />
      <Newsletter />
    </div>
  );
}
