import Video from "../Media/videobanner.mp4";
import { Link } from "react-router-dom";

function VideoBanner() {
  return (
    <>
      <div className="video-banner">
        <video autoPlay muted loop className="video">
          <source src={Video} type="video/mp4" />
        </video>
        <div className="video-banner-text">
          <div className="video-banner-title">Explore New Species</div>
          From flowering plants to foliage - we have you covered!
          <br />
          <Link to="/explore" className="nav-item">
            <button className="callout-button">See the list</button>
          </Link>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
}

export default VideoBanner;
