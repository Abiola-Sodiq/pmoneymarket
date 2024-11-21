import Navbar from "../../components/Navbar";
import Image from "../../assets/images/contact-bg.png";
// import { Form } from "antd";

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
      <div className=" bg-gradient-to-r from-[#1790c8c7] to-[#4dc6dc] h-[100svh] w-full p-4">
        <Navbar />
        <div className=" p-6">
          <div className=" bg-white p-2 rounded-2xl w-full">
            <p className="text-black md:text-xl  whitespace-nowrap font-bold w-full max-w-[453px] text-lg p-5 ">
              Contact Us
            </p>
            <div className=" flex flex-col md:flex-row w-full justify-between">
              {/* <Form>hghdgjhsdgdsfh</Form>
              jhgbfdh */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
