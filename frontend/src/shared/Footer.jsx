import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import brandLogo from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-700 border">
      <div className="mx-auto px-4 lg:px-10 py-5">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Section */}
          <div>
            <div className="flex items-center">
              <img src={brandLogo} alt="" className="w-11" />
              <h1 className="text-3xl font-bold text-orange-600">Power Hack</h1>
            </div>
            <p className="mt-4 text-gray-600">
              Revolutionizing energy billing with efficiency, transparency, and
              simplicity. Join us for a brighter future!
            </p>
            <div className="flex items-center space-x-4 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="Power Hack"
                className="p-3 rounded-full hover:bg-gray-700 bg-blue-600 transition"
              >
                <FaFacebookF size={20} className="text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="Power Hack"
                className="p-3 rounded-full hover:bg-gray-700 bg-blue-400 transition"
              >
                <FaTwitter size={20} className="text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="Power Hack"
                className="p-3 rounded-full hover:bg-gray-700 bg-pink-500 transition"
              >
                <FaInstagram size={20} className="text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="Power Hack"
                className="p-3 rounded-full hover:bg-gray-700 bg-blue-800 transition"
              >
                <FaLinkedinIn size={20} className="text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="Power Hack"
                className="p-3 rounded-full hover:bg-gray-700 bg-red-600 transition"
              >
                <FaYoutube size={20} className="text-white" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-xl font-semibold text-violet-600 mb-4">
              Navigation
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-indigo-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-600 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-600 transition">
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-indigo-600 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold text-violet-600 mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="hover:text-indigo-600 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-600 transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-indigo-600 transition"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-indigo-600 transition"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h2 className="text-xl font-semibold text-violet-600 mb-4">
              Newsletter
            </h2>
            <p className="text-gray-600 mb-4">
              Subscribe to receive the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 focus:outline-none"
              />
              <button
                type="submit"
                className="bg-violet-600 hover:bg-indigo-600 text-white px-3 py-3 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-3"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-black">
            &copy; {new Date().getFullYear()} Power Hack. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link to="/about" className="hover:text-indigo-600 transition">
              Privacy Policy
            </Link>
            <Link to="/about" className="hover:text-indigo-600 transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
