import Navbar from "../../components/Navbar";
import Image from "../../assets/images/heroImage.svg";
import Calculator from "./components/Calculator";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative bg-cover bg-center min-h-[100vh] w-full"
    >
      <div className="bg-gradient-to-r from-[#1ea1def1] to-[#4dc7dcd6] absolute inset-0 p-4 space-y-10">
        <Navbar />
        <div className="flex flex-col items-center justify-center text-center font-sora">
          <p className=" text-xl md:text-4xl font-bold ">
            Welcome to Pmoney Market
          </p>
          <p className=" text-sm md:text-base font-normal ">
            Swift secure and fast money exchange
          </p>
        </div>
        <Calculator />
      </div>
    </div>
  );
};

export default Home;
