import FeaturedItemBlock from "./FeaturedItemBlock";

function RecentlyAdded({ database }) {
  return (
    <>
      <div className="featured-items">
        <div className="section-title">Recently Added</div>
        <div className="item-blocks">
          <FeaturedItemBlock id="74" database={database} />
          <FeaturedItemBlock id="79" database={database} />
          <FeaturedItemBlock id="70" database={database} />
          <FeaturedItemBlock id="72" database={database} />
        </div>
      </div>
    </>
  );
}

export default RecentlyAdded;
