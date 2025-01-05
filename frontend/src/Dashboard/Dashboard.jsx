const Dashboard = () => {
  return (
    <section className="mt-20 w-full px-8 text-black">
      <h1 className="text-4xl mb-6 font-bold">Welcome to the Dashboard!</h1>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
        {/* Card 1 */}
        <div className="card rounded w-full bg-green-600 shadow-xl">
          <div className="card-body py-5">
            <h2 className="card-title">Total Users</h2>
            <p className="text-4xl">1,234</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="card rounded w-full bg-orange-500 shadow-xl">
          <div className="card-body py-5">
            <h2 className="card-title">Billing Officer</h2>
            <p className="text-4xl">567</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="card rounded w-full bg-slate-600 shadow-xl">
          <div className="card-body py-5">
            <h2 className="card-title">Accountant</h2>
            <p className="text-4xl">32</p>
          </div>
        </div>

        {/* Card 4 */}
        <div className="card rounded w-full bg-blue-600 shadow-xl">
          <div className="card-body py-5">
            <h2 className="card-title">Admin</h2>
            <p className="text-4xl">07</p>
          </div>
        </div>
        {/* Card 5 */}
        <div className="card rounded w-full bg-cyan-600 shadow-xl">
          <div className="card-body py-5">
            <h2 className="card-title">Total Bills</h2>
            <p className="text-4xl">4,567</p>
          </div>
        </div>
        {/* Card 6 */}
        <div className="card rounded w-full bg-lime-600 shadow-xl">
          <div className="card-body py-5">
            <h2 className="card-title">Total Amount</h2>
            <p className="text-4xl">$ 4,34,567</p>
          </div>
        </div>
        {/* Card 6 */}
        <div className="card rounded w-full bg-indigo-700 shadow-xl">
          <div className="card-body py-5">
            <h2 className="card-title">Paid Amount</h2>
            <p className="text-4xl">$ 4,22,396</p>
          </div>
        </div>
        {/* Card 8 */}
        <div className="card rounded w-full bg-red-600 shadow-xl">
          <div className="card-body py-5">
            <h2 className="card-title">Unpaid Amount</h2>
            <p className="text-4xl">$ 10,480</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
