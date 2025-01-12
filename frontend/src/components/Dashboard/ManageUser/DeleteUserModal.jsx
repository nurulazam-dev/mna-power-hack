/* eslint-disable react/prop-types */

const DeleteUserModal = ({ user, onClose, onDelete }) => {
  const handleDelete = () => {
    onDelete(user.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <input type="checkbox" id="delete-user-modal" className="modal-toggle" />
      <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-sm">
        <h2 className="text-lg font-bold text-red-600 text-center">
          Delete User
        </h2>
        <p className="text-gray-700 text-center my-4">
          Are you sure you want to delete{" "}
          <span className="font-semibold">{user?.email}</span>? This action
          cannot be undone.
        </p>

        <div className="flex justify-center space-x-4 mt-6">
          <button
            type="button"
            onClick={onClose}
            className="btn btn-outline btn-secondary"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={handleDelete}
            className="btn btn-error"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
