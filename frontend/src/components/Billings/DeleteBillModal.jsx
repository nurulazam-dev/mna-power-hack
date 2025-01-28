/* eslint-disable react/prop-types */
import { toast } from "react-toastify";

const DeleteBillModal = ({ bill, onDelete }) => {
  const handleConfirm = async () => {
    try {
      await onDelete(bill._id);
      document.getElementById("bill-delete-modal").checked = false; // Close the modal
    } catch (error) {
      toast.error(error);
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

          <div className="modal-action">
            <button
              onClick={handleConfirm}
              className="rounded px-3 py-2 border-none text-[15px] text-white bg-red-600 hover:bg-violet-600"
            >
              {" "}
              Delete
            </button>
            <label
              htmlFor="bill-delete-modal"
              className="rounded px-3 py-2 border-none text-[15px] text-white bg-green-600 hover:bg-black"
            >
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteBillModal;
