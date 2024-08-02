import Navbar from "../../components/Navbar";
import Image from "../../assets/images/heroImage.svg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="relative bg-cover bg-center h-[100vh] w-full"
    >
      <div className="bg-gradient-to-r from-[#1ea1def1] to-[#4dc7dcd6] absolute inset-0 p-4">
        <Navbar />
        <div className="flex items-center justify-center h-full">
          <div className="flex flex-col items-center justify-center text-center font-sora">
            <p className="text-4xl font-bold ">
              Welcome to Pmoney Market
            </p>
            <p className="text-base font-normal ">
              Swift secure and fast money exchange
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
