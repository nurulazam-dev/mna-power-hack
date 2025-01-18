import { useEffect, useState } from "react";
import { BASE_URL } from "../../../config";
import Error from "../../shared/Error";
import Loading from "../../shared/Loading";
import ViewBillModal from "../Billings/ViewBillModal";
import UpdateBillModal from "../Billings/UpdateBillModal";
import DeleteBillModal from "../Billings/DeleteBillModal";

const ManageBills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBills = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/bills`);
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message);
        }
        setBills(result.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchBills();
  }, []);

  return (
    <section>
      <h1 className="text-3xl mb-3 font-bold text-black text-center">
        Manage Bills
      </h1>

      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div>
          <div className="border bg-violet-600 my-4 rounded flex justify-between items-center w-full mx-auto  px-7 py-2">
            <div className="flex items-center">
              <h2 className="font-semibold text-2xl text-white">Billings</h2>
              <input
                type="text"
                placeholder="Search"
                className="input focus:outline-none bg-white text-black mx-3 w-full max-w-xs"
              />
            </div>
            <div>
              <h2 className="font-bold text-xl text-white">
                Total Bills: {bills?.length}
              </h2>
            </div>
          </div>

          <table className="table table-compact text-center text-black w-full mx-auto">
            <thead>
              <tr className="text-violet-700 text-[16px]">
                <th className="border">Billing ID</th>
                <th className="border">Billing Holder</th>
                <th className="border">Phone</th>
                <th className="border">Amount</th>
                <th className="border">Status</th>
                <th className="border">Dateline</th>
                <th className="border">Bill Attacher</th>
                <th className="border">Action</th>
              </tr>
            </thead>
            <tbody>
              {bills?.map((bill, index) => (
                <tr key={bill?._id} className="border text-left">
                  <td className="border">BILL2025-{index + 1}</td>
                  <td className="border">{bill?.billingHolder}</td>
                  <td className="border">{bill?.phone}</td>
                  <td className="border">$ {bill?.amount}</td>
                  <td className="border">{bill?.status}</td>
                  <td className="border">
                    {bill?.dateline
                      ? new Date(bill?.dateline).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })
                      : "Date not available"}
                  </td>
                  <td className="border">{bill?.billAttacher}</td>
                  <td className="flex justify-center">
                    <div className="mx-1">
                      <ViewBillModal />
                      <label
                        htmlFor="bill-view-modal"
                        className="btn btn-outline btn-primary btn-xs"
                      >
                        View
                      </label>
                    </div>
                    <div className="mx-1">
                      <UpdateBillModal />
                      <label
                        htmlFor="bill-update-modal"
                        className="btn btn-outline btn-success btn-xs"
                      >
                        Update
                      </label>
                    </div>
                    <div className="mx-1">
                      <DeleteBillModal />
                      <label
                        // onClick={() => setDeleteBill(bill)}
                        htmlFor="bill-delete-modal"
                        className="btn btn-outline btn-error btn-xs"
                      >
                        Delete
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  );
};

export default ManageBills;
