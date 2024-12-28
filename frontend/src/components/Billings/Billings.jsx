import axios from "axios";
import { useEffect, useState } from "react";
// import url from "../../assets/data/billsData.json";
import AddBillModal from "./AddBillModal";
import BillingsTable from "./BillingsTable";

const Billings = () => {
  const [bills, setBills] = useState([]);
  console.log("bills:", bills);

  /* useEffect(() => {
    fetch(url)
      // fetch('data.json')
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []); */

  useEffect(() => {
    // axios.get(url).then((res) => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setBills(res.data);
    });
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
            <th className="border">Full Name</th>
            <th className="border">Email</th>
            <th className="border">Phone</th>
            <th className="border">Paid Amount</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          {bills?.map((bill) => (
            // <BillingsTable key={bill?.index} bill={bill} setDeleteBill={setDeleteBill} />
            <BillingsTable key={bill?.index} bill={bill} />
          ))}
        </tbody>
      </table>
      {/* {deleteBill && (
          <DeleteBillModal
            deleteBill={deleteBill}
            setDeleteBill={setDeleteBill}
          />
        )} */}
    </section>
  );
};

export default Billings;
