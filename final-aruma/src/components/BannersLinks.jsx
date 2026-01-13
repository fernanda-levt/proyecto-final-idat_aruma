const banners = [
  { image: "https://aruma.vtexassets.com/assets/vtex.file-manager-graphql/images/166ddb84-cb23-4aa0-9849-9df7e15d64fd___06eb7dc8ffaf16d351ab0ab12cbd469f.png",
    link: "https://www.aruma.pe/exfoliantes-y-cremas-corporales"
  },
  { image: "https://aruma.vtexassets.com/assets/vtex.file-manager-graphql/images/e25e5668-d04d-49ed-ade8-2651447c8edf___9eb8abbc5a4d615ef016755616c46cda.png",
    link: "https://www.aruma.pe/cuidado-del-cabello?order=OrderByBestDiscountDESC"
  },
];

function BannersLinks() {
  return (
    <div className="banners-links">
      {banners.map((b, i) => (
        <a href={b.link} key={i}>
          <img src={b.image} alt="banner" />
        </a>
      ))}
    </div>
  );
}

export default BannersLinks
