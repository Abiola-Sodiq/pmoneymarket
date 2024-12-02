import { Modal, Spin, Table } from "antd";
import editIcon from "../../assets/icons/editIcon.svg";
import deleteIcon from "../../assets/icons/deleteIcon.svg";
import { useState } from "react";

type TableDataProps = {
  currencies: Array<{
    id: number;
    created_at: string;
    currencyA: string;
    currencyB: string;
    rate: number;
  }>;
  loading: boolean;
  handleDelete: (id: number) => void;
  handleEdit: (record: {
    id: number;
    currencyA: string;
    currencyB: string;
    rate: number;
  }) => void;
};

const TableData: React.FC<TableDataProps> = ({
  currencies,
  loading,
  handleDelete,
  handleEdit,
}) => {
  const [deleteModal, setDeleteModal] = useState<boolean>(false);
  const [selectedRecord, setSelectedRecord] = useState<number | null>(null);

  const columns = [
    {
      key: "id",
      title: "From Currency",
      dataIndex: "currencyA",
    },
    {
      key: "id",
      title: "To Currency",
      dataIndex: "currencyB",
    },
    { key: "id", title: "Rate", dataIndex: "rate" },
    {
      key: "action",
      title: "Action",
      render: (
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        _: any,
        record: {
          id: number;
          currencyA: string;
          currencyB: string;
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
              setSelectedRecord(record.id);
              setDeleteModal(true);
            }}
          />
        </div>
      ),
    },
  ];

  return (
    <Spin spinning={loading}>
      <Table
        dataSource={currencies}
        columns={columns}
        pagination={false}
        rowKey="id"
      />

      <Modal
        open={deleteModal}
        onCancel={() => {
          setDeleteModal(false);
          setSelectedRecord(null);
        }}
        footer={null}
        centered
      >
        <p className=" text-lg font-semibold text-center">
          Delete Selected Rate
        </p>
        <p className="text-base text-center py-3">
          Are you sure you want to delete this rate?
        </p>
        <div className="flex justify-end gap-4 ">
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
              if (selectedRecord !== null) {
                handleDelete(selectedRecord);
                setDeleteModal(false);
                setSelectedRecord(null);
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
