/* eslint-disable react/prop-types */
import { toast } from "react-toastify";

const DeleteUserModal = ({ user, onDelete }) => {
  const handleConfirm = async () => {
    try {
      await onDelete(user._id);
      document.getElementById("delete-user-modal").checked = false; // Close the modal
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div className="">
      <input type="checkbox" id="delete-user-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-full max-w-xs bg-white">
          <h3 className="text-xl font-bold text-red-600 text-center">
            Delete User
          </h3>
          <div className="divider divider-neutral my-2 opacity-40"></div>
          <h3 className="text-[15px] text-red-600">
            Are you sure? You want to delete{" "}
            <span className="text-black">{user?.email}</span>
          </h3>
          <div className="modal-action">
            <button
              className="rounded px-3 py-2 border-none text-[15px] text-white bg-red-600 hover:bg-violet-600"
              onClick={handleConfirm}
            >
              Confirm
            </button>
            <label
              htmlFor="delete-user-modal"
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

export default DeleteUserModal;
