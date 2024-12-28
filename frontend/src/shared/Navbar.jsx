import { useState } from "react";
import { NavLink } from "react-router-dom";
import brandLogo from "../assets/images/logo.png";

const Navbar = () => {
  let [open, setOpen] = useState(false);

  const liClass = `md:inline-block md:ml-10 ml-5 md:my-0 my-2`;
  const navLinkClass = `text-white cursor-pointer font-Barlow font-normal text-base inline-block my-3 border-b-2 border-transparent hover:border-pink-700 duration-300`;

  /* const handleLogOut = () => {
    localStorage.removeItem("token");
        window.location.reload();
  }; */

  const navLinks = (
    <>
      <li className={liClass}>
        <h3 className="text-white font-Barlow font-normal text-base inline-block my-3">
          Paid Total:
          <strong className="font-bold text-yellow-500 pl-2">00</strong>
        </h3>
      </li>
      <li className={liClass}>
        <NavLink to="/" className={navLinkClass}>
          Home
        </NavLink>
      </li>
      <li className={liClass}>
        <NavLink to="/login" className={navLinkClass}>
          Login
        </NavLink>
      </li>

      {/*  {user ? (
        <li className={liClass}>
          <button
            onClick={handleLogOut}
            className={`btn btn-ghost ${navLinkClass}`}
          >
            LogOut
          </button>
        </li>
      ) : (
        <li className={liClass}>
          <NavLink to="/login" className={navLinkClass}>
            Login
          </NavLink>
        </li>
      )} */}
    </>
  );

  return (
    <header className="bg-[#19223a] top-0 py-[6px] fixed w-full z-50 flex items-center justify-between">
      <div
        className="md:hidden fixed right-5 cursor-pointer z-50"
        style={{ color: "white" }}
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        ) : (
          <svg
            className="swap-off fill-current"
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
        className="flex justify-between items-center text-xl font-bold text-white pl-3"
      >
        <img src={brandLogo} alt="Brand_Logo" className="w-[36px] h-9" />
        <h2 className="ml-1 hidden lg:block">POWER HACK</h2>
      </NavLink>
      <ul
        className={`bg-[#19223a] md:pl-10 lg:pr-10 pr-20 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 ${
          !open ? "right-[-100%] " : "right-0"
        }`}
      >
        {navLinks}
      </ul>
    </header>
  );
};

export default Navbar;
