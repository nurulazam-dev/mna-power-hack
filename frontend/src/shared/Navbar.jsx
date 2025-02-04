import { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import brandLogo from "../assets/images/logo.png";
import { authContext } from "../context/AuthContext";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  const liClass = `md:inline-block md:ml-8 ml-5 md:my-0 my-2`;

  const navLinkClass = `text-orange-600 cursor-pointer font-bold inline-block my-3 border-b-2 border-transparent hover:border-pink-700 duration-300`;

  const activeNavLinkClass = `text-orange-600 cursor-pointer font-bold inline-block my-3 border-b-2 border-pink-700`;

  const navBtnClass = `cursor-pointer font-bold inline-block border border-pink-700 px-3 py-1 rounded hover:text-white`;

  const liBtnClass = `md:inline-block md:ml-7 ml-5 my-0`;

  const { user, token, dispatch } = useContext(authContext);

  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  const allNavLinks = [
    {
      path: "/",
      display: "Home",
    },

    {
      path: "/about",
      display: "About",
    },
    {
      path: "/contact",
      display: "Contact",
    },
    {
      path: "/dashboard",
      display: "Dashboard",
    },
  ];

  const navLinks = (
    <>
      {allNavLinks.map((link, index) => (
        <li key={index} className={liClass}>
          <NavLink
            to={link.path}
            className={(navClass) =>
              navClass.isActive ? activeNavLinkClass : navLinkClass
            }
          >
            {link.display}
          </NavLink>
        </li>
      ))}

      {token && user ? (
        <li className={liBtnClass}>
          <button
            onClick={handleLogOut}
            className={`text-red-600 hover:bg-red-600 ${navBtnClass}`}
          >
            LogOut
          </button>
        </li>
      ) : (
        <li className={liBtnClass}>
          <NavLink
            to="/login"
            className={`text-slate-600 hover:bg-slate-800 ${navBtnClass}`}
          >
            Login
          </NavLink>
        </li>
      )}
    </>
  );

  return (
    <header className="bg-slate-100 shadow-md top-0 py-[3px] fixed w-full z-50 flex items-center justify-between">
      <div
        className="md:hidden fixed right-5 cursor-pointer z-50"
        style={{ color: "white" }}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg
            className="swap-on fill-current text-red-600"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        ) : (
          <svg
            className="swap-off fill-current text-orange-600"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>
        )}
      </div>
      <NavLink
        to="/"
        className="flex justify-between items-center text-2xl font-extrabold text-orange-600 pl-3"
      >
        <img src={brandLogo} alt="Brand_Logo" className="w-[36px] h-9" />
        <h2 className="ml-1 hidden lg:block">
          POWER <span className="text-black">HACK</span>
        </h2>
      </NavLink>
      <ul
        className={`md:pl-10 lg:pr-10 pr-20 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 bg-slate-100 ${
          !open ? "right-[-100%] " : "right-0"
        }`}
      >
        {navLinks}
      </ul>
    </header>
  );
};

export default Navbar;
