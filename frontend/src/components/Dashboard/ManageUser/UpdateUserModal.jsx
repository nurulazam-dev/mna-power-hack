/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const UpdateUserModal = ({ user, onUpdate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
  });

  const [phoneError, setPhoneError] = useState("");

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        phone: user.phone || "",
        role: user.role || "",
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validate phone number
    if (name === "phone") {
      if (!/^\d{0,11}$/.test(value)) {
        setPhoneError("Phone number must be 11 digits.");
        return;
      } else {
        setPhoneError("");
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate phone length
    if (formData.phone.length !== 11) {
      setPhoneError("Phone number must be exactly 11 numeric characters.");
      return;
    }

    try {
      await onUpdate({ ...user, ...formData });
      document.getElementById("update-user-modal").checked = false; // Close the modal
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <input type="checkbox" id="update-user-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-white relative w-full max-w-sm">
          <label
            htmlFor="update-user-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-2xl text-center font-bold text-violet-600 mb-4">
            Update User
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3">
            {/* Name Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="input focus:outline-none outline-none border border-black w-full mt-1 bg-white"
                placeholder="Enter user name"
                required
              />
            </div>

            {/* Email Field (Read-Only) */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                readOnly
                className="input focus:outline-none outline-none border border-gray-400 w-full mt-1 bg-gray-100 cursor-not-allowed"
                placeholder="User email"
              />
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="input focus:outline-none outline-none border border-black w-full mt-1 bg-white"
                placeholder="Enter user phone number"
                required
              />
              {phoneError && (
                <p className="text-red-500 text-sm mt-1">{phoneError}</p>
              )}
            </div>

            {/* Role Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="select select-bordered w-full focus:outline-none outline-none border border-black mt-1 bg-white"
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
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateUserModal;
