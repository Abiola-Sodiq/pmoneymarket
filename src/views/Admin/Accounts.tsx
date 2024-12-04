import { Card, Form, message, Modal, Spin } from "antd";
import useFetchAccount from "../../hooks/useFetchAccount";
import supabase from "../../config/supabaseClient";
import { useState } from "react";
import editIcon from "../../assets/icons/editIcon.svg";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import addIcon from "../../assets/icons/addIcon.svg";

type AccountType = {
  id: number;
  bankName: string;
  acountNumber: string;
  accountName: string;
  accountType: string;
};

const Accounts = () => {
  const { accounts, loading, refetch } = useFetchAccount();
  const [openFormModal, setOpenFormModal] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [selectedCard, setSelectedCard] = useState<{
    id?: number;
  } | null>(null);
  const [form] = Form.useForm();

  const handleSubmit = async (values: AccountType) => {
    try {
      if (selectedCard?.id) {
        const { error } = await supabase
          .from("accounts")
          .update(values)
          .eq("id", selectedCard.id);
        if (error) throw error;
        message.success("Account updated successfully!");
      } else {
        const { error } = await supabase.from("accounts").insert([values]);
        if (error) throw error;
        message.success("Account created successfully!");
      }
      refetch();
      setOpenFormModal(false);
      setSelectedCard(null);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      message.error(`An error occurred: ${err.message}`);
    }
  };

  const handleEdit = (account: AccountType) => {
    setSelectedCard({ id: account.id });
    setOpenFormModal(true);
    form.setFieldsValue({
      ...account,
    });
  };

  const handleDelete = async (id: number) => {
    try {
      const { error } = await supabase.from("accounts").delete().eq("id", id);
      if (error) {
        message.error(`Failed to delete account: ${error.message}`);
      } else {
        message.success("Account deleted successfully");
      }
      refetch();
    } catch (error) {
      message.error("An unexpected error occurred.");
    }
    setDeleteModal(false);
  };

  return (
    <Spin spinning={loading}>
      <div className="w-full flex gap-6 flex-wrap">
        {accounts?.map((account: AccountType) => (
          <Card
            key={account.id}
            title={
              <div className=" flex items-center justify-between">
                {account.accountType.toUpperCase() || "Account Type"}
                <div className="flex items-center gap-5">
                  <img
                    src={editIcon}
                    className="cursor-pointer"
                    onClick={() => handleEdit(account)}
                    alt="Edit"
                  />
                  <img
                    src={deleteIcon}
                    className="cursor-pointer"
                    alt="Delete"
                    onClick={() => {
                      setSelectedCard({ id: account.id });
                      setDeleteModal(true);
                    }}
                  />
                </div>
              </div>
            }
            bordered={false}
            className="shadow-md"
          >
            <span className="flex items-center gap-1 text-base">
              <p className=" font-bold ">Bank Name:</p>
              <p className="font-medium">{account.bankName || "N/A"}</p>
            </span>
            <span className="flex items-center gap-1 text-base">
              <p className=" font-bold ">Account Number:</p>
              <p className="font-medium">{account.acountNumber || "N/A"}</p>
            </span>
            <span className="flex items-center gap-1 text-base">
              <p className=" font-bold ">Account Name:</p>{" "}
              <p className="font-medium">{account.accountName || "N/A"}</p>
            </span>
          </Card>
        ))}
      </div>
      <div className="flex justify-center w-full pt-5">
        <button
          type="button"
          onClick={() => {
            form.resetFields();
            setSelectedCard(null);
            setOpenFormModal(true);
          }}
          className="bg-[#1790c8c7] px-3 py-2 text-white font-semibold text-base rounded-xl hover:bg-[#1790c8c7] flex items-center gap-2"
        >
          <img src={addIcon} />
          Add Account
        </button>
      </div>
      <Modal
        open={openFormModal}
        onCancel={() => {
          setOpenFormModal(false);
          setSelectedCard(null);
          form.resetFields();
        }}
        footer={false}
        centered
      >
        <Form
          form={form}
          layout="vertical"
          className="space-y-2 w-full px-6"
          onFinish={handleSubmit}
          initialValues={
            selectedCard || {
              bankName: "",
              acountNumber: "",
              accountName: "",
              accountType: "",
            }
          }
        >
          <Form.Item
            name="accountType"
            label="Account Type"
            rules={[{ required: true, message: "Account type is required" }]}
          >
            <input
              className="border-b-[1.5px] border-[#1790c8c7] rounded-xl focus:outline-none w-full border p-3 max-w-[400px]"
              placeholder="Enter Account Type (e.g Naira Account, Paypal e.t.c)"
            />
          </Form.Item>
          <Form.Item
            name="bankName"
            label="Bank Name"
            rules={[{ required: true, message: "Bank name is required" }]}
          >
            <input
              className="border-b-[1.5px] border-[#1790c8c7] rounded-xl focus:outline-none w-full border p-3 max-w-[400px]"
              placeholder="Enter Bank Name"
            />
          </Form.Item>
          <Form.Item
            name="acountNumber"
            label="Account Number"
            rules={[{ required: true, message: "Bank name is required" }]}
          >
            <input
              className="border-b-[1.5px] border-[#1790c8c7] rounded-xl focus:outline-none w-full border p-3 max-w-[400px]"
              placeholder="Enter Account Number"
            />
          </Form.Item>
          <Form.Item
            name="accountName"
            label="Account Name"
            rules={[{ required: true, message: "Bank name is required" }]}
          >
            <input
              className="border-b-[1.5px] border-[#1790c8c7] rounded-xl focus:outline-none w-full border p-3 max-w-[400px]"
              placeholder="Enter Account Name"
            />
          </Form.Item>
          <button
            type="submit"
            className="bg-[#1790c8c7] px-7 py-3 text-white font-semibold text-base rounded-xl hover:bg-[#1790c8c7]"
          >
            {selectedCard ? "Update Account details" : "Create Account details"}
          </button>
        </Form>
      </Modal>
      <Modal
        open={deleteModal}
        onCancel={() => {
          setDeleteModal(false);
          setSelectedCard(null);
        }}
        footer={null}
        centered
      >
        <p className="text-lg font-semibold text-center">
          Delete Selected Account
        </p>
        <p className="text-base text-center py-3">
          Are you sure you want to delete this account?
        </p>
        <div className="flex justify-end gap-4">
          <button
            onClick={() => {
              setDeleteModal(false);
              setSelectedCard(null);
            }}
            className="px-4 bg-gray-300 rounded-md"
          >
            No
          </button>
          <button
            onClick={() => {
              if (selectedCard?.id) {
                handleDelete(selectedCard.id);
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

export default Accounts;
