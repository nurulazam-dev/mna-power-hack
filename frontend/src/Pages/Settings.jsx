const Settings = () => {
  return (
    <section className=" bg-white shadow-xl rounded-xl mb-5">
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-xl p-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <p className="mt-2 text-sm">
          Update your account, security, and notification preferences.
        </p>
      </div>

      {/* Settings Content */}
      <div className="p-6 lg:p-10 space-y-4">
        {/* Profile Settings */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Profile Settings
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="input bg-white border border-violet-600 w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="input bg-white border border-violet-600 w-full"
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
                <span className="label-text">New Password</span>
              </label>
              <input
                type="password"
                placeholder="Enter new password"
                className="input bg-white border border-violet-600 w-full"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm Password</span>
              </label>
              <input
                type="password"
                placeholder="Confirm new password"
                className="input bg-white border border-violet-600 w-full"
              />
            </div>
          </div>
        </div>

        {/* Notification Settings */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Notification Settings
          </h2>
          <div className="mt-2 space-y-1">
            <div className="form-control">
              <label className="cursor-pointer flex items-center justify-between">
                <span className="label-text text-violet-600">
                  Email Notifications
                </span>
                <input type="checkbox" className="toggle toggle-primary" />
              </label>
            </div>
            <div className="form-control">
              <label className="cursor-pointer flex items-center justify-between">
                <span className="label-text text-violet-600">
                  Push Notifications
                </span>
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
    </section>
  );
};

export default Settings;
