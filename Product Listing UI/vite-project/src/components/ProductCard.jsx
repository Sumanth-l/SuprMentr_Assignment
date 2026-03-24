function ProductCard({ product }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "15px",
      width: "200px",
      margin: "10px",
      textAlign: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
    }}>
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <p>{product.category}</p>
    </div>
  );
}

export default ProductCard;