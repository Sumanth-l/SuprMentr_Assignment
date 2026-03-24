import { useState } from "react";
import { products } from "./data";
import ProductCard from "./components/ProductCard";

function App() {
  const [category, setCategory] = useState("All");

  const filteredProducts =
    category === "All"
      ? products
      : products.filter(p => p.category === category);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>🛍️ Product Listing</h1>

      <select
        onChange={(e) => setCategory(e.target.value)}
        style={{ padding: "10px", marginBottom: "20px" }}
      >
        <option>All</option>
        <option>Electronics</option>
        <option>Clothing</option>
        <option>Footwear</option>
        <option>Accessories</option>
      </select>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center"
      }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;