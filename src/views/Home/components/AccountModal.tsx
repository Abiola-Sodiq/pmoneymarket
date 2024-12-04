import { Modal, Spin } from "antd";
import useFetchAccount from "../../../hooks/useFetchAccount";
import copyIcon from "../../../assets/icons/copyIcon.svg";
import { useState } from "react";
type AccountType = {
  id: number;
  created_at: string;
  bankName: string;
  acountNumber: string;
  accountName: string;
  accountType: string;
};
const AccountModal = ({
  openAccountModal,
  setOpenAccountModal,
  amountToPay,
  currencyASymbol,
}: {
  openAccountModal: boolean;
  setOpenAccountModal: (open: boolean) => void;
  amountToPay: number;
  currencyASymbol: string;
}) => {
  const [copiedAccountId, setCopiedAccountId] = useState<number | null>(null);
  const { accounts, loading, error } = useFetchAccount();
  if (error) {
    return <p>Error loading Account Details</p>;
  }

  const handleCopy = async (acountNumber: string, id: number) => {
    try {
      await navigator.clipboard.writeText(acountNumber);
      setCopiedAccountId(id);
      setTimeout(() => setCopiedAccountId(null), 10000);
    } catch (error) {
      console.error("Failed to copy: ", error);
    }
  };
  return (
    <Modal
      open={openAccountModal}
      onCancel={() => setOpenAccountModal(false)}
      footer={null}
      centered
    >
      <div className="flex items-center gap-1 justify-center flex-col sm:flex-row sm:gap-2 py-3">
        <p className=" font-medium text-sm md:text-lg">Amount to pay:</p>
        <p className=" text-center text-base md:text-2xl font-bold">
          {`${currencyASymbol}${amountToPay.toFixed(2)}`}
        </p>
      </div>
      <div>
        <p className=" text-center text-sm font-semibold pb-3">
          Copy an account to make payment
        </p>
        <Spin spinning={loading}>
          <div className=" flex flex-wrap gap-3 w-full">
            {accounts.map((account: AccountType) => (
              <div className=" border w-full text-center py-2 space-y-2 px-1 rounded-xl border-dashed">
                <span className="flex gap-2 justify-center items-center">
                  <p className=" font-medium ">Account Type:</p>
                  <p className=" font-semibold text-base mt-[-3px]">
                    {account.accountType}
                  </p>
                </span>
                <span className="flex gap-2 justify-center items-center">
                  <p className=" font-medium ">Bank Name:</p>
                  <p className=" font-semibold text-base mt-[-3px]">
                    {account.bankName}
                  </p>
                </span>
                <span className="flex gap-2 justify-center items-center">
                  <p className=" font-medium ">Account Number:</p>
                  <p className=" font-semibold text-base mt-[-3px]">
                    {account.acountNumber}
                  </p>
                  {copiedAccountId === account.id ? (
                    <p className="font-semibold text-[#1ea1def1]">Copied!</p>
                  ) : (
                    <img
                      src={copyIcon}
                      alt="copy"
                      className="cursor-pointer"
                      onClick={() =>
                        handleCopy(account.acountNumber, account.id)
                      }
                    />
                  )}
                </span>
                <span className="flex gap-2 justify-center items-center">
                  <p className=" font-medium whitespace-nowrap">
                    Account Name:
                  </p>
                  <p className=" font-semibold text-base mt-[-3px]">
                    {account.accountName}
                  </p>
                </span>
              </div>
            ))}
          </div>
        </Spin>
        <p className=" text-center text-sm font-medium py-3">
          Note: kindly transfer the exact amount to your preferred account
          details and click button below to send screenshot of payment proof.
        </p>
      </div>
      <div className=" flex justify-center ">
        <button
          type="button"
          className="bg-[#1790c8c7] px-5 py-2 text-white font-semibold text-base rounded-xl hover:bg-[#1790c8c7]"
        >
          I've sent the money
        </button>
      </div>
    </Modal>
  );
};

export default AccountModal;
