import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

const AXIOS_API = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
console.log(AXIOS_API)

const ProductGrid = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const endpoint = AXIOS_API ? `${AXIOS_API}/api/products` : "/api/products";

    axios
      .get(endpoint)
      .then((res) => {
        console.log("Products API response:", res.data);

        // CASE 1: backend returns { products: [...] }
        if (Array.isArray(res.data.products)) {
          setProducts(res.data.products);
        }
        // CASE 2: backend returns [...] directly
        else if (Array.isArray(res.data)) {
          setProducts(res.data);
        } 
        else {
          console.error("❌ Unexpected API format:", res.data);
          setProducts([]); // prevents crash
        }
      })
      .catch((err) => {
        console.error("Error fetching products:", err);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Our Dairy Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product._id || product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-3 text-gray-500">Loading products...</p>
        )}
      </div>
    </div>
  );
};

export default ProductGrid;
