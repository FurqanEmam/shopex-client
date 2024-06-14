import FeaturedIn from "../../FeaturedIn/FeaturedIn";
import ExploreSection from "../ExploreSection/ExploreSection";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import MarqueeSection from "../MarqueeSection/MarqueeSection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <div className="max-w-7xl mx-auto ">
        <ShopByCategory />
      </div>
      <FeaturedIn />
      <MarqueeSection />
      <ExploreSection />
    </div>
  );
};

export default Home;
