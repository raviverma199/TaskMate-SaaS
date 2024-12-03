import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBell } from 'react-icons/fa';

const Header = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
      {/* Left Section - Logo & Navigation */}
      <div className="flex items-center space-x-8">
        {/* Logo */}
        {location.pathname !== "/dashboard" && (
          <h1 className="text-blue-600 text-2xl font-bold transition-all duration-300 hover:scale-105">
            TaskManager
          </h1>
        )}
        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-3">
          <Link
            to="/dashboard"
            className={`text-gray-700 font-medium transition-all duration-300 relative ${
              isActive("/dashboard") ? "text-blue-600 font-semibold bg-blue-100 rounded-lg py-2 px-3" : ""
            } hover:text-blue-600 hover:bg-blue-50 rounded-lg py-2 px-3`}
          >
            Dashboard
            {isActive("/dashboard") && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600"></span>
            )}
          </Link>
          <Link
            to="/projects"
            className={`text-gray-700 font-medium transition-all duration-300 relative ${
              isActive("/projects") ? "text-blue-600 font-semibold bg-blue-100 rounded-lg py-2 px-3" : ""
            } hover:text-blue-600 hover:bg-blue-50 rounded-lg py-2 px-3`}
          >
            Projects
            {isActive("/projects") && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600"></span>
            )}
          </Link>
          <Link
            to="/teams"
            className={`text-gray-700 font-medium transition-all duration-300 relative ${
              isActive("/teams") ? "text-blue-600 font-semibold bg-blue-100 rounded-lg py-2 px-3" : ""
            } hover:text-blue-600 hover:bg-blue-50 rounded-lg py-2 px-3`}
          >
            Teams
            {isActive("/teams") && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600"></span>
            )}
          </Link>
          <Link
            to="/reports"
            className={`text-gray-700 font-medium transition-all duration-300 relative ${
              isActive("/reports") ? "text-blue-600 font-semibold bg-blue-100 rounded-lg py-2 px-3" : ""
            } hover:text-blue-600 hover:bg-blue-50 rounded-lg py-2 px-3`}
          >
            Reports
            {isActive("/reports") && (
              <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600"></span>
            )}
          </Link>
        </nav>
      </div>

      {/* Right Section - Search, Notifications, Profile */}
      <div className="flex items-center space-x-6">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 w-60 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 hover:ring-2 hover:ring-blue-300"
          />
          <i className="fas fa-search absolute right-4 top-3 text-gray-400"></i>
        </div>

        {/* Notification Icon */}
        <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-all duration-200">
          <FaBell className="text-gray-600 text-lg" />
          <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
            5
          </span>
        </button>

        {/* User Profile with Dropdown */}
        <div className="relative">
          <div className="flex items-center space-x-2 cursor-pointer group transition-all duration-200 hover:scale-105">
            <div className="w-10 h-10 rounded-full bg-gray-200 text-blue-600 flex items-center justify-center font-bold text-lg">
              RV
            </div>
            <i className="fas fa-chevron-down text-gray-600"></i>
          </div>
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block z-10">
            <Link
              to="/profile"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Profile
            </Link>
            <Link
              to="/settings"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              Settings
            </Link>
            <Link
              to="/logout"
              className="block px-4 py-2 text-red-600 hover:bg-red-100"
            >
              Logout
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
