import { Link } from "react-router-dom";
import { TbHomeStats } from "react-icons/tb";
import { FaUsersCog, FaRegUser, FaUserEdit } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="w-48 h-screen bg-violet-600 p-5 mt-12 text-white">
      <div className="text-3xl font-bold mb-2">Dashboard</div>
      <ul className="menu px-1 py-0">
        <li>
          <Link
            to="/"
            className="btn btn-ghost flex justify-start items-center text-[16px] p-0"
          >
            <TbHomeStats />
            Dashboard
          </Link>
        </li>
        <li>
          <Link
            to="/manage-users"
            className="btn btn-ghost flex text-[16px] justify-start items-center p-0"
          >
            <FaUsersCog />
            Manage Users
          </Link>
        </li>
        <li>
          <Link
            to="/manage-bills"
            className="btn btn-ghost flex text-[16px] justify-start items-center p-0"
          >
            <RiBillLine />
            Manage Bills
          </Link>
        </li>
        <li>
          <Link
            to="/profile"
            className="btn btn-ghost flex text-[16px] justify-start items-center p-0"
          >
            <FaRegUser />
            Profile
          </Link>
        </li>
        <li>
          <Link
            to="/settings"
            className="btn btn-ghost flex text-[16px] justify-start items-center p-0"
          >
            <FaUserEdit />
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
