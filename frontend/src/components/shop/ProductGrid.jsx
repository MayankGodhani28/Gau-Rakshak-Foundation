// ProductGrid.jsx
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Our Dairy Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => <ProductCard key={product._id} product={product} />)
        ) : (
          <p className="text-center col-span-3 text-gray-500">Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
