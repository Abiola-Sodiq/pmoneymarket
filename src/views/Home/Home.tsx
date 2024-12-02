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
      <div className="bg-gradient-to-r from-[#1ea1def1] to-[#4dc7dcd6] absolute inset-0 p-4 space-y-10 min-h-[100svh]">
        <Navbar />
        <div className="flex flex-col items-center justify-center text-center font-sora">
          <p className="text-[--primary70] md:text-3xl text-center whitespace-nowrap font-bold w-full max-w-[453px] text-lg mx-auto">
            Welcome to Pmoney Market
          </p>
          <p className=" text-[#255059] text-base font-semibold md:text-lg ">
            Welcome to P money market – Your Trusted Partner in Swift, Secure,
            and Fast Money Exchange!
          </p>
        </div>
        <Calculator />
      </div>
    </div>
  );
};

export default Home;
