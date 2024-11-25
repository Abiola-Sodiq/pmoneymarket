import { Navigate } from "react-router-dom";
import { routePath } from "../../utils/helper";
import { Form } from "antd";
import supabase from "../../config/supabaseClient";

const Dashboard = () => {
  const handleSubmit = async ({
    currency,
    rate,
  }: {
    currency: string;
    rate: string;
  }) => {
    try {
      const { data, error } = await supabase
        .from("currencyRates")
        .insert([{ currency, rate }])
        .select();

      console.log("Supabase response:", { data, error }); 

      if (error) {
        console.error("Error inserting data:", error.message);
        alert(`Error: ${error.message}`);
        return;
      }

      if (data) {
        console.log("Data inserted successfully:", data);
        alert("Rate created successfully!");
      }
    } catch (err) {
      console.error("Unexpected error:", err);
      alert("An unexpected error occurred.");
    }
  };
  if (!sessionStorage.getItem(import.meta.env.VITE_APP_TOKEN)) {
    return <Navigate to={routePath.LOGIN} replace />;
  }
  return (
    <div className="bg-gradient-to-r from-[#1ea1def1] to-[#4dc7dcd6] absolute inset-0 p-4 space-y-10 min-h-[100svh] flex items-center justify-center">
      <div className="bg-[#f3f5f69d] py-3 rounded-2xl w-full px-10">
        <Form
          layout="vertical"
          className="space-y-2 w-full"
          onFinish={handleSubmit}
        >
          <Form.Item
            name="currency"
            label="Currency"
            rules={[{ required: true, message: "Currency is required" }]}
          >
            <input
              className="border-b-[1.5px] border-[#1790c8c7] rounded-xl focus:outline-none w-full border p-3 max-w-[400px]"
              placeholder="Enter Currency Type"
            />
          </Form.Item>
          <Form.Item
            name="rate"
            label="Rate"
            rules={[{ required: true, message: "Rate is required" }]}
          >
            <input
              className="border-b-[1.5px] border-[#1790c8c7] rounded-xl focus:outline-none w-full border p-3 max-w-[400px]"
              placeholder="Enter Rate"
            />
          </Form.Item>
          <button
            type="submit"
            className="bg-[#1790c8c7] px-7 py-3 text-white font-semibold text-base rounded-xl hover:bg-[#1790c8c7]"
          >
            Create Rate
          </button>
        </Form>
      </div>
    </div>
  );
};

export default Dashboard;
