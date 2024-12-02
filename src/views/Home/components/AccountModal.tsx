import { Modal } from "antd";

const AccountModal = ({
  openAccountModal,
  setOpenAccountModal,
  amountToPay,
}: {
  openAccountModal: boolean;
  setOpenAccountModal: (open: boolean) => void;
  amountToPay: number;
}) => {
  return (
    <Modal
      open={openAccountModal}
      onCancel={() => setOpenAccountModal(false)}
      footer={null}
      centered
    >
      <div className="flex items-center gap-2 justify-center">
        <p className=" font-medium text-sm md:text-lg">Amount to pay:</p>
        <p className=" text-center text-base md:text-2xl font-bold">
          ${amountToPay.toFixed(2)}
        </p>
      </div>
      <button
        type="button"
        className="bg-[#1790c8c7] px-5 py-2 text-white font-semibold text-base rounded-xl hover:bg-[#1790c8c7]"
      >
        I've sent the money
      </button>
    </Modal>
  );
};

export default AccountModal;
