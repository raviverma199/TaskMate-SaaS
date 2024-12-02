import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white px-6 py-4 shadow-md">
    {/* Left Section - Logo & Navigation */}
    <div className="flex items-center space-x-8">
      {/* Logo */}
      <h1 className="text-blue-600 text-2xl font-bold">Logo</h1>
  
      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-6">
        <Link to='/dashboard' className="text-gray-700 font-medium hover:text-blue-600 transition relative">
          Dashboard
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 transition-all"></span>
          </Link>
        

        <Link to='/projects' className="text-gray-700 font-medium hover:text-blue-600 transition relative">
          Projects
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 transition-all"></span>
     
        </Link>
        <a
          href="#"
          className="text-gray-700 font-medium hover:text-blue-600 transition relative"
        >
          Teams
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 transition-all"></span>
        </a>
        <a
          href="#"
          className="text-gray-700 font-medium hover:text-blue-600 transition relative"
        >
          Reports
          <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 transition-all"></span>
        </a>
      </nav>
    </div>
  
    {/* Right Section - Search, Notifications, Profile */}
    <div className="flex items-center space-x-6">
      {/* Search Bar */}
      <div className="relative hidden md:block">
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 w-60 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-200 focus:outline-none"
        />
        <i className="fas fa-search absolute right-4 top-3 text-gray-400"></i>
      </div>
  
      {/* Notification Icon */}
      <button className="relative p-2 rounded-full bg-gray-100 hover:bg-gray-200">
        <i className="fas fa-bell text-gray-600 text-lg"></i>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">
          5
        </span>
      </button>
  
      {/* User Profile with Dropdown */}
      <div className="relative group">
        <div className="flex items-center space-x-2 cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-gray-200 text-blue-600 flex items-center justify-center font-bold text-lg">
            RV
          </div>
          <i className="fas fa-chevron-down text-gray-600"></i>
        </div>
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg hidden group-hover:block z-10">
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Profile
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
          >
            Settings
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-red-600 hover:bg-red-100"
          >
            Logout
          </a>
        </div>
      </div>
    </div>
  </header>
  
  );
};

export default Header;
