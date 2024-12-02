import { Navigate, useNavigate } from "react-router-dom";
import { routePath } from "../../utils/helper";
import supabase from "../../config/supabaseClient";
import TableData from "./TableData";
import addIcon from "../../assets/icons/addIcon.svg";
import logoutIcon from "../../assets/icons/logoutIcon.svg";
import { useState } from "react";
import { Form, message, Modal } from "antd";
import useCurrencies from "../../hooks/useFetchCurrencies";

const Dashboard = () => {
  const [openFormModal, setOpenFormModal] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<{
    id?: number;
    currencyA: string;
    currencyB: string;
    rate: number;
  } | null>(null);

  const navigate = useNavigate();
  const [form] = Form.useForm();
  const { refetch, currencies, loading } = useCurrencies();

  const handleSubmit = async (values: {
    currencyA: string;
    currencyB: string;
    rate: number;
  }) => {
    try {
      if (selectedRecord?.id) {
        const { error } = await supabase
          .from("currency")
          .update(values)
          .eq("id", selectedRecord.id);
        if (error) throw error;
        message.success("Rate updated successfully!");
        setSelectedRecord(null);
      } else {
        const { error } = await supabase.from("currency").insert([values]);
        if (error) throw error;
        message.success("Rate created successfully!");
        setSelectedRecord(null);
      }
      refetch();
      setOpenFormModal(false);
      setSelectedRecord(null);
      form.resetFields();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      message.error(`An error occurred: ${err.message}`);
    }
  };

  const handleEdit = (record: {
    id: number;
    currencyA: string;
    currencyB: string;
    rate: number;
  }) => {
    setSelectedRecord(record);
    setOpenFormModal(true);
    form.setFieldsValue(record);
  };
  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase.from("currency").delete().eq("id", id);
      if (error) {
        message.error(`Failed to delete rate: ${error.message}`);
      }
      message.success("Rate deleted succesfully");
      refetch();
    } catch (error) {
      message.error("An unexpected error occurred.");
    }
  };
  if (!sessionStorage.getItem(import.meta.env.VITE_APP_TOKEN)) {
    return <Navigate to={routePath.LOGIN} replace />;
  }
  return (
    <div className="bg-gradient-to-r from-[#1ea1def1] to-[#4dc7dcd6] absolute inset-0 p-4 space-y-10 min-h-[100svh] ">
      <div className=" flex justify-end">
        <span
          className=" w-full max-w-32  border  cursor-pointer flex items-center gap-2 py-2 bg-white rounded-xl px-4"
          onClick={() => {
            sessionStorage.clear();
            navigate(routePath.LOGIN);
          }}
        >
          <img src={logoutIcon} alt="" />
          Logout
        </span>
      </div>
      <div className="flex items-center justify-center">
        <div className="bg-[#f3f5f69d] py-3 rounded-2xl w-full mx-auto px-2">
          <TableData
            currencies={currencies}
            loading={loading}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
          <div className="flex justify-end pt-4">
            <button
              type="button"
              onClick={() => {
                setSelectedRecord(null);
                setOpenFormModal(true);
              }}
              className="bg-[#1790c8c7] px-3 py-2 text-white font-semibold text-base rounded-xl hover:bg-[#1790c8c7] flex items-center gap-2"
            >
              <img src={addIcon} />
              Add Rate
            </button>
          </div>

          <Modal
            open={openFormModal}
            onCancel={() => {
              setOpenFormModal(false);
              setSelectedRecord(null);
              form.resetFields();
            }}
            footer={false}
            centered
            maskClosable={false}
          >
            <Form
              form={form}
              layout="vertical"
              className="space-y-2 w-full px-6"
              onFinish={handleSubmit}
              initialValues={
                selectedRecord ? selectedRecord: { currencyA: "", currencyB: "", rate: null }
              }
            >
              <div className="flex items-center justify-between">
                <Form.Item
                  name="currencyA"
                  label="From Currency"
                  rules={[{ required: true, message: "Currency is required" }]}
                >
                  <input
                    className="border-b-[1.5px] border-[#1790c8c7] rounded-xl focus:outline-none w-full border p-3 max-w-[400px]"
                    placeholder="Enter Currency Type"
                  />
                </Form.Item>
                <Form.Item
                  name="currencyB"
                  label="To Currency"
                  rules={[{ required: true, message: "Currency is required" }]}
                >
                  <input
                    className="border-b-[1.5px] border-[#1790c8c7] rounded-xl focus:outline-none w-full border p-3 max-w-[400px]"
                    placeholder="Enter Currency Type"
                  />
                </Form.Item>
              </div>
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
                {selectedRecord ? "Update Rate" : "Create Rate"}
              </button>
            </Form>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
