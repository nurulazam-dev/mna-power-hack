import { useContext, useState } from "react";
import { authContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Settings = () => {
  const { user } = useContext(authContext);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("/api/update-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: user?.email,
          newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Password updated successfully!");
      } else {
        toast.error(data.message || "Failed to update password.");
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <section className=" bg-white shadow-xl rounded-xl mb-5">
      <div className="bg-gradient-to-r from-violet-700 to-violet-400 text-white rounded-t-xl p-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="mt-2 text-sm">
          Update your account, security, and notification preferences.
        </p>
      </div>

      {/* Settings Content */}
      <div className="p-6 lg:p-10 lg:pt-5 space-y-6">
        {/* Profile Settings */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Profile Settings
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Name</span>
              </label>
              <input
                type="text"
                value={user?.name}
                readOnly
                disabled
                className="input disabled:bg-white disabled:border-violet-600 disabled:text-slate-600 w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Email</span>
              </label>
              <input
                type="email"
                value={user?.email}
                readOnly
                disabled
                className="input disabled:bg-white disabled:border-violet-600 disabled:text-slate-600 w-full"
              />
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Security Settings
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">New Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="input bg-white border-violet-600 text-slate-800 w-full focus:outline-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-black">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="input bg-white border-violet-600 text-slate-800 w-full focus:outline-none"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={handlePasswordChange}
              className="btn btn-primary hover:btn-success hover:text-white"
            >
              Change Password
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Settings;
