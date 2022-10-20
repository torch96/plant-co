import Logo from "../Media/logo.png";
import { FaLeaf } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "@chakra-ui/react";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";

function Header({ database }) {
  const navigate = useNavigate();

  function randomSpecies(database) {
    const random = database[Math.floor(Math.random() * database.length)];
    return random.id;
  }

  return (
    <>
      <div className="alert">50+ new species just added!</div>
      <header>
        <div className="header-center">
          <nav className="noselect">
            <DesktopMenu />
            <MobileMenu />
          </nav>

          <div className="logo noselect">
            <img
              src={Logo}
              alt="The Company of House Plants"
              onClick={() => {
                navigate("/");
              }}
            />
          </div>
          <div className="basket">
            <Tooltip
              hasArrow
              label="Random Species!"
              bg="#485753"
              color="white"
              padding="5px 10px"
            >
              <span>
                <FaLeaf
                  size="1.3em"
                  color="#1c1c1c"
                  cursor="pointer"
                  onClick={() => {
                    navigate("/species/" + randomSpecies(database));
                  }}
                />
              </span>
            </Tooltip>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
