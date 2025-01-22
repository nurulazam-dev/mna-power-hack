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
        <div className="bg-white px-5 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-2 text-violet-600 text-center">
            Bills Summary:
          </h2>
          <ul className="text-lg text-gray-700">
            <li>Total Bills: {bills?.length}</li>
            <li>
              Total Paid Bills:{" "}
              {bills.filter((bill) => bill.status === "Paid")?.length}
            </li>
            <li>
              Total Unpaid Bills:{" "}
              {bills.filter((bill) => bill.status === "Unpaid")?.length}
            </li>
            <li>Total Paid Amount: ${totalPaidAmount?.toFixed(2)}</li>
            <li>Total Unpaid Amount: ${totalUnpaidAmount?.toFixed(2)}</li>
          </ul>
        </div>

        {/* Users Summary */}
        <div className="bg-white p-5 shadow-lg rounded-lg">
          <h2 className="text-2xl font-bold mb-3 text-black">Users Summary</h2>
          <ul className="text-lg text-gray-700">
            <li>Total Users: {users?.length}</li>
            <li>
              Active Users: {users.filter((user) => user.isActive)?.length}
            </li>
            <li>
              Inactive Users: {users.filter((user) => !user.isActive)?.length}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Summary;
