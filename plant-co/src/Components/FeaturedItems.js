import FeaturedItemBlock from "./FeaturedItemBlock";

function FeaturedItems({ database }) {
  return (
    <>
      <div className="featured-items">
        <div className="section-title">Featured Flora</div>
        <div className="item-blocks">
          <FeaturedItemBlock id="0" database={database} />
          <FeaturedItemBlock id="9" database={database} />
          <FeaturedItemBlock id="2" database={database} />
          <FeaturedItemBlock id="3" database={database} />
        </div>
      </div>
    </>
  );
}

export default FeaturedItems;
