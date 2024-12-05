import Navbar from "../../components/Navbar";
import Image from "../../assets/images/contact-bg.png";
// import { Form } from "antd";
import IG from "../../assets/icons/igLogo.svg";
import call from "../../assets/icons/phoneIcon.svg";
import whatsapp from "../../assets/icons/whatsppLogo.svg";
import location from "../../assets/icons/location.svg";
import { Link } from "react-router-dom";

const ContactUs = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${Image})`,
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
      className="relative bg-cover bg-center min-h-[100vh] w-full"
    >
      <div className=" bg-gradient-to-r from-[#1790c8c7] to-[#4dc6dc] min-h-[100svh] w-full p-4">
        <Navbar />
        <div className="  w-full text-center space-y-6 py-5">
          <p className="text-[--primary70] md:text-3xl text-center whitespace-nowrap font-bold w-full max-w-[453px] text-lg  mx-auto">
            Reach out to us !
          </p>
          <p className=" text-[#255059] text-base font-semibold ">
            We look forward to hear from you Today.
          </p>
        </div>
        <div className=" py-3 rounded-2xl w-full px-10 max-w-[1440px] mx-auto flex flex-col justify-center items-center">
          {/* <h1 className="flex justify-center mb-4 text-xl font-bold md:my-7 md:text-2xl md:justify-start ">
            Leave us a message
          </h1> */}
          {/* <div className="w-full max-w-[400px] mx-auto md:mx-0">
              <Form layout="vertical" className=" space-y-2 w-full">
                <Form.Item label="Name">
                  <input className=" border-b-[1.5px] border-[#1790c8c7] rounded-xl  focus:outline-none w-full border p-3 max-w-[400px] " />
                </Form.Item>
                <Form.Item label="Email">
                  <input className=" border-b-[1.5px] border-[#1790c8c7] rounded-xl  focus:outline-none w-full border p-3 max-w-[400px] " />
                </Form.Item>
                <Form.Item label="Message">
                  <textarea
                    className=" border-b-[1.5px] border-[#1790c8c7] rounded-xl  focus:outline-none w-full border p-3 max-w-[400px] "
                    draggable="false"
                    rows={6}
                  />
                </Form.Item>
                <div className="flex justify-center w-full">
                  <button className="bg-[#1790c8c7] !px-7 !py-3 text-white font-semibold text-base rounded-xl hover:bg-[#1790c8c7] ">
                    Send Message
                  </button>
                </div>
              </Form>
            </div> */}
          <div className=" flex flex-col p-2  md:p-8 w-full gap-3 md:mx-0 ">
            <p className="text-[#090909] font-bold text-lg md:text-start text-center ">
              Contact Information
            </p>
            <div className="text-[#255059] font-semibold text-base space-y-4">
              <span
                className="
              flex items-center w-full gap-2 cursor-pointer"
              >
                <img src={call} alt="Phone Icon" className=" w-7" />
                <p>(+27)-678417847</p>
              </span>
              <span
                className="
              flex items-center w-full gap-2 cursor-pointer"
              >
                <img src={location} alt="Location Icon" className=" w-7" />
                <p>Cape Town, South Africa</p>
              </span>
              <Link
                to={"https://www.instagram.com/pmoneymarket/"}
                className="
              flex items-center w-full gap-2"
                target="_blank"
              >
                <img src={IG} alt="Instagram Icon" className=" w-7" />
                <p>@pmoneymarket</p>
              </Link>
              <Link
                to={"https://wa.me/message/NXE2MIDGQELIP1"}
                className="
              flex items-center w-full gap-2"
                target="_blank"
              >
                <img src={whatsapp} alt="Whatsapp Icon" className=" w-7" />
                <p>+27678417847</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
