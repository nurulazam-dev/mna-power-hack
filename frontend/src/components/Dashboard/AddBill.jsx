import { useState, useEffect, useContext } from "react";
import AddBillModal from "../Billings/AddBillModal";
import { BASE_URL } from "../../../config";
import { authContext } from "../../context/AuthContext";
import Loading from "../../shared/Loading";

const AddBill = () => {
  const [bills, setBills] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [billsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(authContext);

  const billAttacherId = user?._id;
  const billAttacherEmail = user?.email;

  useEffect(() => {
    if (billAttacherId && billAttacherEmail) {
      fetchBills();
    }
  }, [billAttacherId, billAttacherEmail]);

  const fetchBills = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/bills`);
      if (!response.ok) {
        throw new Error(`Failed to fetch bills: ${response.status}`);
      }
      const data = await response.json();
      setBills(data?.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBill = (newBill) => {
    setBills((prev) => [newBill, ...prev]);
  };

  const indexOfLastBill = currentPage * billsPerPage;
  const indexOfFirstBill = indexOfLastBill - billsPerPage;

  const currentBills = Array.isArray(bills)
    ? bills.slice(indexOfFirstBill, indexOfLastBill)
    : [];

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <h1 className="text-3xl mb-2 font-bold text-slate-600 text-center">
        Add Bill
      </h1>

      {loading ? (
        <Loading />
      ) : error ? (
        <div className="text-center my-4 text-red-600">{error}</div>
      ) : currentBills?.length === 0 ? (
        <div className="text-center my-4">No bills found.</div>
      ) : (
        <div>
          {/* search bar part */}
          <div className="border bg-violet-600 my-4 rounded flex justify-between mx-auto px-7 py-2">
            <div className="flex items-center">
              <h2 className="font-semibold text-2xl text-white">
                Total Billings : {currentBills?.length}{" "}
              </h2>
            </div>
            <div>
              <AddBillModal
                onAddBill={handleAddBill}
                billAttacherId={billAttacherId}
                billAttacherEmail={billAttacherEmail}
              />
              <label
                htmlFor="bill-add-modal"
                className="btn text-[15px] text-white border-none hover:bg-green-700"
              >
                Add New Bill
              </label>
            </div>
          </div>
          {/* table part */}
          <table className="table table-compact text-center text-black w-full mx-auto">
            <thead>
              <tr className="text-black font-bold text-[15px]">
                <th className="border p-2">Bill S.</th>
                <th className="border px-1 py-2">Billing ID</th>
                <th className="border px-1 py-2">Billing Holder</th>
                <th className="border px-1 py-2">Phone</th>
                <th className="border px-1 py-2">$ Due</th>
                <th className="border px-1 py-2">Dateline</th>
              </tr>
            </thead>
            <tbody>
              {currentBills?.map((bill, index) => (
                <tr key={bill?._id} className="border text-left">
                  <td className="border px-1 py-2 text-center">
                    BILL-{index + 1}
                  </td>
                  <td className="border p-1 py-2">{bill?._id}</td>
                  <td className="border p-1 py-2">{bill?.billingHolder}</td>
                  <td className="border p-1 py-2">{bill?.phone}</td>
                  <td className="border p-1 py-2">$ {bill?.amount}</td>
                  <td className="border p-1 py-2">
                    {bill?.dateline
                      ? new Date(bill?.dateline).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })
                      : "Date not available"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination flex justify-center my-4">
            {[
              ...Array(
                Math.ceil(
                  (Array.isArray(bills) ? bills.length : 0) / billsPerPage
                )
              ).keys(),
            ].map((page) => (
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
            ))}
          </div>
        </div>
      )}
    </section>
  );
};

export default AddBill;
