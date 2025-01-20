/* eslint-disable react/prop-types */
// import { useState } from "react";
import { toast } from "react-toastify";
// import { BASE_URL, token } from "../../../config";

const DeleteBillModal = ({ bill, onDelete }) => {
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const handleConfirm = async () => {
    try {
      await onDelete(bill._id);
      document.getElementById("bill-delete-modal").checked = false; // Close the modal
    } catch (error) {
      toast.error(error);
    }
  };

  // bill delete handler
  /* const handleDeleteBill = async () => {
  
   
  }; */

  return (
    <div>
      <input type="checkbox" id="bill-delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-full max-w-xs bg-white">
          <h3 className="text-xl font-bold text-red-600 text-center">
            Delete Bill
          </h3>
          <div className="divider divider-neutral my-2 opacity-40"></div>

          {bill ? (
            <p className="text-[14px] text-red-600">
              Are you sure you want to delete{" "}
              <strong className="text-black font-bold">
                {bill?.billingHolder}
              </strong>
              &apos;s bill? Phone number:{" "}
              <strong className="text-black font-bold">{bill?.phone}</strong>
            </p>
          ) : (
            <p className="text-[14px] text-gray-600">No bill selected.</p>
          )}

          {/*  {error && <p className="text-red-500 text-sm mt-2">{error}</p>} */}
          <div className="modal-action">
            {/* <button
              onClick={handleConfirm}
              className={`btn btn-error btn-xs ${loading ? "loading" : ""}`}
              disabled={loading || !bill}
            >
              {loading ? "Deleting..." : "Confirm"}
            </button> */}
            <button
              onClick={handleConfirm}
              /* className={`btn btn-error btn-xs ${loading ? "loading" : ""}`} */
              className={`btn btn-error btn-xs `}
            >
              {/*  {loading ? "Deleting..." : "Confirm"} */} Delete
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
