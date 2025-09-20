import React, { useState, useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    setMenuOpen(false); // ✅ close menu on mobile
    navigate("/login");
  };

  const linkClass = ({ isActive }) =>
    `block px-3 py-2 rounded-md text-base md:text-sm transition-colors duration-200 ${
      isActive
        ? "text-green-600 font-semibold bg-green-50 md:bg-transparent"
        : "text-[#3b2c20] hover:text-green-600 hover:bg-green-50 md:hover:bg-transparent"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-white px-6 py-2 flex items-center justify-between z-50 shadow-md">
      {/* Logo */}
      <NavLink to="/" className="flex items-center space-x-2">
        <span
          className="text-3xl text-green-600 transition-colors cursor-pointer"
          aria-hidden
        >
          ♡
        </span>
        <h1 className="text-lg font-bold text-[#3b2c20]">
          गो रक्षक Foundation
        </h1>
      </NavLink>

      {/* Right group */}
      <div className="flex items-center space-x-4">
        {/* Menu */}
        <ul
          id="nav-menu"
          className={`${
            menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } md:max-h-none md:opacity-100 md:flex md:items-center md:space-x-6 
          overflow-hidden transition-all duration-300 ease-in-out 
          absolute md:static right-6 top-14 md:top-auto 
          w-56 md:w-auto bg-white md:bg-transparent 
          shadow-lg md:shadow-none rounded-lg md:rounded-none z-50`}
        >
          <li>
            <NavLink
              to="/"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/donate"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Donate
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/feedback"
              className={linkClass}
              onClick={() => setMenuOpen(false)}
            >
              Feedback
            </NavLink>
          </li>
          <li className="mt-2 md:mt-0">
            {isLoggedIn ? (
              <button
                onClick={handleLogout}
                className="w-full md:w-auto bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-md text-base font-semibold"
              >
                Logout
              </button>
            ) : (
              <NavLink
                to="/login"
                className="w-full md:w-auto block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-md text-base font-semibold text-center"
                onClick={() => setMenuOpen(false)}
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden text-3xl text-[#3b2c20] p-2 rounded-md hover:bg-gray-100 focus:outline-none"
          onClick={() => setMenuOpen((s) => !s)}
          aria-expanded={menuOpen}
          aria-controls="nav-menu"
        >
          {menuOpen ? "✖" : "☰"}
        </button>
      </div>
    </nav>
  );
}
