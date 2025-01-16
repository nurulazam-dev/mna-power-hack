import { useEffect, useState } from "react";
import AddBillModal from "../components/Billings/AddBillModal";
import UpdateBillModal from "../components/Billings/UpdateBillModal";
import { GrFormView } from "react-icons/gr";

const BillingPage = () => {
  const [bills, setBills] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      // fetch('data.json')
      .then((res) => res.json())
      .then((data) => setBills(data));
  }, []);

  return (
    <section className="pt-6 my-10 bg-white overflow-x-auto">
      <div className="border bg-violet-600 my-4 rounded flex justify-between w-10/12 mx-auto  px-7 py-2">
        <div className="flex items-center">
          <h2 className="font-semibold text-2xl text-white">Billings</h2>
          <input
            type="text"
            placeholder="Search"
            className="input bg-white input-bordered text-black mx-3 w-full max-w-xs"
          />
        </div>
        <div className="">
          <AddBillModal />
          <label
            htmlFor="bill-add-modal"
            className="btn text-[15px] text-white border-none hover:bg-green-700"
          >
            Add New Bill
          </label>
        </div>
      </div>

      <table className="table table-compact text-center text-black w-10/12 mx-auto">
        <thead>
          <tr className="text-black font-bold text-[16px]">
            <th className="border">Billing ID</th>
            <th className="border">Billing Holder Name</th>
            <th className="border">Phone</th>
            <th className="border">Paid Amount</th>
            <th className="border">Paid Date</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          {bills?.map((bill) => (
            // <BillingsTable key={bill?.index} bill={bill} setDeleteBill={setDeleteBill} />
            <tr key={bill?.index} className="border text-left">
              <td className="border">{bill.id}</td>
              {/* <td className="border">{data.billingHolder}</td> */}
              <td className="border">{bill.name}</td>
              <td className="border">{bill.phone}</td>
              {/* <td className="border">{data.amount}</td> */}
              <td className="border">$ 120</td>
              {/* <td className="border">{data?.date}</td> */}
              <td className="border">30-12-2024</td>
              <td className="flex justify-center items-center px-0">
                <UpdateBillModal />
                <label
                  htmlFor="bill-view-modal"
                  className="btn btn-outline btn-success btn-sm px-1"
                >
                  <GrFormView className="w-7 h-7 " />
                  View
                </label>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default BillingPage;
