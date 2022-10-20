import Logo from "../Media/logo.png";
import { Link } from "react-router-dom";

function Footer({ database }) {
  return (
    <>
      <footer>
        <div className="footer-logo">
          <img src={Logo} alt="The Company of House Plants" />
        </div>
        <div>
          <div className="footer-header">Navigate</div>
          <Link to="/about">
            <div className="footer-link">About Us</div>
          </Link>
          <Link to="/explore">
            <div className="footer-link">Explore Species</div>
          </Link>
        </div>
        <div>
          <div className="footer-header">About The Site</div>
          
        </div>
        <div>
          <div className="footer-header">Attribution</div>
          <div className="footer-link">
            This site uses information from House Plants Expert. For deeper
            information and more species, please visit their wonderful site.
          </div>
        </div>
      </footer>
      <div className="copyright">
        © 2022 The Company of House Plants. ALL RIGHTS RESERVED
      </div>
    </>
  );
}

export default Footer;
