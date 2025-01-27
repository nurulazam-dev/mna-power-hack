import { useContext } from "react";
import { FaUserCircle } from "react-icons/fa";
import { authContext } from "../../context/AuthContext";
import { toast } from "react-toastify";

const Profile = () => {
  const { user, role } = useContext(authContext);

  const showToast = () => {
    toast.error(
      "You can't update your profile. Only admin can update the profile."
    );
  };

  return (
    <section className="shadow-xl rounded-xl w-full bg-white">
      <div className="bg-gradient-to-r from-violet-700 to-violet-400 text-white rounded-t-xl p-6">
        <h1 className="text-3xl font-bold">My Profile</h1>
        <p className="mt-2 text-sm">
          View your Name, Gmail, Role, Phone number and User ID.
        </p>
      </div>

      <div className="card-body items-center text-center p-4">
        <div className="avatar">
          <FaUserCircle className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" />
        </div>
        <h2 className="text-violet-600 lg:text-[22px] text-xl font-bold">
          {user ? user?.name : "User not found"}
        </h2>
        <p className="text-gray-500 text-md capitalize">
          {role ? role : "User role not found"}
        </p>
      </div>

      <div className="px-6 pb-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Email */}
          <div className="bg-white p-4 rounded-lg shadow-md border border-slate-50">
            <h3 className="text-sm text-gray-500">Email :</h3>
            <p className="lg:text-lg text-[16px] font-semibold">
              {user ? user?.email : "User email not found"}
            </p>
          </div>

          {/* Phone */}
          <div className="bg-white p-4 rounded-lg shadow-md border border-slate-50">
            <h3 className="text-sm text-gray-500">Phone number :</h3>
            <p className="lg:text-lg text-[16px] font-semibold">
              {user ? user?.phone : "Phone number not found"}
            </p>
          </div>

          {/* User ID */}
          <div className="bg-white p-4 rounded-lg shadow-md border border-slate-50">
            <h3 className="text-sm text-gray-500">User ID :</h3>

            <p className="lg:text-lg text-[16px] font-semibold">
              {user ? user?._id : "User ID not found"}
            </p>
          </div>
        </div>

        {/* Edit Button */}
        <div className="mt-3 text-center">
          <button
            onClick={showToast}
            className="border shadow-lg bg-violet-600 hover:bg-black py-[8px] rounded font-thin text-[18px] px-6 mt-2 mb-1 text-white hover:text-orange-500"
          >
            Update Profile
          </button>
        </div>
      </div>
    </section>
  );
};

export default Profile;
