import React from 'react';
import { FaHome, FaSearch, FaBell, FaUserAlt, FaCog } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md p-5">
        <div className="text-lg font-bold mb-6">My Dashboard</div>
        <nav>
          <ul>
            <li className="mb-4 hover:text-blue-600 cursor-pointer">
              <FaHome className="inline-block mr-2" />
              Home
            </li>
            <li className="mb-4 hover:text-blue-600 cursor-pointer">
              <FaSearch className="inline-block mr-2" />
              Search
            </li>
            <li className="mb-4 hover:text-blue-600 cursor-pointer">
              <FaBell className="inline-block mr-2" />
              Notifications
            </li>
            <li className="mb-4 hover:text-blue-600 cursor-pointer">
              <FaUserAlt className="inline-block mr-2" />
              Profile
            </li>
            <li className="mb-4 hover:text-blue-600 cursor-pointer">
              <FaCog className="inline-block mr-2" />
              Settings
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <div className="text-xl font-semibold">Dashboard</div>
          <div className="flex space-x-6">
            <FaSearch className="text-2xl cursor-pointer hover:text-gray-600" />
            <FaBell className="text-2xl cursor-pointer hover:text-gray-600" />
            <FaUserAlt className="text-2xl cursor-pointer hover:text-gray-600" />
          </div>
        </div>

        {/* Widgets */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Recent Updates */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Recent Updates</h3>
            <ul className="space-y-3">
              <li className="text-sm">New document created by John</li>
              <li className="text-sm">Team meeting scheduled for Monday</li>
              <li className="text-sm">Task "Update marketing plan" completed</li>
            </ul>
          </div>

          {/* Upcoming Tasks */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Upcoming Tasks</h3>
            <ul className="space-y-3">
              <li className="text-sm">Finish writing the report</li>
              <li className="text-sm">Update project documentation</li>
              <li className="text-sm">Send client feedback</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li className="text-sm hover:text-blue-600 cursor-pointer">Project Overview</li>
              <li className="text-sm hover:text-blue-600 cursor-pointer">Team Members</li>
              <li className="text-sm hover:text-blue-600 cursor-pointer">Knowledge Base</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
