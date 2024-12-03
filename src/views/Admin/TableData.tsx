import { Form, message, Modal, Spin, Table } from "antd";
import editIcon from "../../assets/icons/editIcon.svg";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import addIcon from "../../assets/icons/addIcon.svg";
import { useState } from "react";
import supabase from "../../config/supabaseClient";
import useCurrencies from "../../hooks/useFetchCurrencies";

const TableData = () => {
  const [openFormModal, setOpenFormModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<{
    id?: number;
    currencyA: string;
    currencyB: string;
    currencyASymbol?: string;
    currencyBSymbol?: string;
    rate: number;
  } | null>(null);

  const { refetch, currencies, loading } = useCurrencies();
  const [form] = Form.useForm();

  const handleSubmit = async (values: {
    currencyA: string;
    currencyB: string;
    currencyASymbol: string;
    currencyBSymbol: string;
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
      } else {
        const { error } = await supabase.from("currency").insert([values]);
        if (error) throw error;
        message.success("Rate created successfully!");
      }
      refetch();
      setOpenFormModal(false);
      setSelectedRecord(null);
    } catch (err: any) {
      message.error(`An error occurred: ${err.message}`);
    }
  };

  const handleEdit = (record: {
    id: number;
    currencyA: string;
    currencyB: string;
    currencyASymbol: string;
    currencyBSymbol: string;
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
      } else {
        message.success("Rate deleted successfully");
      }
      refetch();
    } catch (error) {
      message.error("An unexpected error occurred.");
    }
    setDeleteModal(false);
    setSelectedRecord(null);
  };

  const columns = [
    {
      key: "id",
      title: "From Currency",
      dataIndex: "currencyA",
    },
    {
      key: "id",
      title: "From Currency Sign",
      dataIndex: "currencyASymbol",
    },
    {
      key: "id",
      title: "To Currency ",
      dataIndex: "currencyB",
    },
    {
      key: "id",
      title: "To Currency Sign",
      dataIndex: "currencyBSymbol",
    },
    { key: "id", title: "Rate", dataIndex: "rate" },
    {
      key: "action",
      title: "Action",
      render: (
        _: any,
        record: {
          id: number;
          currencyA: string;
          currencyB: string;
          currencyASymbol: string;
          currencyBSymbol: string;
          rate: number;
        }
      ) => (
        <div className="flex items-center gap-5">
          <img
            src={editIcon}
            className="cursor-pointer"
            onClick={() => handleEdit(record)}
            alt="Edit"
          />
          <img
            src={deleteIcon}
            className="cursor-pointer"
            alt="Delete"
            onClick={() => {
              setSelectedRecord(record);
              setDeleteModal(true);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <Spin spinning={loading}>
      <div className="bg-[#f3f5f69d] py-3 rounded-2xl w-full mx-auto px-2">
        <Table
          dataSource={currencies}
          columns={columns}
          pagination={false}
          rowKey="id"
        />

        <div className="flex justify-end pt-4">
          <button
            type="button"
            onClick={() => {
              form.resetFields();
              setSelectedRecord(null);
              setOpenFormModal(true);
            }}
            className="bg-[#1790c8c7] px-3 py-2 text-white font-semibold text-base rounded-xl hover:bg-[#1790c8c7] flex items-center gap-2"
          >
            <img src={addIcon} />
            Add Rate
          </button>
        </div>
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
            selectedRecord || {
              currencyA: "",
              currencyB: "",
              currencyASymbol: "",
              currencyBSymbol: "",
              rate: null,
            }
          }
        >
          <div>
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
                name="currencyASymbol"
                label="From Currency Sign"
                rules={[
                  { required: true, message: "Currency sign is required" },
                ]}
              >
                <input
                  className="border-b-[1.5px] border-[#1790c8c7] rounded-xl focus:outline-none w-full border p-3 max-w-[400px]"
                  placeholder="Enter Currency Sign"
                />
              </Form.Item>
            </div>
            <div className="flex items-center justify-between">
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
              <Form.Item
                name="currencyBSymbol"
                label="To Currency Sign"
                rules={[
                  { required: true, message: "Currency sign is required" },
                ]}
              >
                <input
                  className="border-b-[1.5px] border-[#1790c8c7] rounded-xl focus:outline-none w-full border p-3 max-w-[400px]"
                  placeholder="Enter Currency Sign"
                />
              </Form.Item>
            </div>
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
      <Modal
        open={deleteModal}
        onCancel={() => {
          setDeleteModal(false);
          setSelectedRecord(null);
        }}
        footer={null}
        centered
      >
        <p className="text-lg font-semibold text-center">
          Delete Selected Rate
        </p>
        <p className="text-base text-center py-3">
          Are you sure you want to delete this rate?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => {
              setDeleteModal(false);
              setSelectedRecord(null);
            }}
            className="px-4 bg-gray-300 rounded-md"
          >
            No
          </button>
          <button
            onClick={() => {
              if (selectedRecord?.id) {
                handleDelete(selectedRecord.id);
              }
            }}
            className="px-4 py-1 bg-red-500 text-white rounded-md"
          >
            Delete
          </button>
        </div>
      </Modal>
    </Spin>
  );
};

export default TableData;
