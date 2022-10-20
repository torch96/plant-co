import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Divider from "./Divider";
import { Badge, Button } from "@chakra-ui/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Species({ database }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = database[plantID].name + " - The Company of House Plants";
  });
  const { plantID } = useParams();
  const indexOne = plantID > 0 ? parseInt(plantID) - 1 : 80;
  const indexTwo = plantID < 80 ? parseInt(plantID) + 1 : 0;

  return (
    <>
      <div className="plant-page">
        <div className="section-title">Species Information</div>
        <div className="plant-page-grid">
          <div className="plant-page-image">
            <img src={database[plantID].image} alt={database[plantID].name} />
          </div>
          <div className="plant-page-text">
            <div className="plant-page-name">{database[plantID].name}</div>
            <div className="plant-page-type">
              Type: <Badge>{database[plantID].type}</Badge>
            </div>
            <div className="plant-page-description">
              {database[plantID].description}
            </div>

            <div className="plant-page-care-title">Care Instructions:</div>
            <div className="plant-page-care">
              <div>Temperature:</div>
              <div> {database[plantID].temperature}</div>
              <div>Light: </div>
              <div>{database[plantID].light}</div>
              <div>Watering: </div>
              <div>{database[plantID].watering}</div>
            </div>
            <div className="plant-page-button">
              <Button
                colorScheme="green"
                size="sm"
                onClick={() => {
                  window.open(database[plantID].link, "_blank");
                }}
              >
                More Information
              </Button>
            </div>
            <div className="navigate-species">
              <Link
                to={"/species/" + database[indexOne].id}
                className="explore-link"
              >
                <div className="species-backward">
                  <FaArrowLeft style={{ marginTop: "3px" }} />
                  <div style={{ textAlign: "right" }}>
                    {database[indexOne].name}
                  </div>
                </div>
              </Link>
              <Link
                to={"/species/" + database[indexTwo].id}
                className="explore-link"
              >
                <div className="species-forward">
                  <div>{database[indexTwo].name}</div>

                  <FaArrowRight style={{ marginTop: "3px" }} />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Divider />
    </>
  );
}

export default Species;
