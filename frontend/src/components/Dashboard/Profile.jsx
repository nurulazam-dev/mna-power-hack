const Profile = () => {
  const user = {
    name: "Nurul Azam",
    email: "nurul@azam.com",
    phone: "01712345678",
    profilePicture:
      "https://nurulazam-dev.web.app/assets/mnaHeroImg-BlpkimJB.png",
    joined: "January 1, 2024",
  };

  return (
    <div className="bg-base-200 min-h-screen flex items-center justify-center">
      <div className="card w-full max-w-4xl shadow-xl bg-white">
        {/* Profile Header */}
        <div className="card-body items-center text-center">
          <div className="avatar mb-4">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={user.profilePicture} alt="Profile" />
            </div>
          </div>
          <h2 className="card-title text-2xl font-bold">{user.name}</h2>
          <p className="text-gray-500">Joined on {user.joined}</p>
        </div>

        {/* Profile Details */}
        <div className="p-6 bg-gray-100 rounded-b-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
              <h3 className="text-sm text-gray-500">Membership</h3>
              <p className="text-lg font-semibold">Premium Member</p>
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
