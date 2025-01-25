import { Link, Outlet } from "react-router-dom";
import { TbHomeStats } from "react-icons/tb";
import { FaUsersCog, FaRegUser, FaUserEdit } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import brandLogo from "../assets/images/logo.png";
import { useState } from "react";

const DashboardCopy = () => {
  const [tab, setTab] = useState("overview");

  const activeTabClass =
    "bg-slate-100 text-indigo-600 w-full mb-3 rounded-md flex items-center lg:justify-start justify-center lg:px-4 lg:py-2 px-1";
  const inactiveTabClass =
    "bg-transparent text-white w-full mb-3 rounded-md flex items-center lg:justify-start justify-center lg:px-4 lg:py-2 px-1";

  return (
    <section className="my-10 pr-5 flex w-full">
      {/* side bar part */}
      <div className="bg-slate-700 text-white pt-4 w-[10%] lg:w-[18%] h-screen">
        <div className="py-4 px-2 text-white text-[18px] space-y-2">
          <div className="lg:block md:block hidden">
            <div className="flex justify-center items-center text-xl font-bold text-yellow-600 mb-3">
              <img src={brandLogo} alt="Brand_Logo" className="w-[36px] h-9" />
              <h2 className="ml-2 hidden lg:block">DASHBOARD</h2>
            </div>
            <hr className="mb-2" />
          </div>
          <li
            onClick={() => setTab("overview")}
            className={`${
              tab == "overview" ? activeTabClass : inactiveTabClass
            }`}
          >
            <Link to="/dashboard-copy">
              <TbHomeStats className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />
              <span className="lg:block hidden">Overview</span>
            </Link>
          </li>
          {/* {admin ? (
            <> */}

          <li
            onClick={() => setTab("manageBills")}
            className={`${
              tab == "manageBills" ? activeTabClass : inactiveTabClass
            } `}
          >
            <Link to="/dashboard-copy/manage-bills">
              <RiBillLine className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />

              <span className="lg:block hidden">Manage Bills</span>
            </Link>
          </li>
          <li
            onClick={() => setTab("addBill")}
            className={`${
              tab == "addBill" ? activeTabClass : inactiveTabClass
            } `}
          >
            <Link to="/dashboard-copy/add-bill">
              <RiBillLine className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />

              <span className="lg:block hidden">Add Bill</span>
            </Link>
          </li>
          <li
            onClick={() => setTab("unpaidBills")}
            className={`${
              tab == "unpaidBills" ? activeTabClass : inactiveTabClass
            } `}
          >
            <Link to="/dashboard-copy/unpaid-bills">
              <RiBillLine className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />

              <span className="lg:block hidden">Unpaid Bills</span>
            </Link>
          </li>

          <li
            onClick={() => setTab("manageUsers")}
            className={`${
              tab == "manageUsers" ? activeTabClass : inactiveTabClass
            } `}
          >
            <Link to="/dashboard-copy/manage-users">
              <FaUsersCog className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />
              <span className="lg:block hidden">Manage Users</span>
            </Link>
          </li>
          <li
            onClick={() => setTab("profile")}
            className={`${
              tab == "profile" ? activeTabClass : inactiveTabClass
            } `}
          >
            <Link to="/dashboard-copy/profile">
              <FaRegUser className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />

              <span className="lg:block hidden">Profile</span>
            </Link>
          </li>
          <li
            onClick={() => setTab("settings")}
            className={`${
              tab == "settings" ? activeTabClass : inactiveTabClass
            } `}
          >
            <Link to="/dashboard-copy/settings">
              <FaUserEdit className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />

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
        </div>
      </div>
      {/* dashboard Outlet part */}
      <div className="drawer-content pt-8 px-5 w-[90%] lg:w-[82%]">
        <Outlet />
      </div>
    </section>
  );
};

export default DashboardCopy;
