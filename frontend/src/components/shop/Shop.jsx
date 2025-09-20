import React from "react";
import Hero from "./Hero";
import ProductGrid from "./ProductGrid";
import InfoRow from "./InfoRow";
import { CartProvider } from "../context/CartContext"; // import your context
import Cart from "./Cart"; // cart component for bottom-right panel

const Shop = () => {
  return (
    <CartProvider>
      <main>
        <Hero />
        <ProductGrid />
        <InfoRow />
        <Cart /> {/* always include the cart component so it shows when items are added */}
      </main>
    </CartProvider>
  );
};

export default Shop;
