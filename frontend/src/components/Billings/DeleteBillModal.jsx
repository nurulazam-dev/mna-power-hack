/* eslint-disable react/prop-types */
import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL, token } from "../../../config";

const DeleteBillModal = ({ bill, onDelete }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`${BASE_URL}/bills/${bill._id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        Authorization: `Bearer ${token}`,
      });

      console.log("Response:", response);

      if (!response.ok) {
        const errorDetails = await response.text();
        console.error("Error details:", errorDetails);
        throw new Error("Failed to delete the bill");
      }

      const result = await response.json();
      onDelete(result.data);
      toast.success(result?.message);
      document.getElementById("bill-delete-modal").checked = false;
    } catch (err) {
      setError(err.message);
      console.error("Error:", err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <input type="checkbox" id="bill-delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-full max-w-xs bg-white">
          <h3 className="text-xl font-bold text-red-600 text-center">
            Delete Bill
          </h3>
          <div className="divider divider-neutral my-2 opacity-40"></div>
          <p className="text-[14px] text-red-600">
            Are you sure you want to delete{" "}
            <strong className="text-black font-bold">
              {bill?.billingHolder}
            </strong>
            &apos;s bill? Phone number:{" "}
            <strong className="text-black font-bold">{bill?.phone}</strong>
          </p>
          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          <div className="modal-action">
            <button
              onClick={handleDelete}
              className={`btn btn-error btn-xs ${loading ? "loading" : ""}`}
              disabled={loading}
            >
              {loading ? "Deleting..." : "Confirm"}
            </button>
            <label htmlFor="bill-delete-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBillModal;
