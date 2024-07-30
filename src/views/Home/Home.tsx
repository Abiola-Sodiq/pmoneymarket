import Navbar from "../../components/Navbar";
import HeroSection from "../HeroSection/HeroSection";

const Home = () => {
  return (
    <div className=" bg-gradient-to-r from-[#1790c8c7] to-[#4dc6dc] h-[100svh] w-full p-4">
      <Navbar />
      <HeroSection/>
    </div>
  );
};

export default Home;
