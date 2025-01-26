import { useContext, useEffect, useState } from "react";
import { BASE_URL, token } from "../../../config";
import Error from "../../shared/Error";
import Loading from "../../shared/Loading";
import ViewBillModal from "../Billings/ViewBillModal";
import UpdateBillModal from "../Billings/UpdateBillModal";
import DeleteBillModal from "../Billings/DeleteBillModal";
import { toast } from "react-toastify";
import { authContext } from "../../context/AuthContext";

const ManageBills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBill, setSelectedBill] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [billsPerPage] = useState(5);
  const { user } = useContext(authContext);
  const billUpdaterEmail = user?.email;

  useEffect(() => {
    const fetchBills = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/bills`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

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

  // bill delete handler
  const handleDeleteBill = async (billId) => {
    try {
      const response = await fetch(`${BASE_URL}/bills/${billId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        toast.success("Bill deleted successfully!");
        setBills(bills.filter((bill) => bill._id !== billId));
      } else {
        throw new Error("Failed to delete bill.");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  // bill update handler
  const handleUpdateBill = async (updatedBill) => {
    if (!updatedBill) return;
    try {
      updatedBill.billUpdater = user?.email;
      updatedBill.updatedDate = new Date().toISOString();
      const response = await fetch(`${BASE_URL}/bills/${updatedBill._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedBill),
      });

      if (response.ok) {
        toast.success("Bill updated successfully!");

        const result = await response.json();

        setBills(
          bills.map((bill) =>
            bill._id === updatedBill._id ? result.data : bill
          )
        );
      } else {
        throw new Error("Failed to update bill.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Handle search filtering
  const filteredBills = bills.filter(
    (bill) =>
      bill.billingHolder.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.status.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastBill = currentPage * billsPerPage;
  const indexOfFirstBill = indexOfLastBill - billsPerPage;
  const currentBills = filteredBills.slice(indexOfFirstBill, indexOfLastBill);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <h1 className="text-3xl mb-2 font-bold text-slate-600 text-center">
        Manage Bills
      </h1>

      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div>
          {/* search bar part */}
          <div className="border bg-violet-600 my-4 rounded flex justify-between items-center w-full mx-auto  px-7 py-2">
            <div className="flex items-center">
              <h2 className="font-semibold text-2xl text-white">Billings</h2>
              <input
                type="text"
                placeholder="Search by Holder, Phone, or Status"
                className="input focus:outline-none bg-white text-black mx-3 w-full max-w-xs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <h2 className="font-bold text-xl text-white">
                Total Bills: {filteredBills?.length}
              </h2>
            </div>
          </div>

          {/* table part */}
          <table className="table table-compact text-center text-black w-full mx-auto">
            <thead>
              <tr className="text-violet-700 text-[14px]">
                <th className="border p-2">No</th>
                <th className="border p-1 py-2">Billing Holder</th>
                <th className="border p-1 py-2">Phone</th>
                <th className="border p-1 py-2">Amount</th>
                <th className="border p-1 py-2">Status</th>
                <th className="border p-1 py-2">Dateline</th>
                <th className="border p-1 py-2">B.Attach</th>
                <th className="border p-1 py-2">Updated</th>
                <th className="border p-1 py-2">Updater</th>
                <th className="border p-1 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentBills?.map((bill, index) => (
                <tr key={bill?._id} className="border text-left text-[13px]">
                  <td className="border text-center p-0">
                    B-{indexOfFirstBill + index + 1}
                  </td>
                  <td className="border p-1 py-2">{bill?.billingHolder}</td>
                  <td className="border p-1 py-2">{bill?.phone}</td>
                  <td className="border p-1 py-2">$ {bill?.amount}</td>
                  <td className="border text-center p-1 py-2">
                    {" "}
                    <span
                      className={
                        `${bill?.status}` == "Unpaid"
                          ? "text-red-600"
                          : "text-green-600"
                      }
                    >
                      {bill?.status}
                    </span>
                  </td>
                  <td className="border p-1 py-2">
                    {bill?.dateline
                      ? new Date(bill?.dateline).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "2-digit",
                        })
                      : "Date not available"}
                  </td>
                  <td className="border p-1 py-2">
                    {bill?.billAttacher?.email}
                  </td>
                  <td className="border p-1 py-2">
                    {bill?.updatedDate
                      ? new Date(bill?.updatedDate).toLocaleDateString(
                          "en-GB",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "2-digit",
                          }
                        )
                      : "Not updated"}
                  </td>
                  <td className="border p-1 py-2">
                    {bill?.billUpdater ? bill?.billUpdater : "Not updated"}
                  </td>
                  <td className="flex justify-center items-center p-1 py-2">
                    <div className="mx-1">
                      <ViewBillModal bill={selectedBill} />
                      <label
                        onClick={() => setSelectedBill(bill)}
                        htmlFor="bill-view-modal"
                        className="btn btn-outline btn-primary btn-xs"
                      >
                        View
                      </label>
                    </div>
                    <div className="mx-1">
                      <UpdateBillModal
                        bill={selectedBill}
                        billUpdaterEmail={billUpdaterEmail}
                        onUpdate={handleUpdateBill}
                      />
                      <label
                        onClick={() => setSelectedBill(bill)}
                        htmlFor="bill-update-modal"
                        className="btn btn-outline btn-success btn-xs"
                      >
                        Update
                      </label>
                    </div>
                    <div className="mx-1">
                      <DeleteBillModal
                        bill={selectedBill}
                        onDelete={handleDeleteBill}
                      />
                      <label
                        onClick={() => setSelectedBill(bill)}
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

          <div className="pagination flex justify-center mt-4">
            {[...Array(Math.ceil(bills.length / billsPerPage)).keys()].map(
              (page) => (
                <button
                  key={page}
                  onClick={() => paginate(page + 1)}
                  className={`px-3 py-1 mx-1 border rounded ${
                    currentPage === page + 1
                      ? "bg-violet-600 text-white"
                      : "bg-white"
                  }`}
                >
                  {page + 1}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ManageBills;
