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
    <footer className="bg-slate-100 text-gray-700">
      <div className="container mx-auto px-6 lg:px-16 py-12">
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
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-gray-700 bg-blue-600 transition"
              >
                <FaFacebookF size={20} className="text-white" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-gray-700 bg-blue-400 transition"
              >
                <FaTwitter size={20} className="text-white" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-gray-700 bg-pink-500 transition"
              >
                <FaInstagram size={20} className="text-white" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full hover:bg-gray-700 bg-blue-800 transition"
              >
                <FaLinkedinIn size={20} className="text-white" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
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
                <Link to="/" className="hover:text-white transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition">
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
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-white transition">
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
            <p className="text-gray-400 mb-4">
              Subscribe to receive the latest updates and offers.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-l-lg focus:outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-r-lg transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-700">
            &copy; {new Date().getFullYear()} Power Hack. All rights reserved.
          </p>
          <div className="flex space-x-4 text-sm">
            <Link to="/privacy" className="hover:text-white transition">
              Privacy Policy
            </Link>
            <Link to="/terms" className="hover:text-white transition">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
