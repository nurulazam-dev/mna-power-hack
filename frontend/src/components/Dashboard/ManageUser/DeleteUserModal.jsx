/* eslint-disable react/prop-types */

import { toast } from "react-toastify";

const DeleteUserModal = ({ user, onDelete }) => {
  const handleConfirm = async () => {
    try {
      await onDelete(user._id);
      // alert(`User ${user.email} has been deleted successfully.`);
      document.getElementById("delete-user-modal").checked = false; // Close the modal
    } catch (error) {
      toast.error(error);
      // alert("Failed to delete the user. Please try again.");
    }
  };

  return (
    <div className="">
      <input type="checkbox" id="delete-user-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-full max-w-xs bg-white">
          <h3 className="text-2xl text-center mb-4 font-bold text-red-600">
            Delete User
          </h3>
          <h3 className="font-semibold text-center text-slate-600 text-[16px]">
            Are you sure? You want to delete{" "}
            <span className="text-black">{user?.email}</span>
          </h3>
          <div className="modal-action">
            <button className="btn btn-error" onClick={handleConfirm}>
              Confirm
            </button>
            <label htmlFor="delete-user-modal" className="btn">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
