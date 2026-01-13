function Banners() {
  return (
    <section className="banner-wrapper">

      {/*Banner izquierdo*/}
      <div className="banner-card">

        <a href="https://www.aruma.pe/cuidado-de-la-piel/Protecci%C3%B3n-solar?order=OrderByBestDiscountDESC" className="banner-image">
          <img
            src="https://aruma.vtexassets.com/assets/vtex.file-manager-graphql/images/f0e520f5-bb24-4086-81f3-2d8e702068cd___71fb8e525c24078109e6bbda27f53dd8.png"
            alt="Protección perfecta"
          />
        </a>

        <div className="banner-content">
          <h3>Protección perfecta para TI ✨</h3>
          <p>Reaplicar nunca fue tan fácil ☀️</p>

          <a href="https://www.aruma.pe/cuidado-de-la-piel/Protecci%C3%B3n-solar?order=OrderByBestDiscountDESC" className="banner-link">
            Ver todo
          </a>
        </div>
      </div>

      {/*Banner derecho*/}
      <div className="banner-card">

        <a href="https://www.aruma.pe/travel-size" className="banner-image">
          <img
            src="https://aruma.vtexassets.com/assets/vtex.file-manager-graphql/images/10738935-a8d5-4530-a208-ddaade934f09___7c5722481f0dde52623f6e500e72b7fb.png"
            alt="Infaltables vacaciones"
          />
        </a>

        <div className="banner-content">
          <h3>Tus infaltables para estas vacaciones ☀️</h3>
          <p>Descubre tooodos los travel sizes que irán defrente a tu maleta</p>

          <a href="https://www.aruma.pe/travel-size" className="banner-link">
            Ver todo
          </a>
        </div>
      </div>

    </section>
  );
}

export default Banners