import { FaUsers } from "react-icons/fa";

const OverviewCards = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-black">
      {/* Card 1 */}
      <div className="bg-white rounded w-full border shadow-xl flex justify-between items-center p-4">
        <div>
          <h2 className="card-title font-bold text-indigo-600">Total Users</h2>
          <p className="text-3xl">1,234</p>
        </div>
        <div className="bg-indigo-600 rounded-full p-1">
          <FaUsers className="w-14 h-14 text-white" />
        </div>
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded w-full border shadow-xl">
        <div className="p-4">
          <h2 className="card-title font-bold text-indigo-600">
            Billing Officer
          </h2>
          <p className="text-3xl">567</p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded w-full border shadow-xl">
        <div className="p-4">
          <h2 className="card-title font-bold text-indigo-600">Accountant</h2>
          <p className="text-3xl">32</p>
        </div>
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded w-full border shadow-xl">
        <div className="p-4">
          <h2 className="card-title font-bold text-indigo-600">Total Bills</h2>
          <p className="text-3xl">4,567</p>
        </div>
      </div>
      {/* Card 5 */}
      <div className="bg-white rounded w-full border shadow-xl">
        <div className="p-4">
          <h2 className="card-title text-indigo-600 font-bold">Total Amount</h2>
          <p className="text-3xl">$ 4,34,567</p>
        </div>
      </div>
    </section>
  );
};

export default OverviewCards;
