import Navbar from "../../components/Navbar";
import { useState } from "react";
import openArrow from "../../assets/icons/openarrow.svg";
import closeArrow from "../../assets/icons/closearrow.svg";

interface Item {
  key: string;
  label: string;
  content: React.ReactNode;
}

const Items: Item[] = [
  {
    key: "1",
    label: "What currencies do you accept?",
    content: (
      <ul className=" list-disc pl-4 font-medium text-sm space-y-2">
        <li>All digital currencies</li>
        <li>USD (US Dollar)</li>
        <li>ZAR (South African Rand)</li>
        <li> NGN (Nigerian Naira)</li>
        <li>KES (Kenyan Shilling)</li>
        <li>PayPal</li>
      </ul>
    ),
  },
  {
    key: "2",
    label: "How long does payment take?",
    content:
      "Payments are processed instantly once your transaction is confirmed.",
  },
  {
    key: "3",
    label: "How does trading work?",
    content: (
      <ul className=" list-decimal pl-4 font-medium text-sm space-y-2">
        <li>
          Use our <span className="font-bold"> rate calculator </span> to check
          the daily rates.
        </li>
        <li>
          Locate our wallet and account details listed below the calculator.
        </li>
        <li>Send your payment and upload proof of payment.</li>
        <li>
          Provide the account details where you'd like to receive your funds.
        </li>
      </ul>
    ),
  },
  {
    key: "4",
    label: "Are there any bank charges?",
    content: (
      <ul className=" list-disc pl-4 font-medium text-sm space-y-2">
        <li> Transfers to FNB accounts: Free</li>
        <li>FNB eWallet: R50 fee</li>
        <li> Immediate payments to other South African banks: R40 fee</li>
        <li>All Naira payments: Free</li>
      </ul>
    ),
  },
  {
    key: "5",
    label: "Is there a trading limit? ",
    content: (
      <p>
        There is no trading limit! You can trade any amount.
        <span className=" font-bold"> Terms and conditions apply.</span>
      </p>
    ),
  },
  {
    key: "6",
    label: "What are your trading hours?",
    content: "We operate 24/7 for your convenience.",
  },
];

const Faqs = () => {
  const [openKey, setOpenKey] = useState<string | null>(null);

  return (
    <div className="bg-gradient-to-r from-[#1790c8c7] to-[#4dc6dc] w-full p-4 min-h-[100svh]">
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
                  ? "border-2 border-[#4fcaffd4] shadow-[#4A3AFF30] transition-all"
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
                <p className="text-[#000000B2] md:text-base font-medium pt-4 max-w-[600px] w-full text-sm">
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
