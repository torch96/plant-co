import Callout1 from "../Media/callout1.jpeg";
import { AnimationOnScroll } from "react-animation-on-scroll";
import { Link } from "react-router-dom";

function CalloutLeft() {
  return (
    <div style={{ backgroundColor: "#9bb154" }}>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="callout-left">
          <div className="callout-image">
            <img src={Callout1} alt="The Company Of House Plants" />
          </div>
          <div className="callout-text">
            <div className="callout-title">
              What is
              <br />
              The Company of House Plants?
            </div>
            <div>
              We are a comprehensive database of information for you to learn
              and explore flora for your home!
            </div>
            <Link to="/about">
              <button className="callout-button">Read About Us</button>
            </Link>
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default CalloutLeft;
