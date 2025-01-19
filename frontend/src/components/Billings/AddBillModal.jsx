/* eslint-disable react/prop-types */
import { useState } from "react";
import { BASE_URL } from "../../../config";
import { toast } from "react-toastify";

const AddBillModal = ({ loggedInUserId, onAddBill }) => {
  const [data, setData] = useState({
    billingHolder: "",
    phone: "",
    amount: "",
    status: "Unpaid",
    dateline: "",
    billAttacher: loggedInUserId,
  });
  const [errors, setErrors] = useState({});

  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "billingHolder":
        if (!value) error = "Name is required.";
        else if (value.trim().length < 3)
          error = "Name must be at least 3 characters.";
        break;
      case "phone":
        if (!value) error = "Phone number is required.";
        else if (!/^[0-9]{11}$/.test(value))
          error = "Phone number must be exactly 11 digits.";
        break;
      case "amount":
        if (!value) error = "Amount is required.";
        else if (value <= 0) error = "Amount must be greater than 0.";
        break;
      case "dateline":
        if (!value) error = "Dateline is required.";
        break;
      default:
        break;
    }

    return error;
  };

  const handleChange = ({ target: input }) => {
    const { name, value } = input;
    const error = validateField(name, value);

    setData({ ...data, [name]: value });
    setErrors({ ...errors, [name]: error });
  };

  const handleBillAdd = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");

    const validationErrors = {};
    Object.keys(data).forEach((key) => {
      const error = validateField(key, data[key]);
      if (error) validationErrors[key] = error;
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      Object.values(validationErrors).forEach((error) => toast.error(error));
      return;
    }

    const url = `${BASE_URL}/bills`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const res = await response.json();
        if (response.status === 400 && res.errors) {
          res.errors.forEach((error) => toast.error(error));
        } else if (response.status === 401) {
          throw new Error("You are Unauthorized");
        } else if (response.status === 500) {
          throw new Error("Internal Server Error");
        } else {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return;
      }

      const res = await response.json();
      toast.success(res.message);

      if (onAddBill) onAddBill(res);

      setData({
        billingHolder: "",
        phone: "",
        amount: "",
        status: "Unpaid",
        dateline: "",
        billAttacher: loggedInUserId || null,
      });
      document.getElementById("bill-add-modal").checked = false; // Close the modal after submit bill
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <section>
      <input type="checkbox" id="bill-add-modal" className="modal-toggle" />
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
              name="billingHolder"
              type="text"
              placeholder="Billing Holder Name"
              onChange={handleChange}
              value={data.billingHolder}
              className="input focus:outline-none border text-black border-black w-full max-w-xs mt-4 bg-white"
              required
            />
            {errors.billingHolder && (
              <p className="text-red-600 text-sm">{errors.billingHolder}</p>
            )}
            <input
              name="phone"
              type="number"
              placeholder="Phone Number"
              onChange={handleChange}
              value={data.phone}
              className="input focus:outline-none border border-black w-full max-w-xs mt-4 bg-white text-black"
              required
            />
            {errors.phone && (
              <p className="text-red-600 text-sm">{errors.phone}</p>
            )}
            <input
              name="amount"
              type="number"
              onChange={handleChange}
              value={data.amount}
              placeholder="Paid Amount"
              className="input focus:outline-none border border-black w-full max-w-xs mt-4 bg-white text-black"
              required
            />
            {errors.amount && (
              <p className="text-red-600 text-sm">{errors.amount}</p>
            )}
            <input
              name="dateline"
              type="date"
              onChange={handleChange}
              value={data.dateline}
              placeholder="Bill dateline"
              className="input focus:outline-none border border-black w-full max-w-xs mt-4 bg-white text-black"
              required
            />
            {errors.dateline && (
              <p className="text-red-600 text-sm">{errors.dateline}</p>
            )}
            <input
              type="submit"
              value="Bill Add"
              className="btn w-full border-none text-[15px] text-white hover:text-black max-w-xs mt-3 bg-violet-600 hover:bg-orange-600"
            />
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddBillModal;
