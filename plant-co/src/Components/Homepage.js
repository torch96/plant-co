import { useEffect } from "react";
import FeaturedItems from "./FeaturedItems";
import RecentlyAdded from "./RecentlyAdded";
import VideoBanner from "./VideoBanner";
import CalloutLeft from "./CalloutLeft";
import CalloutRight from "./CalloutRight";

function Homepage({ database }) {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The Company of House Plants - Discover Flora!";
  });

  return (
    <>
      <VideoBanner />
      <FeaturedItems database={database} />
      <CalloutLeft />
      <RecentlyAdded database={database} />
      <CalloutRight />
    </>
  );
}

export default Homepage;
