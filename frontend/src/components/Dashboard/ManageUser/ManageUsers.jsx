import { useState, useEffect } from "react";
import DeleteUserModal from "./DeleteUserModal";
import UpdateUserModal from "./UpdateUserModal";
import { BASE_URL } from "../../../../config";
import Loading from "../../../shared/Loading";
import Error from "../../../shared/Error";
import { toast } from "react-toastify";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch(`${BASE_URL}/users`);
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
      });

      if (response.ok) {
        toast.success("User deleted successfully!");
        setUsers(users.filter((user) => user.id !== userId));
      } else {
        throw new Error("Failed to delete user.");
      }
    } catch (error) {
      toast.error(error.message);
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

  return (
    <section>
      <h1 className="text-3xl mb-3 font-bold text-black text-center">
        Manage Users
      </h1>

      {loading && <Loading />}
      {error && <Error />}
      {!loading && !error && (
        <table className="table table-compact text-center text-black w-full mx-auto">
          <thead>
            <tr className="text-violet-700 font-bold text-[16px]">
              <th className="border">User Name</th>
              <th className="border">User Email</th>
              <th className="border">Phone</th>
              <th className="border">User Rule</th>
              <th className="border">User Created</th>
              <th className="border">Action</th>
            </tr>
          </thead>
          <tbody>
            {users?.map((user) => (
              <tr className="border text-left" key={user?._id}>
                <td className="border">{user?.name}</td>
                <td className="border">{user?.email}</td>
                <td className="border">{user?.phone}</td>
                <td className="border">{user?.role}</td>
                <td className="border">
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "Date not available"}
                </td>
                <td className="flex justify-center">
                  <div className="mx-2">
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
                  <div className="mx-2">
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
      )}
    </section>
  );
};

export default ManageUsers;
