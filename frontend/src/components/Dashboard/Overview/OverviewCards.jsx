import { FaUsers } from "react-icons/fa";
import { MdGroupAdd, MdAddChart } from "react-icons/md";
import { LiaAddressCardSolid } from "react-icons/lia";
import { FaSackDollar } from "react-icons/fa6";

const OverviewCards = () => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-black">
      {/* Card 1 */}
      <div className="bg-white rounded w-full border shadow-xl flex justify-between items-center p-4">
        <div>
          <h2 className=" font-bold text-indigo-600">Total Users</h2>
          <p className="text-3xl">1,234</p>
        </div>
        <div>
          <FaUsers className="w-14 h-14 text-indigo-600" />
        </div>
      </div>
      {/* Card 2 */}
      <div className="bg-white rounded w-full border shadow-xl flex justify-between items-center p-4">
        <div>
          <h2 className="font-bold text-indigo-600">Billing Officer</h2>
          <p className="text-3xl">567</p>
        </div>
        <div>
          <MdAddChart className="w-14 h-14 text-indigo-600" />
        </div>
      </div>
      {/* Card 3 */}
      <div className="bg-white rounded w-full border shadow-xl flex justify-between items-center p-4">
        <div>
          <h2 className="font-bold text-indigo-600">Accountant</h2>
          <p className="text-3xl">41</p>
        </div>
        <div>
          <MdGroupAdd className="w-14 h-14 text-indigo-600" />
        </div>
      </div>

      {/* Card 3 */}
      <div className="bg-white rounded w-full border shadow-xl flex justify-between items-center p-4">
        <div>
          <h2 className="font-bold text-indigo-600">Total Bills</h2>
          <p className="text-3xl">4,567</p>
        </div>
        <div>
          <LiaAddressCardSolid className="w-14 h-14 text-indigo-600" />
        </div>
      </div>
      {/* Card 4 */}
      <div className="bg-white rounded w-full border shadow-xl flex justify-between items-center p-4">
        <div>
          <h2 className="font-bold text-indigo-600">Total Amount</h2>
          <p className="text-[27px]">$434567</p>
        </div>
        <div>
          <FaSackDollar className="w-14 h-14 text-indigo-600" />
        </div>
      </div>
    </section>
  );
};

export default OverviewCards;
