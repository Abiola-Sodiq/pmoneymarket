/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select, Spin, Input, message } from "antd";
import useCurrencies from "../../../hooks/useFetchCurrencies";
import { useState } from "react";

type curencyType = {
  id: number;
  created_at: string;
  currencyA: string;
  currencyB: string;
  rate: number;
};

const Calculator = () => {
  const { currencies, loading, error } = useCurrencies();
  // const [openAccountModal, setOpenAccountModal] = useState<boolean>(false);
  const [convertedAmount, setConvertedAmount] = useState<number | null>(null);

  if (error) {
    return <p>Error loading currencies</p>;
  }

  const handleConversion = (values: any) => {
    const selectedCurrency = currencies.find(
      (currency: curencyType) => currency.id === values.fromCurrency
    );

    if (!selectedCurrency) {
      message.error("Currency not found");
      return;
    }

    const amount = parseFloat(values.amount);
    const result = amount * selectedCurrency.rate;
    setConvertedAmount(result);
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-500 p-2 sm:p-5 w-full max-w-[500px] text-center space-y-5 mx-auto">
      <p>Know Wetin Your Money Go Be</p>
      <Spin spinning={loading}>
        <Form onFinish={handleConversion} className=" mx-auto">
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

          <div className=" w-full  max-w-[400px] mx-auto">
            <Form.Item
              name="fromCurrency"
              rules={[{ required: true, message: "Please select a currency" }]}
            >
              <Select placeholder="Select Currency" className=" text-lg">
                {currencies.map((currency: curencyType) => (
                  <Select.Option key={currency.id} value={currency.id}>
                    {`${currency.currencyA} to ${currency.currencyB}`}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>
          <div className=" flex items-center justify-center">
            {convertedAmount !== null && (
              <p className="text-lg font-semibold font-sora md:py-4 py-2">{`Your Amount is ${convertedAmount.toFixed(
                2
              )}`}</p>
            )}
          </div>
          <button
            type="submit"
            className="bg-[#1790c8c7] md:px-7 md:py-3 text-white font-semibold text-sm md:text-base rounded-xl hover:bg-[#1790c8c7] whitespace-nowrap px-4 py-2"
          >
            {convertedAmount ? "Continue with trade" : "Convert my amount"}
          </button>
        </Form>
      </Spin>
    </div>
  );
};

export default Calculator;
