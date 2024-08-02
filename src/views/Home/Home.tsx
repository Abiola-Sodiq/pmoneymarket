import Navbar from "../../components/Navbar";
import Image from "../../assets/images/heroImage.svg";

const Home = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
      }}
      className="relative bg-cover bg-center h-[100vh] w-full overflow-y-hidden"
    >
      <div className="bg-gradient-to-r from-[#1ea1def1] to-[#4dc7dcd6] absolute inset-0 p-4">
        <Navbar />
        <div className="flex justify-center py-20">
          <div className="flex flex-col items-center justify-center gap-4 text-center font-sora ">
            <p className="text-4xl font-bold">Welcome to Pmoney Market</p>
            <p className="text-lg font-normal text-gray-800 ">
              Swift secure and fast money exchange
            </p>
            <p className="font-bold text-orange-600 font-be-vietnam-pro">
              our page will be launched soon.You can contact us for more information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
