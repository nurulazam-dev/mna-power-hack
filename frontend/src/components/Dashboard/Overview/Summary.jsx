import { useEffect, useState } from "react";
import { BASE_URL } from "../../../../config";

const Summary = () => {
  const [bills, setBills] = useState([]);
  const [users, setUsers] = useState([]);
  const [totalPaidAmount, setTotalPaidAmount] = useState(0);
  const [totalUnpaidAmount, setTotalUnpaidAmount] = useState(0);

  useEffect(() => {
    const fetchBills = async () => {
      try {
        const response = await fetch(`${BASE_URL}/bills`);
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message);
        }
        setBills(result?.data || []);

        // Calculate total paid and unpaid amounts
        const paidAmount = result?.data
          ?.filter((bill) => bill.status === "Paid")
          .reduce((sum, bill) => sum + bill.amount, 0);
        setTotalPaidAmount(paidAmount);

        const unpaidAmount = result?.data
          ?.filter((bill) => bill.status === "Unpaid")
          .reduce((sum, bill) => sum + bill.amount, 0);
        setTotalUnpaidAmount(unpaidAmount);
      } catch (error) {
        console.error("Error fetching bills:", error.message);
      }
    };

    const fetchUsers = async () => {
      try {
        const response = await fetch(`${BASE_URL}/users`);
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message);
        }
        setUsers(result?.data || []);
      } catch (error) {
        console.error("Error fetching users:", error.message);
      }
    };

    fetchBills();
    fetchUsers();
  }, []);

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white px-5 pb-2 shadow-md rounded">
          <h2 className="text-2xl font-bold mb-1 text-slate-600 text-center">
            Bills Summary:
          </h2>
          <table className="table-auto text-[14px] text-gray-600 w-full border-collapse border border-gray-300">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-1 font-medium">Total Bills:</td>
                <td className="px-4 py-1 text-violet-600">{bills?.length}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-1 font-medium">Total Paid Bills:</td>
                <td className="px-4 py-1 text-violet-600">
                  {bills.filter((bill) => bill.status === "Paid")?.length}
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-1 font-medium">Total Unpaid Bills:</td>
                <td className="px-4 py-1 text-violet-600">
                  {bills.filter((bill) => bill.status === "Unpaid")?.length}
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-1 font-medium">Total Paid Amount:</td>
                <td className="px-4 py-1 text-violet-600">
                  $ {totalPaidAmount?.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-1 font-medium">Total Unpaid Amount:</td>
                <td className="px-4 py-1 text-violet-600">
                  $ {totalUnpaidAmount?.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Users Summary */}
        <div className="bg-white px-5 pb-2 shadow-md rounded">
          <h2 className="text-2xl font-bold mb-1 text-slate-600 text-center">
            Users Summary:
          </h2>

          <table className="table-auto text-[14px] text-gray-600 w-full border-collapse border border-gray-300">
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-1 font-medium">Total Users:</td>
                <td className="px-4 py-1 text-violet-600">{users?.length}</td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-1 font-medium">Billing Officer:</td>
                <td className="px-4 py-1 text-violet-600">
                  {
                    users.filter((user) => user?.role === "billingOfficer")
                      ?.length
                  }
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="px-4 py-1 font-medium">Accountant:</td>
                <td className="px-4 py-1 text-violet-600">
                  {users.filter((user) => user?.role === "accountant")?.length}
                </td>
              </tr>
              <tr>
                <td className="px-4 py-1 font-medium">Admin:</td>
                <td className="px-4 py-1 text-violet-600">
                  {users.filter((user) => user?.role === "admin")?.length}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Summary;
