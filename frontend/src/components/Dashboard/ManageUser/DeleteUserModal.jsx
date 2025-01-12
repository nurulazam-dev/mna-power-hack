const DeleteUserModal = () => {
  /* const DeleteUserModal = ({ deleteUser, setDeleteUser }) => {
    const { _id, email } = deleteUser;

  const handleConfirm = () => {
    fetch(`https://localhost:5000/api/user/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }; */

  return (
    <div className="">
      {/* <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"> */}
      <input type="checkbox" id="delete-user-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-full max-w-xs bg-white">
          <h3 className="text-2xl text-center mb-2 font-bold text-red-600">
            Delete User
          </h3>
          <h3 className="font-bold text-violet-500 text-[16px]">
            Are you sure you want to delete{" "}
            {/* <strong className="text-black">{email}
            </strong> */}
            <strong className="text-black">power@hack.com</strong>
          </h3>
          <div className="modal-action">
            <label
              htmlFor="delete-user-modal"
              className="btn btn-error btn-xs"
              // onClick={() => handleConfirm}
            >
              Confirm
            </label>
            <label htmlFor="delete-user-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteUserModal;
