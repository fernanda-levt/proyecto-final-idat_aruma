import { useRef } from "react";
import ProductCard from "./ProductCard";

export default function ProductCarousel({
  title,
  products,
  setCartCount
}) {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    const amount = 300;
    carouselRef.current.scrollLeft +=
      direction === "left" ? -amount : amount;
  };

  return (
    <section className="carousel-section">
      <div className="carousel-header">
        <h2>{title}</h2>
        <a href="#">Ver todos</a>
      </div>

      <div className="carousel-wrapper">
        <button className="btn-arrow" onClick={() => scroll("left")}>
          🡠
        </button>

        <div className="carousel" ref={carouselRef}>
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              setCartCount={setCartCount}
            />
          ))}
        </div>

        <button className="btn-arrow" onClick={() => scroll("right")}>
          🡢
        </button>
      </div>
    </section>
  );
}
