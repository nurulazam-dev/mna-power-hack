import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { authContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useContext(authContext);

  const showToast = () => {
    toast.error(
      "You can't update your profile. Only admin can update the profile."
    );
  };

  return (
    <div className="">
      <div className="card rounded-none w-full shadow-xl bg-white">
        <div className="card-body items-center text-center">
          <div className="avatar">
            <FaUserCircle className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" />
          </div>
          <h2 className="text-violet-600 text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500 font-bold text-lg capitalize">
            {user.role}
          </p>
        </div>

        <div className="p-6 bg-gray-100 rounded-b-lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Email */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-sm text-gray-500">Email</h3>
              <p className="text-lg font-semibold">{user.email}</p>
            </div>

            {/* Phone */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-sm text-gray-500">Phone</h3>
              <p className="text-lg font-semibold">{user.phone}</p>
            </div>

            {/* User ID */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-sm text-gray-500">User ID</h3>

              <p className="text-lg font-semibold">{user._id}</p>
            </div>
          </div>

          {/* Edit Button */}
          <div className="mt-6 text-center">
            <button
              onClick={showToast}
              className="border shadow-lg bg-violet-600 hover:bg-black py-[8px] rounded font-thin text-[18px] px-6 mt-2 mb-1 text-white hover:text-orange-500"
            >
              Update Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
