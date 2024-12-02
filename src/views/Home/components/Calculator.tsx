/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select, Spin } from "antd";
import useCurrencies from "../../../hooks/useFetchCurrencies";

const Calculator = () => {
  const { currencies, loading, error } = useCurrencies();

  if (error) {
    return <p>Error loading currencies: {""}</p>;
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-500 p-5 w-full mx-auto max-w-[500px] text-center space-y-5">
      <p>Know Wetin Your Money Go Be</p>
      <Spin spinning={loading}>
        <Form
          onFinish={(e) => {
            console.log(e);
          }}
          className=""
        >
          <Form.Item
            name="amount"
            rules={[{ required: true, message: "Please enter an amount" }]}
          >
            <input
              className="border-b-[1.5px] border-[#1790c8c7] rounded-xl focus:outline-none w-full border p-3 max-w-[400px]"
              placeholder="Enter Amount"
            />
          </Form.Item>

          <div className="flex items-center justify-between px-5 w-full ">
            <Form.Item
              name="fromCurrency"
              rules={[{ required: true, message: "Please select a currency" }]}
            >
              <Select placeholder=" Currency">
                {currencies.map((currency: any) => (
                  <Select.Option key={currency.id} value={currency.id}>
                    {`${currency.currencyA} to ${currency.currencyB}`}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>
          </div>

          <button
            type="submit"
            className="bg-[#1790c8c7] px-7 py-3 text-white font-semibold text-base rounded-xl hover:bg-[#1790c8c7]"
          >
            Convert
          </button>
        </Form>
      </Spin>
    </div>
  );
};

export default Calculator;
