import { categories } from "../data/categories";

function Categorybar() {
  return (
    <div className="category-bar">
      {categories.map((cat) => (
        <div className="category-item" key={cat.id}>
          <div className="category-image">
            <img src={cat.image} alt={cat.name} />
          </div>
          <p>{cat.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Categorybar;
