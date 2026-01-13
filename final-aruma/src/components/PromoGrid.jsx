const promos = [
  {
    title: "SOLO en Aruma",
    subtitle: "Encuéntralos aquí",
    image: "https://aruma.vtexassets.com/assets/vtex.file-manager-graphql/images/309d2a25-abc1-480c-8047-bf2a51b8e1bf___1d7a7c6436ed7e8d1410a4b52e665f9c.jpg",
    link: "https://www.aruma.pe/solo-en-aruma",
  },
  {
    title: "Muuuchas opciones para regalar",
    subtitle: "Encuentra sus favs aquí",
    image: "https://aruma.vtexassets.com/assets/vtex.file-manager-graphql/images/63b283b1-9b3e-4ff6-b9ec-9c0c943b7fd6___6c1a9660ee7bc5f40b4bbd15ba940612.jpg",
    link: "https://www.aruma.pe/sets-de-regalo",
  },
  {
    title: "No te quedes sin acumular puntos",
    subtitle: "Únete a Magenta Points",
    image: "https://aruma.vtexassets.com/assets/vtex/assets-builder/aruma.aruma-theme/8.0.48/home/segunda/banner-2-3-desk___5db2be14a644d360aa484cc034f32dd1.jpg",
    link: "https://www.aruma.pe/magenta-points/",
  },
];

function PromoGrid() {
  return (
    <div className="promo-grid">
      {promos.map((promo, i) => (
        <a href={promo.link} className="promo-card" key={i}>
          <div className="promo-image">
            <img src={promo.image} alt={promo.title} />
          </div>

          <div className="promo-text">
            <h4>{promo.title}</h4>
            <p>{promo.subtitle}</p>
            <span>Ver todo</span>
          </div>
        </a>
      ))}
    </div>
  );
}

export default PromoGrid