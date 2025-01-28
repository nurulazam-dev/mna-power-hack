import { useState, useEffect } from "react";
import DeleteUserModal from "./DeleteUserModal";
import UpdateUserModal from "./UpdateUserModal";
import { BASE_URL, token } from "../../../../config";
import Loading from "../../../shared/Loading";
import Error from "../../../shared/Error";
import { toast } from "react-toastify";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(5);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/users`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        const result = await response.json();
        if (!response.ok) {
          throw new Error(result.message);
        }
        setUsers(result.data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchUsers();
  }, []);

  // Handle user deletion
  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`${BASE_URL}/users/${userId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        toast.success("User deleted successfully!");
        setUsers(users.filter((user) => user._id !== userId));
      } else {
        throw new Error("Failed to delete user.");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  // Handle user update
  const handleUpdateUser = async (updatedUser) => {
    if (!updatedUser) return;
    try {
      const response = await fetch(`${BASE_URL}/users/${updatedUser._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(updatedUser),
      });

      if (response.ok) {
        toast.success("User updated successfully!");
        setUsers(
          users.map((user) =>
            user._id === updatedUser._id ? updatedUser : user
          )
        );
      } else {
        throw new Error("Failed to update user.");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  // Handle search filtering
  const filteredUsers = users.filter(
    (user) =>
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUsers.slice(indexOfFirstUser, indexOfLastUser);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <section>
      <div className="lg:flex justify-center items-end  text-center mb-2">
        <h1 className="lg:text-3xl text-2xl font-bold text-slate-600 lg:mr-[3px]">
          Manage Users
        </h1>
        <h5 className="lg:text-[15px] text-[13px] font-semibold text-slate-400">
          (Total Bills : {users?.length})
        </h5>
      </div>

      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <div>
          {/* search bar part */}
          <div className="border bg-violet-600 my-4 rounded lg:flex justify-between items-center w-full mx-auto lg:px-7 px-3 py-2">
            <div>
              <h2 className="font-bold text-xl text-white lg:text-left text-center lg:mb-0 mb-2">
                Search Result: {filteredUsers?.length}
              </h2>
            </div>
            <div className="lg:flex items-center">
              <input
                type="text"
                placeholder="Search by Email, Phone, or Role"
                className="input focus:outline-none bg-white text-black w-full"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <table className="table table-compact text-center text-black w-full mx-auto">
            <thead>
              <tr className="text-violet-700 text-[14px] hidden md:table-row bg-gray-100">
                <th className="border p-2">Index</th>
                <th className="border p-1 py-2">User Name</th>
                <th className="border p-1 py-2">User Email</th>
                <th className="border p-1 py-2">Phone</th>
                <th className="border p-1 py-2">User Role</th>
                <th className="border p-1 py-2">User Created</th>
                <th className="border p-1 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {currentUsers?.map((user, index) => (
                <tr
                  className="md:table-row border-b border-gray-200 hover:bg-gray-100 block mb-4 lg:mb-0 border text-left text-[13px]"
                  key={user?._id}
                >
                  <td className="border text-center p-0 lg:py-0 py-2 lg:bg-slate-50 bg-slate-200 md:table-cell block">
                    <span className="font-bold md:hidden text-violet-700 text-[14px]">
                      Index :
                    </span>
                    ULN-{indexOfFirstUser + index + 1}
                  </td>

                  <td className="border lg:px-1 px-4 py-[6px] lg:py-2 md:table-cell flex justify-between  items-center">
                    <span className="font-bold md:hidden mr-1">
                      User Name :
                    </span>
                    {user?.name}
                  </td>
                  <td className="border lg:px-1 px-4 py-[6px] lg:py-2 md:table-cell flex justify-between  items-center">
                    <span className="font-bold md:hidden mr-1">
                      User Email :
                    </span>
                    {user?.email}
                  </td>
                  <td className="border lg:px-1 px-4 py-[6px] lg:py-2 md:table-cell flex justify-between  items-center">
                    <span className="font-bold md:hidden mr-1">
                      Phone Number :
                    </span>
                    {user?.phone}
                  </td>
                  <td className="border lg:px-1 px-4 py-[6px] lg:py-2 md:table-cell flex justify-between  items-center">
                    <span className="font-bold md:hidden mr-1">
                      User Role :
                    </span>
                    {user?.role}
                  </td>
                  <td className="border lg:px-1 px-4 py-[6px] lg:py-2 md:table-cell flex justify-between  items-center">
                    <span className="font-bold md:hidden mr-1">
                      User Created :
                    </span>
                    {user?.createdAt
                      ? new Date(user.createdAt).toLocaleDateString("en-GB", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })
                      : "Date not available"}
                  </td>
                  <td className="border lg:px-1 px-4 py-[6px] lg:py-2 flex lg:justify-center justify-between  items-center">
                    <span className="font-bold md:hidden mr-1">Action: </span>
                    <div className="mr-1">
                      <UpdateUserModal
                        user={selectedUser}
                        onUpdate={handleUpdateUser}
                      />
                      <label
                        htmlFor="update-user-modal"
                        className="btn btn-outline btn-success btn-xs"
                        onClick={() => setSelectedUser(user)}
                      >
                        Update
                      </label>
                    </div>
                    <div className="ml-1">
                      <DeleteUserModal
                        user={selectedUser}
                        onDelete={handleDeleteUser}
                      />
                      <label
                        htmlFor="delete-user-modal"
                        className="btn btn-outline btn-error btn-xs"
                        onClick={() => setSelectedUser(user)}
                      >
                        Delete
                      </label>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="pagination flex justify-center my-4">
            {[...Array(Math.ceil(users.length / usersPerPage)).keys()].map(
              (page) => (
                <button
                  key={page}
                  onClick={() => paginate(page + 1)}
                  className={`px-3 py-1 mx-1 border rounded ${
                    currentPage === page + 1
                      ? "bg-violet-600 text-white"
                      : "bg-white"
                  }`}
                >
                  {page + 1}
                </button>
              )
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ManageUsers;
