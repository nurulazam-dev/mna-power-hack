import { TbHomeStats } from "react-icons/tb";
import { FaUsersCog, FaRegUser, FaUserEdit } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import { useState } from "react";
import Dashboard from "../components/Dashboard/Dashboard";
import ManageUsers from "../components/Dashboard/ManageUsers";
import ManageBills from "../components/Dashboard/ManageBills";

const MainDashboard = () => {
  const [tab, setTab] = useState("dashboard");

  const activeTabClass =
    "bg-slate-100 text-indigo-600 w-full mt-0 rounded-md flex items-center lg:justify-start justify-center lg:px-5 lg:py-2 px-1";
  const inactiveTabClass =
    "bg-transparent text-white w-full mt-0 rounded-md flex items-center lg:justify-start justify-center lg:px-5 lg:py-2 px-1";

  return (
    <section className="px-5 mx-auto my-6">
      <div className="flex w-full mx-auto">
        {/* =======================
                   Tabs
          ========================= */}
        <div className="w-[13%] lg:w-[25%] lg:py-6 lg:px-[20px] px-1 pb-3 rounded-md shadow-md bg-violet-700 h-max lg:mr-0 mr-[6px]">
          <button
            onClick={() => setTab("dashboard")}
            className={`${
              tab == "dashboard" ? activeTabClass : inactiveTabClass
            }`}
          >
            <TbHomeStats className="w-7 h-7" />
            <p className="ml-3 hidden lg:block">Dashboard</p>
          </button>
          <button
            onClick={() => setTab("manageUsers")}
            className={`${
              tab == "manageUsers" ? activeTabClass : inactiveTabClass
            } `}
          >
            <FaUsersCog className="w-7 h-7" />
            <p className="ml-3 hidden lg:block">Manage Users</p>
          </button>
          <button
            onClick={() => setTab("manageBills")}
            className={`${
              tab == "manageBills" ? activeTabClass : inactiveTabClass
            } `}
          >
            <RiBillLine className="w-7 h-7" />
            <p className="ml-3 hidden lg:block">Manage Bills</p>
          </button>
          <button
            onClick={() => setTab("profile")}
            className={`${
              tab == "profile" ? activeTabClass : inactiveTabClass
            } `}
          >
            <FaRegUser className="w-7 h-7" />
            <p className="ml-3 hidden lg:block">Profile</p>
          </button>
          <button
            onClick={() => setTab("settings")}
            className={`${
              tab == "settings" ? activeTabClass : inactiveTabClass
            } `}
          >
            <FaUserEdit className="w-7 h-7" />
            <p className="ml-3 hidden lg:block">Settings</p>
          </button>
        </div>

        {/* =======================
                   Layout
          ========================= */}
        <div className="w-[87%] lg:w-[75%] lg:px-0 px-3 lg:ml-8 rounded-md lg:rounded-none shadow-md lg:shadow-none ">
          <div className="lg:px-0 px-[10px]">
            {tab == "dashboard" && <Dashboard />}
            {tab == "manageUsers" && <ManageUsers />}
            {tab == "manageBills" && <ManageBills />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainDashboard;
