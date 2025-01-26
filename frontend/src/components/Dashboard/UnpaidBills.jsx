import { useContext, useEffect, useState } from "react";
import { BASE_URL, token } from "../../../config";
import Error from "../../shared/Error";
import Loading from "../../shared/Loading";
import UpdateBillModal from "../Billings/UpdateBillModal";
import { toast } from "react-toastify";
import { authContext } from "../../context/AuthContext";

const UnpaidBills = () => {
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
    const fetchUnpaidBills = async () => {
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
        const unpaidBills = result?.data?.filter(
          (bill) => bill.status === "Unpaid"
        );
        setBills(unpaidBills);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchUnpaidBills();
  }, []);

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
        },
        body: JSON.stringify(updatedBill),
      });

      if (response.ok) {
        toast.success("Bill updated successfully!");

        const result = await response.json();

        if (result.data.status !== "Unpaid") {
          setBills(bills.filter((bill) => bill._id !== updatedBill._id));
        }
      } else {
        throw new Error("Failed to update bill.");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const filteredBills = bills.filter(
    (bill) =>
      bill.billingHolder.toLowerCase().includes(searchTerm.toLowerCase()) ||
      bill.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastBill = currentPage * billsPerPage;
  const indexOfFirstBill = indexOfLastBill - billsPerPage;
  const currentBills = filteredBills.slice(indexOfFirstBill, indexOfLastBill);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <h1 className="text-3xl mb-2 font-bold text-slate-600 text-center">
        Unpaid Bills
      </h1>

      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div>
          {/* Search Bar */}
          <div className="border bg-violet-600 my-4 rounded flex justify-between items-center w-full mx-auto px-7 py-2">
            <div className="flex items-center">
              <h2 className="font-semibold text-2xl text-white">UPBills</h2>
              <input
                type="text"
                placeholder="Search by Holder or Phone"
                className="input focus:outline-none bg-white text-black mx-3 w-full max-w-xs"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div>
              <h2 className="font-bold text-xl text-white">
                Total Unpaid Bills: {filteredBills?.length}
              </h2>
            </div>
          </div>

          {/* Table */}
          <table className="table table-compact text-center text-black w-full mx-auto">
            <thead>
              <tr className="text-violet-700 text-[15px]">
                <th className="border p-2">Billing S.</th>
                <th className="border p-1 py-3">Billing Holder</th>
                <th className="border p-1 py-3">Phone</th>
                <th className="border p-1 py-3">Amount</th>
                <th className="border p-1 py-3">Dateline</th>
                <th className="border p-1 py-3">B. Attach</th>
                <th className="border p-1 py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentBills?.map((bill, index) => (
                <tr key={bill?._id} className="border text-left">
                  <td className="border text-center p-0">
                    UPaidBill-{indexOfFirstBill + index + 1}
                  </td>
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
                  <td className="border p-1 py-2">
                    {bill?.billAttacher?.email}
                  </td>
                  <td className="flex justify-center p-1 py-2">
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
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Pagination */}
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

export default UnpaidBills;
