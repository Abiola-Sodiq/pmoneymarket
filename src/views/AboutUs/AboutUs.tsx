import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { routePath } from "../../utils/helper";

type ItemsType = {
  title: string;
  content: string;
};
const Items: ItemsType[] = [
  {
    title: "Swift Transactions",
    content:
      "Time is money, and we value yours. Our streamlined processes ensure that every transaction is executed in record time. No delays, no waiting—just fast, efficient service when you need it.",
  },
  {
    title: "Secure Platform",
    content:
      "Your safety is our priority. With advanced encryption and top-tier security measures, we guarantee a platform where your transactions and personal data remain protected. You can trade with confidence, knowing that our systems are built to meet the highest standards of financial security.",
  },
  {
    title: "Fast Money Exchange",
    content:
      "We specialize in providing a fast money exchange experience. Whether you're exchanging currencies for a one-time need or conducting frequent trades, our platform delivers unmatched speed to ensure your money is where you need it, exactly when you need it.",
  },
];
const AboutUs = () => {
  return (
    <div className=" bg-gradient-to-r from-[#1790c8c7] to-[#4dc6dc] min-h-[100svh] w-full p-4">
      <Navbar />
      <div className="py-5 space-y-5">
        <div className=" text-center space-y-2">
          <p className="text-[--primary70] md:text-3xl text-center whitespace-nowrap font-bold w-full max-w-[453px] text-lg mx-auto">
            About us !
          </p>{" "}
          <p className=" text-[#070f1f] text-sm md:text-base w-full md:max-w-[90%] text-center mx-auto max-w-[97%]">
            At P money market, we believe money exchange should be simple,
            seamless, and stress-free. That’s why we’ve built a platform that
            combines cutting-edge technology with user-focused design to bring
            you the best in swift, secure, and fast money exchange services.
            Whether you're trading currencies for business, travel, or
            investment, we provide the tools and support you need to make every
            transaction a success.
          </p>
        </div>
        <div className="space-y-3">
          <p className="text-[--primary70] md:text-xl text-center whitespace-nowrap font-bold w-full max-w-[453px] text-lg mx-auto">
            Why Choose Us?
          </p>
          <div className=" w-full flex items-center justify-evenly flex-col md:flex-row gap-2">
            {Items.map((item, index) => (
              <div
                key={index}
                className=" bg-white rounded-2xl w-full max-w-[400px] p-2 space-y-2 md:h-[12rem] h-[13rem]"
              >
                <p className="font-bold text-center">{item.title}</p>
                <p className="font-normal text-sm leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-[--primary70] md:text-xl text-center whitespace-nowrap font-bold w-full max-w-[453px] text-lg mx-auto">
            The Ultimate Rate Calculator
          </p>
          <div className="space-y-1 py-2 md:px-5 w-full ">
            <p className=" w-full">
              What truly sets us apart is our innovative rate calculator. This
              powerful tool provides you with real-time money exchange rates,
              enabling you to make informed decisions instantly. With our
              calculator, you can:
            </p>
            <ul className=" list-disc pl-4 space-y-1">
              <li>Compare exchange rates.</li>
              <li>Calculate your expected returns.</li>
              <li>Lock in the best rates, saving you time and money.</li>
            </ul>
            <p>
              We stay ahead of market trends so you can, too. Our rate
              calculator ensures transparency and clarity, helping you trade
              smarter.
            </p>
          </div>
        </div>
        <div className="bg-[#f3f5f69d] rounded-xl p-3 w-full max-w-[650px] mx-auto">
          <p className="text-[--primary70] md:text-xl text-center  font-bold w-full text-lg mx-auto">
            Our Mission: Simplifying money Exchange
          </p>
          <p>
            Our mission is to revolutionize the way you trade. By offering a
            platform that prioritizes swift, secure, and fast money exchange,
            we’re dedicated to making global money trading accessible and
            effortless. We aim to empower individuals and businesses alike with
            the tools they need to navigate the financial world with ease.
          </p>
        </div>
        <div className="space-y-2">
          <p className="">
            Join the growing community of traders and businesses who trust P
            money market for their money exchange needs. Whether you’re sending
            money abroad, managing international transactions, or exploring
            investment opportunities, our platform has everything you need. Let
            P money market make your money exchange swift, secure, and fast—just
            the way it should be.
          </p>
          <div>
            <p className=" text-[#070f1f] text-base font-semibold md:text-base text-center">
              Ready to trade? Experience the future of money exchange with us
              today.
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
