import { useState } from "react";

function ProductCard({ product, setCartCount }) {
  const [favorite, setFavorite] = useState(false);

  return (
    <div className="product-card">

      {/*Tag*/}
      <span className="tag">☆ Lo nuevo</span>

      {/*Imagen*/}
      <div className="image-container">
        <img src={product.image} alt={product.name} />
      </div>
      {/*Favorito*/}
      <button
        className="favorite"
        onClick={() => setFavorite(!favorite)}
      >
        {favorite ? "❤️" : "🤍"}
      </button>

      {/*Añadir*/}
      <button
        className="add-btn"
        onClick={() => setCartCount((prev) => prev + 1)}
      >
        + Añadir
      </button>

      {/*Información*/}
      <div>
        <h4>{product.brand}</h4>
        <p>{product.name}</p>
      </div>
      <div className="price">
        <strong>S/ {product.price}</strong>
      </div>
    </div>
  );
}

export default ProductCard