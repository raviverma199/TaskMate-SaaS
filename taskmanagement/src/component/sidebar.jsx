import React from "react";
import { FaHome, FaClipboardList, FaTasks } from "react-icons/fa"; // Importing icons from react-icons
import { Link } from "react-router-dom";
import banner from '../Assests/images/img-4.png'

const Sidebar = () => {
  return (
    <aside className="w-60 bg-white shadow-md h-screen flex flex-col">
      <div className="p-6 flex items-center justify-center border-b border-gray-200">
        <h1 className="text-2xl font-bold text-blue-600">Task Manager</h1>
      </div>
      
      <nav className="mt-6 flex-grow">
        <Link
          to="/dashboard"
          className="flex items-center py-3 px-4 rounded-lg hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-medium transition-all"
        >
          <FaHome className="mr-3 text-lg" />
          Home
        </Link>
        
        <Link
          to="#"
          className="flex items-center py-3 px-4 rounded-lg hover:bg-blue-100 hover:text-blue-600 text-gray-700 font-medium transition-all"
        >
          <FaClipboardList className="mr-3 text-lg" />
          Status Updates
        </Link>
      </nav>

      {/* Footer Section */}
      <div className="mt-auto p-6 bg-gray-100 border-t border-gray-200 flex items-center justify-center flex-col">
        <FaTasks className="text-4xl text-gray-500 mb-4" />
        <p className="text-sm text-gray-600">Manage Your Tasks Efficiently</p>
        {/* You can replace the below image URL with your task management-related image */}
        <img
          src={banner} // Replace this with your image URL
          alt="Task Management"
          className="mt-4 w-16 h-16 rounded-full"
        />
      </div>
    </aside>
  );
};

export default Sidebar;
