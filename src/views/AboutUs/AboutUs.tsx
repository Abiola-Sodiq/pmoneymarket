import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { routePath } from "../../utils/helper";

type ItemsType = {
  index: number;
  title: string;
  content: string;
};
const Items: ItemsType[] = [
  {
    index: 1,
    title: "Swift Transactions",
    content:
      "Time is money, and we value yours. Our streamlined processes ensure fast, efficient transactions with no delays.",
  },
  {
    index: 2,
    title: "Secure Platform",
    content:
      "Your safety is our priority. With advanced encryption and top-tier security, we ensure your transactions and data are always protected.",
  },
  {
    index: 3,
    title: "Fast Money Exchange",
    content:
      "We specialize in fast money exchange, whether for one-time needs or frequent trades, ensuring your money is where you need it, when you need it.",
  },
];
const AboutUs = () => {
  return (
    <div className=" bg-gradient-to-r from-[#1790c8c7] to-[#4dc6dc] min-h-[100svh] w-full p-4">
      <Navbar />
      <div className="py-5 space-y-10 w-full max-w-[1440px] mx-auto">
        <div className=" text-center space-y-2">
          <p className="text-[--primary70] md:text-3xl text-center whitespace-nowrap font-bold w-full max-w-[453px] text-lg mx-auto py-3">
            About us !
          </p>{" "}
          <span className=" text-[#070f1f] text-sm md:text-base w-full md:max-w-[90%] max-w-[97%] space-y-3 ">
            At P Money Market, we make money exchange simple and stress-free.
            Our innovative rate calculator provides real-time rates, helping you
            compare, calculate returns, and lock in the best deals. With
            cutting-edge technology and user-friendly design, we ensure fast,
            secure transactions for business, travel, or investment.
          </span>
        </div>
        <div className="  rounded-xl flex text-center justify-center p-3 flex-col sm:flex-row gap-10 ">
          <div className=" w-full mx-auto max-w-[450px] space-y-2 ">
            <p className="text-[--primary70] md:text-xl text-center font-bold w-full text-lg mx-auto">
              Our Mission
            </p>
            <p className="font-normal text-sm md:text-base leading-relaxed">
              We aim to revolutionize money exchange by offering a fast, secure
              platform that empowers individuals and businesses to trade
              effortlessly.
            </p>
          </div>
          <div className="  w-full mx-auto max-w-[450px] space-y-2">
            <p className="text-[--primary70] md:text-xl text-center  font-bold w-full text-lg mx-auto">
              Our Vision
            </p>
            <p className="font-normal text-sm md:text-base leading-relaxed">
              To be the leading platform for global money exchange, making
              financial transactions accessible and seamless for everyone.
            </p>
          </div>
        </div>
        <div className="space-y-7 ">
          <p className="text-[--primary70] md:text-2xl text-center whitespace-nowrap font-bold w-full max-w-[453px] text-lg mx-auto">
            Why Choose Us?
          </p>
          <div className=" w-full flex items-center justify-evenly flex-col md:flex-row gap-2 rounded-2xl  bg-[#f3f5f69d] py-3">
            {Items.map((item, index) => (
              <div
                key={index}
                className="  w-full max-w-[400px] p-3 space-y-2 text-center "
              >
                <div className=" flex w-full justify-center items-center">
                  <p className=" font-bold text-lg bg-[#f3f5f644] w-10 h-10 rounded-[50%] text-center flex items-center justify-center">
                    {item.index}
                  </p>
                </div>
                <p className="font-bold ">{item.title}</p>
                <p className="font-normal text-sm md:text-base leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-normal text-sm md:text-base leading-relaxed text-center">
            Join the growing community of traders and businesses who trust P
            money market for their money exchange needs. Whether you’re sending
            money abroad, managing international transactions, or exploring
            investment opportunities, our platform has everything you need.
          </p>
          <div>
            <p className=" text-[#070f1f] text-base font-medium md:text-base text-center">
              Let P money market make your money exchange swift, secure, and
              fast.
            </p>
            <p className=" text-[#070f1f] text-base font-semibold md:text-base text-center">
              Ready to trade?
            </p>
            <div className="flex justify-center w-full">
              <button className="bg-[#1790c8c7] !px-7 !py-3 text-white font-semibold text-base rounded-xl hover:bg-[#1790c8c7] mt-3 ">
                <Link to={routePath.HOME}>Get Started</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
