import { useState, useEffect, useContext } from "react";
import AddBillModal from "../components/Billings/AddBillModal";
// import { GrFormView } from "react-icons/gr";
// import ViewBillModal from "../components/Billings/ViewBillModal";
import { BASE_URL } from "../../config";
import { authContext } from "../context/AuthContext";
import Loading from "../shared/Loading";

const BillingPage = () => {
  const [bills, setBills] = useState([]);
  // const [selectedBill, setSelectedBill] = useState(null);

  const [currentPage, setCurrentPage] = useState(1);
  const [billsPerPage] = useState(10);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useContext(authContext);

  useEffect(() => {
    if (user?._id) {
      fetchBills();
    }
  }, [user?._id]);

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
    <section className="pt-6 my-10 bg-white overflow-x-auto">
      <div className="border bg-violet-600 my-4 rounded flex justify-between w-10/12 mx-auto px-7 py-2">
        <div className="flex items-center">
          <h2 className="font-semibold text-2xl text-white">
            Total Billings : {bills?.length}{" "}
          </h2>
        </div>
        <div>
          <AddBillModal onAddBill={handleAddBill} loggedInUserId={user?._id} />
          <label
            htmlFor="bill-add-modal"
            className="btn text-[15px] text-white border-none hover:bg-green-700"
          >
            Add New Bill
          </label>
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : error ? (
        <div className="text-center my-4 text-red-600">{error}</div>
      ) : currentBills?.length === 0 ? (
        <div className="text-center my-4">No bills found.</div>
      ) : (
        <>
          <table className="table table-compact text-center text-black w-10/12 mx-auto">
            <thead>
              <tr className="text-black font-bold text-[16px]">
                <th className="border">Billing S.</th>
                <th className="border">Billing ID</th>
                <th className="border">Billing Holder</th>
                <th className="border">Phone</th>
                <th className="border">Due $</th>
                <th className="border">Dateline</th>
                {/* <th className="border">Action</th> */}
              </tr>
            </thead>
            <tbody>
              {currentBills?.map((bill, index) => (
                <tr key={bill?._id} className="border text-left">
                  <td className="border">BILL2025-{index + 1}</td>
                  <td className="border">{bill?._id}</td>
                  <td className="border">{bill?.billingHolder}</td>
                  <td className="border">{bill?.phone}</td>
                  <td className="border">$ {bill?.amount}</td>
                  <td className="border">
                    {bill?.dateline
                      ? new Date(bill?.dateline).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })
                      : "Date not available"}
                  </td>
                  {/* <td className="flex justify-center items-center px-0">
                    <ViewBillModal bill={selectedBill} />
                    <label
                      htmlFor="bill-view-modal"
                      onClick={() => setSelectedBill(bill)}
                      className="btn btn-outline btn-success btn-sm px-1"
                    >
                      <GrFormView className="w-7 h-7" />
                      View
                    </label>
                  </td> */}
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
        </>
      )}
    </section>
  );
};

export default BillingPage;
