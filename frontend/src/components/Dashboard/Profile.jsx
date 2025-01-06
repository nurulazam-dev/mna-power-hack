import { FaUserCircle } from "react-icons/fa";

const Profile = () => {
  const user = {
    name: "Nurul Azam",
    rule: "admin",
    email: "nurul@azam.com",
    phone: "01712345678",
    /* profilePicture:
      "https://mnaofficialbd.web.app/static/media/mna.40a83df8ecd9f1bf01c3.png", */
    joined: "January 1, 2024",
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="card w-full shadow-xl bg-white">
        {/* Profile Header */}
        <div className="card-body items-center text-center">
          <div className="avatar">
            <FaUserCircle className="w-24 h-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2" />
            {/* <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.profilePicture} alt="Profile" />
            </div> */}
          </div>
          <h2 className="text-violet-600 text-2xl font-bold border">
            {user.name}
          </h2>
          <p className="text-gray-500 border">Joined on {user.joined}</p>
        </div>

        {/* Profile Details */}
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

            {/* Membership */}
            <div className="bg-white p-4 rounded-lg shadow-md">
              <h3 className="text-sm text-gray-500">Rule</h3>
              <p className="text-lg font-semibold">{user.rule}</p>
            </div>
          </div>

          {/* Edit Button */}
          <div className="mt-6 text-center">
            <button className="btn btn-primary px-8">Edit Profile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
