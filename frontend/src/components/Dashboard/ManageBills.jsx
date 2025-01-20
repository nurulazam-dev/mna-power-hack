import { useEffect, useState } from "react";
import { BASE_URL } from "../../../config";
import Error from "../../shared/Error";
import Loading from "../../shared/Loading";
import ViewBillModal from "../Billings/ViewBillModal";
import UpdateBillModal from "../Billings/UpdateBillModal";
import DeleteBillModal from "../Billings/DeleteBillModal";
import { toast } from "react-toastify";

const ManageBills = () => {
  const [bills, setBills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBill, setSelectedBill] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [billsPerPage] = useState(10);

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

  // bill delete handler
  const handleDeleteBill = async (billId) => {
    try {
      const response = await fetch(`${BASE_URL}/bills/${billId}`, {
        method: "DELETE",
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
  /* const result = await response.json();
      console.log("data : ", result);
      onDelete?.(result.data);

      toast.success(result?.message || "Bill deleted successfully");
      document.getElementById("bill-delete-modal").checked = false;
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }; */

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

  const totalPages = Math.ceil(filteredBills.length / billsPerPage);

  /* const handleDelete = (deletedBill) => {
    setBills((prevBills) =>
      prevBills.filter((bill) => bill._id !== deletedBill._id)
    );
  }; */

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

          <table className="table table-compact text-center text-black w-full mx-auto">
            <thead>
              <tr className="text-violet-700 text-[16px]">
                <th className="border">Billing S.</th>
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
              {currentBills?.map((bill, index) => (
                <tr key={bill?._id} className="border text-left">
                  <td className="border">
                    BILL2025-{indexOfFirstBill + index + 1}
                  </td>
                  <td className="border">{bill?.billingHolder}</td>
                  <td className="border">{bill?.phone}</td>
                  <td className="border">$ {bill?.amount}</td>
                  <td className="border text-center">
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
                        onUpdate={setBills}
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

          <div className="flex justify-center mt-4">
            {[...Array(totalPages).keys()].map((page) => (
              <button
                key={page + 1}
                className={`btn btn-xs mx-1 ${
                  currentPage === page + 1 ? "btn-active" : ""
                }`}
                onClick={() => setCurrentPage(page + 1)}
              >
                {page + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default ManageBills;
