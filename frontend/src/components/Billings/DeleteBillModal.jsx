const DeleteBillModal = () => {
  // const DeleteBillModal = ({ deleteBill, setDeleteBill }) => {
  // const { _id, name } = deleteBill;

  /* const handleConfirm = () => {
    fetch(`https://localhost:5000/api/billing-list/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }; */

  return (
    <div>
      <input type="checkbox" id="bill-delete-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-full max-w-xs bg-white">
          <h3 className="text-xl mb-2 font-bold text-red-600">Delete Bill</h3>
          <h3 className="font-bold text-violet-500 text-[16px]">
            Are you sure you want to delete{" "}
            <strong className="text-black">{name} `--- no bill`</strong>
          </h3>
          <div className="modal-action">
            <label
              htmlFor="bill-delete-modal"
              className="btn btn-error btn-xs"
              // onClick={() => handleConfirm}
            >
              Confirm
            </label>
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
