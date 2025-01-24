import { Link, Outlet } from "react-router-dom";
import { TbHomeStats } from "react-icons/tb";
import { FaUsersCog, FaRegUser, FaUserEdit } from "react-icons/fa";
import { RiBillLine } from "react-icons/ri";

const DashboardCopy = () => {
  return (
    <section className="my-10 pr-5 flex w-full">
      {/* side bar part */}
      <div className="border-r bg-slate-700 text-white pt-4 lg:w-1/5 md:w-1/6 w-1/12 h-screen">
        <ul className="menu p-4 text-white text-[18px]">
          <div className="lg:block md:block hidden">
            <div className="flex justify-center mb-3">
              brandLogo
              {/* <img
                src={brandLogo}
                alt=""
                className="lg:w-[180px] md:w-[130px] w-[100px]"
              /> */}
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
            <Link to="/dashboard-copy/manage-users">
              <FaUsersCog className="lg:mr-3 md:mr-2 mr-0" />
              <span className="lg:block hidden">Manage Users</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard-copy/manage-bills">
              <RiBillLine className="lg:mr-3 md:mr-2 mr-0" />

              <span className="lg:block hidden">Manage Bills</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard-copy/manage-bills">
              <FaRegUser className="lg:mr-3 md:mr-2 mr-0" />

              <span className="lg:block hidden">Profile</span>
            </Link>
          </li>
          <li>
            <Link to="/dashboard-copy/manage-bills">
              <FaUserEdit className="lg:mr-3 md:mr-2 mr-0" />

              <span className="lg:block hidden">Settings</span>
            </Link>
          </li>

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
      <div className="drawer-content pt-8 pr-5 lg:w-4/5 md:w-4/6 w-10/12">
        <Outlet />
      </div>
    </section>
  );
};

export default DashboardCopy;
