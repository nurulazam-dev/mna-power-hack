import { useState, useEffect } from "react";
import DeleteUserModal from "./DeleteUserModal";
import UpdateUserModal from "./UpdateUserModal";

const ManageUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  // Handle user deletion
  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/users/${userId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        alert("User deleted successfully!");
        setUsers(users.filter((user) => user.id !== userId)); // Update state
      } else {
        throw new Error("Failed to delete user.");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  // Handle user update
  const handleUpdateUser = async (updatedUser) => {
    if (!updatedUser) return;
    try {
      const response = await fetch(
        `http://localhost:8080/api/users/${updatedUser.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUser),
        }
      );

      if (response.ok) {
        alert("User updated successfully!");
        setUsers(
          users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
        );
      } else {
        throw new Error("Failed to update user.");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

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
            <th className="border">User Created</th>
            <th className="border">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className="border text-left" key={user.id}>
              <td className="border">{user.id}</td>
              <td className="border">{user.name}</td>
              <td className="border">{user.email}</td>
              <td className="border">{user.role}</td>
              <td className="border">
                {new Date(user.createdAt).toDateString()}
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
    </section>
  );
};

export default ManageUsers;
