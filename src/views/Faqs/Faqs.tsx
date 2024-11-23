import Navbar from "../../components/Navbar";
import { useState } from "react";
import openArrow from "../../assets/icons/openarrow.svg";
import closeArrow from "../../assets/icons/closearrow.svg";

interface Item {
  key: string;
  label: string;
  content: string;
}

const Items: Item[] = [
  {
    key: "1",
    label: "How do I sign up?",
    content:
      "To sign up on our artisan platform, simply click the Get Started button on the homepage, fill in the required information, and follow the prompts to create your account.",
  },
  {
    key: "2",
    label: "How do I verify my account?",
    content:
      "Users can verify their account by clicking the verification link sent to their email, while artisans need to complete the account verification process by filling in essential details and submitting them for review before gaining approval.",
  },
  {
    key: "3",
    label: "How do I receive my payment?",
    content:
      "Artisans receive payment for completed jobs through our secure payment system, with funds deposited directly into their linked bank account or preferred payment method within a specified timeframe.",
  },
  {
    key: "4",
    label: "How do I make payment?",
    content:
      "Users can make payments for initiated jobs on our platform securely through the integrated payment system using various methods, such as credit/debit cards or other supported payment options.",
  },
];

const Faqs = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-r from-[#1790c8c7] to-[#4dc6dc] h-[100svh] w-full p-4">
      <Navbar />
      <div className="w-full mx-auto py-5">
        <p className="text-[--primary70] md:text-3xl text-center whitespace-nowrap font-bold w-full max-w-[453px] text-lg py-5 mx-auto">
          Frequently Asked Questions
        </p>
        <div className="w-full space-y-4">
          {Items.map((item) => (
            <div
              key={item.key}
              className={`w-full max-w-[650px] mx-auto bg-white md:rounded-[18px] md:px-6 md:py-7 p-3 rounded-md shadow-md ${
                openKey === item.key
                  ? "border-2 border-[--primary70] shadow-[#4A3AFF30] transition-all"
                  : "shadow-[#080F340F]"
              }`}
            >
              <span
                onClick={() =>
                  setOpenKey(openKey === item.key ? null : item.key)
                }
                className="flex items-center justify-between w-full cursor-pointer"
              >
                <p className="sm:text-xl font-medium text-[--gray1] text-base">
                  {item.label}
                </p>
                <button
                  className={`flex items-center md:w-[40px] md:h-[40px] h-7 w-7 rounded-[50%] justify-center ${
                    openKey === item.key
                      ? "bg-[--primary70]"
                      : "bg-white shadow-md shadow-[#080F340F]"
                  }`}
                >
                  <img
                    src={openKey === item.key ? closeArrow : openArrow}
                    alt={openKey === item.key ? "Collapse" : "Expand"}
                    className="w-3 h-3 md:w-5 md:h-5"
                  />
                </button>
              </span>
              {openKey === item.key && (
                <p className="text-[#000000B2] md:text-base font-normal pt-4 max-w-[500px] w-full text-sm">
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
