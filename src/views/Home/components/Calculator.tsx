import { Input, Select } from "antd";

const Calculator = () => {
  return (
    <div className=" flex justify-center items-center">
      <div className="bg-white rounded-2xl shadow-xl border border-gray-500 p-2">
        <p>Calculate our rate</p>
        <Input type="number" />
        <div className="flex items-center justify-between">
          <Select />
          <Select />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
