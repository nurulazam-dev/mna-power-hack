const ManageUsers = () => {
  return (
    <section>
      <h1 className="text-3xl mb-3 font-bold text-black text-center">
        Manage Users
      </h1>

      <table className="table table-compact text-center text-black w-full mx-auto">
        <thead>
          <tr className="text-violet-700 font-bold text-[16px]">
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
            <td className="border">2458745165</td>
            <td className="border">Nurul Azam</td>
            <td className="border">azam@dev.com</td>
            <td className="border">Admin</td>
            <td className="border">25 December, 2024</td>
            <td className="flex justify-center">
              <div className="mx-2">
                {/* <UpdateBillModal /> */}
                <label
                  htmlFor="user-update-modal"
                  className="btn btn-outline btn-success btn-xs"
                >
                  Update
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
