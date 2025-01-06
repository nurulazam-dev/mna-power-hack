// import AddBillModal from "./AddBillModal";
// import DeleteBillModal from "./DeleteBillModal";

const ManageBills = () => {
  return (
    <div>
      <div className="overflow-x-auto">
        <div className="border bg-green-500 my-4 rounded flex justify-between w-10/12 mx-auto  px-7 py-2">
          <div className="flex items-center">
            <h2 className="font-semibold text-2xl">Billings</h2>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered mx-3 w-full max-w-xs"
            />
          </div>
          {/* <div className="">
            <AddBillModal />
            <label htmlFor="bill-add-modal" className="btn">
              Add New Bill
            </label>
          </div> */}
        </div>

        <table className="table table-compact text-center  w-10/12 mx-auto">
          <thead>
            <tr>
              <th>Billing ID</th>
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Paid Amount</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border text-left">
              <td className="border">User ID</td>
              <td className="border">User Name</td>
              <td className="border">User Email</td>
              <td className="border">User Rule</td>
              <td className="border">User Create</td>
              <td className="flex justify-center">
                <div className="mx-2">
                  {/* <UpdateBillModal /> */}
                  <label
                    htmlFor="bill-modal"
                    className="btn btn-outline btn-success btn-xs"
                  >
                    View
                  </label>
                </div>
                <div className="mx-2">
                  {/* <UpdateBillModal /> */}
                  <label
                    htmlFor="bill-update-modal"
                    className="btn btn-outline btn-success btn-xs"
                  >
                    Edit
                  </label>
                </div>
                <div className="mx-2">
                  {/* <DeleteBillModal /> */}
                  <label
                    // onClick={() => setDeleteBill(bill)}
                    htmlFor="bill-delete-modal"
                    className="btn btn-outline btn-error btn-xs"
                  >
                    Delete
                  </label>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* {deleteBill && (
          <DeleteBillModal
            deleteBill={deleteBill}
            setDeleteBill={setDeleteBill}
          />
        )} */}
      </div>
    </div>
  );
};

export default ManageBills;
