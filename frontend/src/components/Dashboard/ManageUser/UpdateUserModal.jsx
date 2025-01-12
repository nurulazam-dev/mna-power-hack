const UpdateUserModal = () => {
  /* const UpdateUserModal = ({ user, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: user?.phone || "",
    role: user?.role || "billingOfficer",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdate(formData);
    onClose();
  }; */

  return (
    <div>
      {/* <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"> */}
      <input type="checkbox" id="update-user-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white relative w-full max-w-sm">
          {/* <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-md"> */}
          <label
            htmlFor="update-user-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-2xl text-center font-bold text-indigo-600 mb-4">
            Update User
          </h2>
          {/* <form onSubmit={handleSubmit} className="space-y-4"> */}
          <form className="space-y-3">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                // value={formData.name}
                // onChange={handleInputChange}
                className="input focus:outline-none outline-none border border-black w-full mt-1 bg-white"
                placeholder="Enter user name"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                // value={formData.email}
                // onChange={handleInputChange}
                className="input focus:outline-none outline-none border border-black w-full mt-1 bg-white"
                placeholder="Enter user email"
                required
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="phone"
                name="phone"
                // value={formData.phone}
                // onChange={handleInputChange}
                className="input focus:outline-none outline-none border border-black w-full mt-1 bg-white"
                placeholder="Enter user phone number"
                required
              />
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                name="role"
                // value={formData.role}
                // onChange={handleInputChange}
                className="select select-bordered w-full focus:outline-none outline-none border border-black  mt-1 bg-white"
              >
                <option value="billingOfficer">Billing Officer</option>
                <option value="accountant">Accountant</option>
                <option value="admin">Admin</option>
              </select>
            </div>
            <input
              type="submit"
              value="Update User"
              className="btn w-full border-none text-[15px] text-white hover:text-black mt-3 bg-violet-600 hover:bg-orange-600"
            />
            {/* <div className="flex justify-end space-x-4 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-outline btn-error"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Update
            </button>
          </div> */}
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserModal;
