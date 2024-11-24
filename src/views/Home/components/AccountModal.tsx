import { Modal } from "antd";
import { useState } from "react";

const AccountModal = () => {
  const [openModal, setOpenModal] = useState<boolean>();
  return (
    <Modal
      closable
      open={openModal}
      closeIcon
      onCancel={() => {
        setOpenModal(!openModal);
      }}
    >
      <p>Total:</p>

      <button
        type="submit"
        className="bg-[#1790c8c7] px-7 py-3 text-white font-semibold text-base rounded-xl hover:bg-[#1790c8c7]"
      >
        Trade
      </button>
    </Modal>
  );
};

export default AccountModal;
