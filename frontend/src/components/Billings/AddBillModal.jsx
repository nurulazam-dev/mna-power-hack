import axios from "axios";
import { useState } from "react";

const AddBillModal = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
  });

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleBillAdd = (event) => {
    event.preventDefault();
    const url = "http://localhost:8080/api/bill-list";
    const { data: res } = axios.post(url, data);
    console.log(res.message);
  };

  return (
    <div className="">
      <input type="checkbox" id="bill-add-modal" className="modal-toggle " />
      <div className="modal">
        <div className="modal-box relative w-full max-w-xs bg-white">
          <label
            htmlFor="bill-add-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-xl text-center text-black font-bold">
            Add New Bill
          </h3>
          <form onSubmit={handleBillAdd}>
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              onChange={handleChange}
              value={data.name}
              className="input outline-none border text-black border-black w-full max-w-xs mt-4 bg-white"
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={data.email}
              className="input outline-none border border-black w-full max-w-xs mt-4 bg-white text-black"
              required
            />
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              onChange={handleChange}
              value={data.phone}
              className="input outline-none border border-black w-full max-w-xs mt-4 bg-white text-black"
              required
            />
            <input
              name="amount"
              type="number"
              onChange={handleChange}
              value={data.amount}
              placeholder="Paid Amount"
              className="input outline-none border border-black w-full max-w-xs mt-4 bg-white text-black"
              required
            />
            <input
              type="submit"
              value="Bill Add"
              className="btn w-full border-none text-[15px] text-white hover:text-black max-w-xs mt-3 bg-green-600 hover:bg-orange-600"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddBillModal;
