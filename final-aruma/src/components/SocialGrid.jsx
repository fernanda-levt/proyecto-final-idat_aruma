const socials = [
  { image: "https://aruma.vtexassets.com/assets/vtex.file-manager-graphql/images/ffa45992-2994-4e22-860b-883117e27f69___66d132cf565a21629d9db249447b5493.png",
    link: "https://www.instagram.com/p/DQsQ1XLDdEN/"
  },
  { image: "https://aruma.vtexassets.com/assets/vtex.file-manager-graphql/images/f0fc5376-3365-4217-b1ef-54e665932b56___ca93a66d1e35b9f12b5e44edf467ffc6.png",
    link: "https://www.instagram.com/p/DP__ke4jRva/"
  },
  { image: "https://aruma.vtexassets.com/assets/vtex.file-manager-graphql/images/45354f55-9ac3-44dc-8ed8-f3180fb4a1c8___01a656fd653af49561d114398549691b.png",
    link: "https://www.instagram.com/p/DQSA-7lkRU2/?img_index=1"
  },
  { image: "https://aruma.vtexassets.com/assets/vtex.file-manager-graphql/images/6fdf51c9-3c3a-47f4-a99d-9a83a9397092___46bed0d81218521157d99daef0c4a655.png",
    link: "https://www.instagram.com/p/DPb84ooEcCy/"
  },
  { image: "https://aruma.vtexassets.com/assets/vtex.file-manager-graphql/images/b7560883-01ff-455a-9689-178f4315397f___1fdabc0d93ca2b9bafe2fff2b433d861.png",
    link: "https://www.instagram.com/p/DQFJnFNEcEp/"
  },
];

function SocialGrid() {
  return (
    <div className="banner-social-grid">
      <div>
        <p>¿Aún no nos sigues? <span>Descubre lo último en beauty</span></p>
      </div>

      <div className="social-grid">
        {socials.map((s, i) => (
          <a href={s.link} target="_blank" key={i}>
            <img src={s.image} alt="instagram" />
          </a>
        ))}
      </div>
    </div>
  );
}

export default SocialGrid
