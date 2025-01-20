/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const UpdateBillModal = ({ bill, onUpdate }) => {
  const [formData, setFormData] = useState({
    billingHolder: "",
    phone: "",
    amount: "",
    status: "",
  });

  useEffect(() => {
    if (bill) {
      setFormData({
        billingHolder: bill.billingHolder || "",
        phone: bill.phone || "",
        amount: bill.amount || "",
        status: bill.status || "",
      });
    }
  }, [bill]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await onUpdate({ ...bill, ...formData });

      document.getElementById("bill-update-modal").checked = false; // Close the modal
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <input type="checkbox" id="bill-update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white relative w-full max-w-sm">
          <label
            htmlFor="bill-update-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>

          <h2 className="text-2xl text-center font-bold text-indigo-600 mb-4">
            Update Bill
          </h2>

          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Billing Holder */}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Billing Holder
              </label>
              <input
                type="text"
                name="billingHolder"
                value={formData.billingHolder}
                onChange={handleInputChange}
                className="input focus:outline-none outline-none border disabled:border-black w-full mt-1 disabled:bg-white disabled:text-slate-600"
                disabled
              />
            </div>
            {/* Phone number */}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input focus:outline-none outline-none border disabled:border-black w-full mt-1 disabled:bg-white disabled:text-slate-600"
                disabled
              />
            </div>

            <div className="lg:flex items-center justify-between w-full">
              {/* Amount */}
              <div className="w-full lg:w-1/2">
                <label className="block text-sm font-medium text-gray-700">
                  Paid Amount
                </label>
                <input
                  type="text"
                  name="amount"
                  value={formData.amount}
                  onChange={handleInputChange}
                  className="input focus:outline-none outline-none border disabled:border-black w-full mt-1 disabled:bg-white disabled:text-slate-600"
                  disabled
                />
              </div>
              {/* status Selection */}
              <div className="w-full lg:w-1/2 lg:ml-2">
                <label className="block text-sm font-medium text-gray-700">
                  Status
                </label>
                <select
                  name="status"
                  value={formData.status}
                  onChange={handleInputChange}
                  className="select select-bordered w-full focus:outline-none outline-none border border-black mt-1 bg-white"
                >
                  <option value="Unpaid">Unpaid</option>
                  <option value="Paid">Paid</option>
                </select>
              </div>
            </div>

            <input
              type="submit"
              value="Update Bill"
              className="btn w-full border-none text-[15px] text-white hover:text-black max-w-xs mt-3 bg-violet-600 hover:bg-orange-600"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateBillModal;
