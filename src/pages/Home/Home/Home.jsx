import FeaturedIn from "../../FeaturedIn/FeaturedIn";
import AboutUs from "../AboutUs/AboutUs";
import ExploreSection from "../ExploreSection/ExploreSection";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import MarqueeSection from "../MarqueeSection/MarqueeSection";
import ShopByCategory from "../ShopByCategory/ShopByCategory";
import SubscribeEmail from "../SubscribeEmail/SubscribeEmail";
import VerticalAccordion from "../VerticalAccordion/VerticalAccordion";

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
      <AboutUs />
      <VerticalAccordion />
      <SubscribeEmail />
    </div>
  );
};

export default Home;
