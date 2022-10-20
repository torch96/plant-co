import Callout2 from "../Media/callout2.jpeg";
import { AnimationOnScroll } from "react-animation-on-scroll";

function CalloutRight() {
  return (
    <div style={{ backgroundColor: "#c9895f" }}>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="callout-right">
          <div className="callout-text">
            <div className="callout-title">Feeling Overwhelmed?</div>
            <div>
              Try clicking that little leaf icon in the top right of the page!
              We'll surprise you with a random species to learn about!
            </div>
          </div>
          <div className="callout-image">
            <img src={Callout2} alt="The Company Of House Plants" />
          </div>
        </div>
      </AnimationOnScroll>
    </div>
  );
}

export default CalloutRight;
