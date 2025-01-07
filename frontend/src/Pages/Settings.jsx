const Settings = () => {
  return (
    <div className="bg-gradient-to-br from-blue-100 via-blue-200 to-blue-50 p-6 lg:p-12">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-xl">
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-xl p-6">
          <h1 className="text-3xl font-bold">Settings</h1>
          <p className="mt-2 text-sm">
            Update your account, security, and notification preferences.
          </p>
        </div>

        {/* Settings Content */}
        <div className="p-6 lg:p-10 space-y-8">
          {/* Profile Settings */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Profile Settings
            </h2>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>

          {/* Security Settings */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Security Settings
            </h2>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter new password"
                  className="input input-bordered w-full"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Confirm new password"
                  className="input input-bordered w-full"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              Notification Settings
            </h2>
            <div className="mt-4 space-y-4">
              <div className="form-control">
                <label className="cursor-pointer flex items-center justify-between">
                  <span className="label-text">Email Notifications</span>
                  <input type="checkbox" className="toggle toggle-primary" />
                </label>
              </div>
              <div className="form-control">
                <label className="cursor-pointer flex items-center justify-between">
                  <span className="label-text">Push Notifications</span>
                  <input type="checkbox" className="toggle toggle-secondary" />
                </label>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end gap-4">
            <button className="btn btn-outline btn-error">Cancel</button>
            <button className="btn btn-primary">Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;
