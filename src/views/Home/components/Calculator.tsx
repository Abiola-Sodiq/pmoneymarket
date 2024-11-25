/* eslint-disable @typescript-eslint/no-explicit-any */
import { Form, Select } from "antd";
import { useEffect, useState } from "react";
import supabase from "../../../config/supabaseClient";

const Calculator = () => {
  const [currency, setcurrency] = useState<any[] | null>();

  useEffect(() => {
    const fetchcurrencies = async () => {
      const { data, error } = await supabase.from("currencyRates").select();

      if (error) {
        console.log(error);
      }
      if (data) {
        setcurrency(data);
      }
    };

    fetchcurrencies();
  }, []);
  console.log(currency);
  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-500 p-5 w-full mx-auto max-w-[500px] text-center space-y-5">
      <p>Know Wetin Your Money Go Be</p>
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

        <div className="flex items-center justify-between px-5 w-full flex-col md:flex-row ">
          <Form.Item
            name="fromCurrency"
            rules={[{ required: true, message: "Please select a currency" }]}
          >
            <Select placeholder="From Currency">
              <Select.Option value="ZAR">
                ZAR (South African Rand)
              </Select.Option>
              <Select.Option value="USD">USD (US Dollar)</Select.Option>
              <Select.Option value="NGN">NGN (Nigerian Naira)</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="toCurrency"
            rules={[{ required: true, message: "Please select a currency" }]}
          >
            <Select placeholder="To Currency" className="">
              <Select.Option value="ZAR">
                ZAR (South African Rand)
              </Select.Option>
              <Select.Option value="USD">USD (US Dollar)</Select.Option>
              <Select.Option value="NGN">NGN (Nigerian Naira)</Select.Option>
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
    </div>
  );
};

export default Calculator;
