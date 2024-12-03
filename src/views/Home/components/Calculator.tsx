/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select, Spin, Input, message } from "antd";
import useCurrencies from "../../../hooks/useFetchCurrencies";
import { useState } from "react";
import AccountModal from "./AccountModal";

type CurrencyType = {
  id: number;
  created_at: string;
  currencyA: string;
  currencyB: string;
  currencyASymbol: string;
  currencyBSymbol: string;
  rate: number;
};

const Calculator = () => {
  const { currencies, loading, error } = useCurrencies();
  const [openAccountModal, setOpenAccountModal] = useState<boolean>(false);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);
  const [inputtedAmount, setInputtedAmount] = useState<number | null>(null);
  const [selectedCurrency, setSelectedCurrency] = useState<CurrencyType | null>(
    null
  );

  if (error) {
    return <p>Error loading currencies</p>;
  }

  const handleCurrencyChange = (currencyId: number) => {
    const selectedCurrency = currencies.find(
      (currency: CurrencyType) => currency.id === currencyId
    );

    if (selectedCurrency) {
      setSelectedCurrency(selectedCurrency);
      setConvertedAmount(null); // Reset converted amount when currency changes
    }
  };

  const handleConversion = (values: any) => {
    if (!selectedCurrency) {
      message.error("Currency not found");
      return;
    }

    const amount = parseFloat(values.amount);
    setInputtedAmount(amount);

    const result = amount * selectedCurrency.rate;
    setConvertedAmount(result);
  };
  // const handleConversion = (values: any) => {
  //   const selectedCurrency = currencies.find(
  //     (currency: CurrencyType) => currency.id === values.currency
  //   );

  //   if (!selectedCurrency) {
  //     message.error("Currency not found");
  //     return;
  //   }

  //   const amount = parseFloat(values.amount);
  //   setInputtedAmount(amount);
  //   setSelectedCurrency(selectedCurrency);

  //   const result = amount * selectedCurrency.rate;
  //   setConvertedAmount(result);
  // };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-500 p-2 sm:p-5 w-full max-w-[500px] text-center space-y-5 mx-auto">
      <p>Know Wetin Your Money Go Be</p>
      <Spin spinning={loading}>
        <Form onFinish={handleConversion} className="mx-auto">
          <Form.Item
            name="amount"
            rules={[
              { required: true, message: "Please enter an amount" },
              {
                pattern: /^[0-9]*\.?[0-9]+$/,
                message: "Please enter a valid number",
              },
            ]}
          >
            <Input
              className="border-b-[1.5px] border-[#1790c8c7] rounded-xl focus:outline-none w-full border p-3 max-w-[400px]"
              placeholder="Enter Amount"
            />
          </Form.Item>

          <div className="w-full max-w-[400px] mx-auto">
            <Form.Item
              name="currency"
              rules={[{ required: true, message: "Please select a currency" }]}
            >
              <Select
                placeholder="Select Currency"
                className="text-lg"
                onChange={handleCurrencyChange}
              >
                {currencies.map((currency: CurrencyType) => (
                  <Select.Option key={currency.id} value={currency.id}>
                    {`${currency.currencyA} to ${currency.currencyB}`}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <div className="flex items-center justify-center">
              {convertedAmount !== null && selectedCurrency && (
                <p className="text-lg font-semibold font-sora md:py-4 py-2 flex items-center gap-2">
                  <p className="font-normal text-base">Your Amount is </p>
                  {`${
                    selectedCurrency.currencyBSymbol
                  } ${convertedAmount.toFixed(2)}`}
                </p>
              )}
            </div>
          </div>

          {!convertedAmount ? (
            <button
              type="submit"
              className="bg-[#1790c8c7] md:px-7 md:py-3 text-white font-semibold text-sm md:text-base rounded-xl hover:bg-[#1790c8c7] whitespace-nowrap px-4 py-2"
            >
              Convert my amount
            </button>
          ) : (
            <button
              onClick={() => setOpenAccountModal(true)}
              className="bg-[#1790c8c7] px-7 py-3 text-white font-semibold text-base rounded-xl hover:bg-[#1790c8] mt-4"
            >
              Continue with trade
            </button>
          )}
        </Form>
      </Spin>
      {openAccountModal && selectedCurrency && (
        <AccountModal
          openAccountModal={openAccountModal}
          setOpenAccountModal={setOpenAccountModal}
          amountToPay={inputtedAmount as number}
          currencyASymbol={selectedCurrency.currencyASymbol as string}
        />
      )}
    </div>
  );
};

export default Calculator;
