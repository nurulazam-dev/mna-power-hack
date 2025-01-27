import { Link, Outlet } from "react-router-dom";
import { TbHomeStats } from "react-icons/tb";
import { FaUsersCog, FaRegUser, FaUserEdit } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import brandLogo from "../assets/images/logo.png";
import { useContext, useState } from "react";
import { authContext } from "../context/AuthContext";

const Dashboard = () => {
  const [tab, setTab] = useState("overview");
  const { role } = useContext(authContext);

  const activeTabClass =
    "bg-slate-100 text-indigo-600 w-full mb-3 rounded-md flex items-center lg:justify-start justify-center lg:px-4 lg:py-2 px-1";
  const inactiveTabClass =
    "bg-transparent text-white w-full mb-3 rounded-md flex items-center lg:justify-start justify-center lg:px-4 lg:py-2 px-1";
  return (
    <section className="py-10 pr-5 flex w-full">
      {/* side bar part */}
      <div className="bg-slate-700 text-white pt-4 w-[10%] lg:w-[16%] max-h-screen">
        <div className="py-4 px-2 text-white text-[17px] space-y-2">
          <div className="lg:block md:block hidden">
            {/* logo part */}
            <div className="flex justify-center items-center text-xl font-bold text-yellow-600 mb-3">
              <img src={brandLogo} alt="Brand_Logo" className="w-[36px] h-9" />
              <h2 className="ml-2 hidden lg:block">DASHBOARD</h2>
            </div>
            <hr className="mb-2" />
          </div>

          <Link
            to="/dashboard"
            onClick={() => setTab("overview")}
            className={`${
              tab == "overview" ? activeTabClass : inactiveTabClass
            }`}
          >
            <TbHomeStats className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />
            <span className="lg:block hidden">Overview</span>
          </Link>

          {role === "billingOfficer" || role === "admin" ? (
            <Link
              to="/dashboard/add-bill"
              onClick={() => setTab("addBill")}
              className={`${
                tab == "addBill" ? activeTabClass : inactiveTabClass
              } `}
            >
              <RiBillLine className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />
              <span className="lg:block hidden">Add Bill</span>
            </Link>
          ) : null}
          {role === "accountant" || role === "admin" ? (
            <Link
              to="/dashboard/unpaid-bills"
              onClick={() => setTab("unpaidBills")}
              className={`${
                tab == "unpaidBills" ? activeTabClass : inactiveTabClass
              } `}
            >
              <RiBillLine className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />
              <span className="lg:block hidden">Unpaid Bills</span>
            </Link>
          ) : null}
          {role === "admin" ? (
            <>
              <Link
                to="/dashboard/manage-bills"
                onClick={() => setTab("manageBills")}
                className={`${
                  tab == "manageBills" ? activeTabClass : inactiveTabClass
                } `}
              >
                <RiBillLine className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />
                <span className="lg:block hidden">Manage Bills</span>
              </Link>
              <Link
                to="/dashboard/manage-users"
                onClick={() => setTab("manageUsers")}
                className={`${
                  tab == "manageUsers" ? activeTabClass : inactiveTabClass
                } `}
              >
                <FaUsersCog className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />
                <span className="lg:block hidden">Manage Users</span>
              </Link>
            </>
          ) : null}

          <Link
            to="/dashboard/profile"
            onClick={() => setTab("profile")}
            className={`${
              tab == "profile" ? activeTabClass : inactiveTabClass
            } `}
          >
            <FaRegUser className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />
            <span className="lg:block hidden">Profile</span>
          </Link>
          <Link
            to="/dashboard/settings"
            onClick={() => setTab("settings")}
            className={`${
              tab == "settings" ? activeTabClass : inactiveTabClass
            } `}
          >
            <FaUserEdit className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />
            <span className="lg:block hidden">Settings</span>
          </Link>
          <hr className="mb-2" />
          <Link
            to="/dashboard/respTest"
            onClick={() => setTab("respTest")}
            className={`${
              tab == "respTest" ? activeTabClass : inactiveTabClass
            } `}
          >
            <FaUserEdit className="w-7 h-7 lg:mr-3 md:mr-2 mr-0" />
            <span className="lg:block hidden">resp Test</span>
          </Link>
          <hr className="mb-2" />
        </div>
      </div>
      {/* dashboard Outlet part */}
      <div className="drawer-content p-6 w-[90%] lg:w-[84%]">
        <Outlet />
      </div>
    </section>
  );
};

export default Dashboard;
