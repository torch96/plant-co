import { Link } from "react-router-dom";

function FeaturedItemBlock({ id, database }) {
  return (
    <div className="item">
      <div className="item-image">
        <Link to={"species/" + id}>
          <img src={database[id].image} alt={database[id].name} />
        </Link>
      </div>
      <div className="item-title">{database[id].name}</div>
      <div className="item-description">
        {database[id].description.substring(0, 100) + ".."}
      </div>
      <Link to={"species/" + id}>
        <button className="item-button">Learn More</button>
      </Link>
    </div>
  );
}

export default FeaturedItemBlock;
