import { useState } from "react";
import newProducts from "./data/newProducts";
import bestSellers from "./data/bestSellers";
import Footer from "./components/Footer"
import Header from "./components/header/Header"
import ProductCarousel from "./components/ProductCarousel"
import Categorybar from "./components/Categorybar";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Header />
      <ProductCarousel
        title="Lo más nuevo"
        products={newProducts}
        setCartCount={setCartCount}
      />
      <Categorybar />
      <ProductCarousel
        title="Lo más vendido"
        products={bestSellers}
        setCartCount={setCartCount}
      />
      <Footer />
    </div>
  )
}

export default App