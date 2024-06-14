import HomeCarousel from "../HomeCarousel/HomeCarousel";
import ShopByCategory from "../ShopByCategory/ShopByCategory";

const Home = () => {
  return (
    <div>
      <HomeCarousel />
      <div className="max-w-7xl mx-auto ">
        <ShopByCategory />
      </div>
    </div>
  );
};

export default Home;
