const ManageUsers = () => {
  return (
    <section className="pt-6 my-10 bg-white overflow-x-auto">
      <h1 className="text-3xl text-center">Manage Users</h1>

      <table className="table table-compact text-center text-black w-10/12 mx-auto">
        <thead>
          <tr className="text-black font-bold text-[16px]">
            <th className="border">User ID</th>
            <th className="border">User Name</th>
            <th className="border">User Email</th>
            <th className="border">User Rule</th>
            <th className="border">User Create</th>
            <th className="border">Action</th>
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
                  htmlFor="user-update-modal"
                  className="btn btn-outline btn-success btn-xs"
                >
                  Edit
                </label>
              </div>
              <div className="mx-2">
                {/* <DeleteBillModal /> */}
                <label
                  // onClick={() => setDeleteBill(bill)}
                  htmlFor="user-delete-modal"
                  className="btn btn-outline btn-error btn-xs"
                >
                  Delete
                </label>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default ManageUsers;
