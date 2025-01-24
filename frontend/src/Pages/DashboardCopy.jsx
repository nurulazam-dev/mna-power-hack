import { Link, Outlet } from "react-router-dom";
import { TbHomeStats } from "react-icons/tb";
import { FaUsersCog, FaRegUser, FaUserEdit } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import brandLogo from "../assets/images/logo.png";

const DashboardCopy = () => {
  return (
    <section className="my-10 pr-5 flex w-full">
      {/* side bar part */}
      <div className="bg-slate-700 text-white pt-4 lg:w-1/6 md:w-1/6 w-1/12 h-screen">
        <ul className="menu py-4 px-2 text-white text-[18px] space-y-2">
          <div className="lg:block md:block hidden">
            <div className="flex justify-center items-center text-xl font-bold text-orange-500 mb-3">
              <img src={brandLogo} alt="Brand_Logo" className="w-[36px] h-9" />
              <h2 className="ml-2 hidden lg:block">POWER HACK</h2>
            </div>
            <hr className="mb-2" />
          </div>
          <li>
            <Link to="/dashboard-copy">
              <TbHomeStats className="lg:mr-3 md:mr-2 mr-0" />
              <span className="lg:block hidden">Overview</span>
            </Link>
          </li>
          {/* {admin ? (
            <> */}

          <li>
            <Link to="/dashboard-copy/manage-bills">
              <RiBillLine className="lg:mr-3 md:mr-2 mr-0" />

              <span className="lg:block hidden">Manage Bills</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard-copy/add-bill">
              <RiBillLine className="lg:mr-3 md:mr-2 mr-0" />

              <span className="lg:block hidden">Add Bill</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard-copy/unpaid-bills">
              <RiBillLine className="lg:mr-3 md:mr-2 mr-0" />

              <span className="lg:block hidden">Unpaid Bills</span>
            </Link>
          </li>

          <li>
            <Link to="/dashboard-copy/manage-users">
              <FaUsersCog className="lg:mr-3 md:mr-2 mr-0" />
              <span className="lg:block hidden">Manage Users</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard-copy/profile">
              <FaRegUser className="lg:mr-3 md:mr-2 mr-0" />

              <span className="lg:block hidden">Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard-copy/settings">
              <FaUserEdit className="lg:mr-3 md:mr-2 mr-0" />

              <span className="lg:block hidden">Settings</span>
            </Link>
          </li>
          <hr className="mb-2" />
          {/* </>
          ) : (
            <> */}
          <li>
            <Link to="/dashboard/myOrders">
              {/* <FontAwesomeIcon
                    icon={faCartPlus}
                    className="lg:mr-3 md:mr-2 mr-0"
                  /> */}
              <span className="lg:block hidden">My Orders</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard/addReview">
              {/* <FontAwesomeIcon
                    icon={faComment}
                    className="lg:mr-3 md:mr-2 mr-0"
                  /> */}
              <span className="lg:block hidden">Add A Review</span>
            </Link>
          </li>
          {/*  </>
          )} */}
        </ul>
      </div>
      {/* dashboard Outlet part */}
      <div className="drawer-content pt-8 px-5 lg:w-5/6 md:w-5/6 w-10/12">
        <Outlet />
      </div>
    </section>
  );
};

export default DashboardCopy;
