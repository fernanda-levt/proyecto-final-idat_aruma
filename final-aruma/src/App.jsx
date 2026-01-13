import { useState } from "react";
import newProducts from "./data/newProducts";
import bestSellers from "./data/bestSellers";
import Footer from "./components/Footer"
import Header from "./components/header/Header"
import ProductCarousel from "./components/ProductCarousel"
import Categorybar from "./components/Categorybar";
import Phrase from "./components/Phrase";
import PromoGrid from "./components/PromoGrid";
import BannersLinks from "./components/BannersLinks";
import SocialGrid from "./components/SocialGrid";
import Banners from "./components/Banners";

function App() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      <Header />
      <Banners />
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
      <Phrase />
      <PromoGrid />
      <BannersLinks />
      <SocialGrid />
      <Footer />
    </div>
  )
}

export default App