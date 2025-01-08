const OverviewCards = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
      {/* Card 1 */}
      <div className="card bg-white rounded w-full border shadow-xl">
        <div className="card-body py-5">
          <h2 className="card-title">Total Users</h2>
          <p className="text-4xl">1,234</p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card bg-white rounded w-full border shadow-xl">
        <div className="card-body py-5">
          <h2 className="card-title">Billing Officer</h2>
          <p className="text-4xl">567</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card bg-white rounded w-full border shadow-xl">
        <div className="card-body py-5">
          <h2 className="card-title">Accountant</h2>
          <p className="text-4xl">32</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="card bg-white rounded w-full border shadow-xl">
        <div className="card-body py-5">
          <h2 className="card-title">Total Bills</h2>
          <p className="text-4xl">4,567</p>
        </div>
      </div>
      {/* Card 5 */}
      <div className="card bg-white rounded w-full border shadow-xl">
        <div className="card-body py-5">
          <h2 className="card-title">Total Amount</h2>
          <p className="text-4xl">$ 4,34,567</p>
        </div>
      </div>
    </section>
  );
};

export default OverviewCards;
