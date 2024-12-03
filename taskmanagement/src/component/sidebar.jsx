import React from "react";
import { FaHome, FaClipboardList } from "react-icons/fa"; // Importing icons from react-icons
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-60 bg-white shadow-md h-screen">
      <div className="p-6 flex items-center justify-center border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600">Task Manager</h1>
      </div>
      <nav className="mt-6">
        
          <Link to='/dashboard' className="flex items-center py-3 px-4 rounded-lg hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-medium transition-all">
          <FaHome className="mr-3 text-lg" />
          Home
          </Link>
        <Link to='#' className="flex items-center py-3 px-4 rounded-lg hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-medium transition-all">
          <FaClipboardList className="mr-3 text-lg" />
          Status Updates
          </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
