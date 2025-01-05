const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-4xl font-bold">Welcome to the Dashboard!</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="card w-full bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Total Users</h2>
            <p className="text-4xl">1,234</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card w-full bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Active Users</h2>
            <p className="text-4xl">567</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card w-full bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Pending Requests</h2>
            <p className="text-4xl">32</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card w-full bg-white shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Revenue</h2>
            <p className="text-4xl">$4,567</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
