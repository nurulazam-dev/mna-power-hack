import { useEffect, useState } from "react";
import AddBillModal from "./AddBillModal";
import DeleteBillModal from "./DeleteBillModal";
import Table from "./Table";

const ManageBills = () => {
  const [deleteBill, setDeleteBill] = useState(null);
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch("https://localhost:5000/api/billing-list")
      .then((res) => res.json())
      .then((data) => setBills(data));
  }, []);

  return (
    <div>
      <div className="overflow-x-auto">
        <div className="border bg-green-500 my-4 rounded flex justify-between w-10/12 mx-auto  px-7 py-2">
          <div className="flex items-center">
            <h2 className="font-semibold text-2xl">Billings</h2>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered mx-3 w-full max-w-xs"
            />
          </div>
          <div className="">
            <AddBillModal />
            <label htmlFor="bill-add-modal" className="btn">
              Add New Bill
            </label>
          </div>
        </div>

        <table className="table table-compact text-center  w-10/12 mx-auto">
          <thead>
            <tr>
              <th>Billing ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {bills?.map((bill) => (
              <Table key={bill._id} bill={bill} setDeleteBill={setDeleteBill} />
            ))}
          </tbody>
        </table>
        {deleteBill && (
          <DeleteBillModal
            deleteBill={deleteBill}
            setDeleteBill={setDeleteBill}
          />
        )}
      </div>
    </div>
  );
};

export default ManageBills;
