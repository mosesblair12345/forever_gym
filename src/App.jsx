import Navbar from "./components/Navbar/navbar";
import Hero from "./components/Hero/Hero";
import BgImage from "../src/assets/bg.png";
import Equipments from "./components/Equipments/Equipments";
import Banner from "./components/Banner/Banner";
import { BannerData } from "./constants/bannnerData";
import { BannerData2 } from "./constants/bannnerData";
import Tabs from "./components/Tabs/Tabs";
import Testimonial from "./components/Testimonials/Testimonial";
import Banner2 from "./components/Banner/Banner2";
import Footer from "./components/footer/Footer";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <div style={bgStyle}>
        <Navbar />
        <Hero />
      </div>
      <Equipments />
      {BannerData.map((data) => (
        <Banner key={data.id} {...data} />
      ))}
      <Tabs />
      {BannerData2.map((data) => (
        <Banner key={data.id} {...data} />
      ))}
      <Testimonial />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default App;
