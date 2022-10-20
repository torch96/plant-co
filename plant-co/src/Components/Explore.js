import { useEffect } from "react";
import { Link } from "react-router-dom";
import Divider from "./Divider";

function Explore({ database }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Explore Species - The Company of House Plants";
  });

  return (
    <>
      <div className="explore">
        <div className="section-title">Explore</div>
        <div className="explore-grid">
          {database.map((species) => (
            <Link
              to={"/species/" + species.id}
              className="explore-link"
              key={species.id}
            >
              <div className="explore-grid-item">
                <div className="explore-image">
                  <img src={species.image} alt={species.name} />
                </div>
                <div className="explore-text">
                  <div className="explore-text-name">{species.name}</div>
                  <div className="explore-text-description">
                    {species.description.substring(0, 70) + ".."}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Divider />
    </>
  );
}

export default Explore;
