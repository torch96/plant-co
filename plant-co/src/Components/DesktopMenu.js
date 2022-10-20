import { Link } from "react-router-dom";

function DesktopMenu() {
  return (
    <>
      <Link to="/explore" className="nav-item desktop-menu">
        Explore Species
      </Link>
      <Link to="/about" className="nav-item desktop-menu">
        About Us
      </Link>
    </>
  );
}

export default DesktopMenu;
