import { TbHomeStats } from "react-icons/tb";
import { FaUsersCog, FaRegUser, FaUserEdit } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";
import { useState } from "react";
import ManageUsers from "../components/Dashboard/ManageUsers";
import ManageBills from "../components/Dashboard/ManageBills";
import Overview from "../components/Dashboard/Overview";

const Dashboard = () => {
  const [tab, setTab] = useState("overview");

  const activeTabClass =
    "bg-slate-100 text-indigo-600 w-full mb-3 rounded-md flex items-center lg:justify-start justify-center lg:px-5 lg:py-2 px-1";
  const inactiveTabClass =
    "bg-transparent text-white w-full mb-3 rounded-md flex items-center lg:justify-start justify-center lg:px-5 lg:py-2 px-1";
  return (
    <section className="mx-auto">
      <div className="flex w-full mx-auto">
        {/* =======================
                   Tabs
          ========================= */}
        <div className="w-[10%] lg:w-[20%] lg:py-6 lg:px-[20px] px-1 pb-3 rounded-md shadow-md bg-violet-600 h-screen lg:mr-0 mr-[6px] p-5 mt-10 text-white">
          <div className="text-3xl text-center font-bold mb-4">Dashboard</div>
          <button
            onClick={() => setTab("overview")}
            className={`${
              tab == "overview" ? activeTabClass : inactiveTabClass
            }`}
          >
            <TbHomeStats className="w-7 h-7" />
            <p className="ml-3 hidden lg:block">Overview</p>
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
            onClick={() => setTab("manageUsers")}
            className={`${
              tab == "manageUsers" ? activeTabClass : inactiveTabClass
            } `}
          >
            <FaUsersCog className="w-7 h-7" />
            <p className="ml-3 hidden lg:block">Manage Users</p>
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
        <div className="w-[90%] lg:w-[80%] lg:px-0 px-3 lg:mx-5 rounded-md lg:rounded-none shadow-md lg:shadow-none lg:mt-20">
          <div className="lg:px-0 px-[10px]">
            {tab == "overview" && <Overview />}
            {tab == "manageUsers" && <ManageUsers />}
            {tab == "manageBills" && <ManageBills />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
