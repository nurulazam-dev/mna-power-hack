// import AddBillModal from "./AddBillModal";
// import DeleteBillModal from "./DeleteBillModal";

const ManageBills = () => {
  return (
    <section>
      <h1 className="text-3xl mb-3 font-bold text-black text-center">
        Manage Bills
      </h1>
      <div className="border bg-violet-600 my-4 rounded flex justify-between items-center w-full mx-auto  px-7 py-2">
        <div className="flex items-center">
          <h2 className="font-semibold text-2xl text-white">Billings</h2>
          <input
            type="text"
            placeholder="Search"
            className="input bg-white text-black mx-3 w-full max-w-xs"
          />
        </div>
        <div>
          <h2 className="font-bold text-xl text-white">Total Bills: 172</h2>
        </div>
        {/* <div className="">
            <AddBillModal />
            <label htmlFor="bill-add-modal" className="btn">
              Add New Bill
            </label>
          </div> */}
      </div>

      <table className="table table-compact text-center text-black w-full mx-auto">
        <thead>
          <tr className="text-violet-700 text-[16px]">
            <th className="border">Billing ID</th>
            <th className="border">Billing Holder</th>
            <th className="border">Phone</th>
            <th className="border">Amount</th>
            <th className="border">Status</th>
            <th className="border">Dateline</th>
            <th className="border">Bill Attacher</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border text-left">
            <td className="border">20250121534</td>
            <td className="border">Kamal Uddin</td>
            <td className="border">01732165478</td>
            <td className="border">$ 782</td>
            <td className="border">Unpaid</td>
            <td className="border">12-02-25</td>
            <td className="border">ariyan</td>
            <td className="flex justify-center">
              <div className="mx-1">
                {/* <UpdateBillModal /> */}
                <label
                  htmlFor="bill-modal"
                  className="btn btn-outline btn-primary btn-xs"
                >
                  View
                </label>
              </div>
              <div className="mx-1">
                {/* <UpdateBillModal /> */}
                <label
                  htmlFor="bill-update-modal"
                  className="btn btn-outline btn-success btn-xs"
                >
                  Update
                </label>
              </div>
              <div className="mx-1">
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
    </section>
  );
};

export default ManageBills;
