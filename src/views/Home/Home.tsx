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
      className="relative bg-cover bg-center min-h-screen w-full overflow-y-auto"
    >
      <div className="bg-gradient-to-r from-[#1ea1def1] to-[#4dc7dcd6] absolute inset-0 p-4 space-y-8 min-h-[100svh] overflow-y-auto">
        <Navbar />
        <div className="flex flex-col items-center justify-center text-center font-sora">
          <p className="text-[--primary70] md:text-2xl text-center font-bold w-full max-w-[453px] text-base mx-auto">
            Welcome to Pmoney Market
          </p>
          <p className=" text-[#255059] text-sm font-semibold md:text-lg ">
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
