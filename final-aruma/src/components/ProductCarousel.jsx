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
        <span className="view-all">Ver todos</span>
      </div>

      <div className="carousel-wrapper">
        <button className="arrow left" onClick={() => scroll("left")}>
          ‹
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

        <button className="arrow right" onClick={() => scroll("right")}>
          ›
        </button>
      </div>
    </section>
  );
}
