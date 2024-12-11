import React from "react";
import { FaCheckCircle, FaSpinner, FaExclamationCircle } from "react-icons/fa"; // Importing icons

const Dashboard = () => {
  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="flex items-center justify-between bg-gradient-to-r from-purple-600 to-blue-500 text-white p-6 rounded-lg shadow-md">
        <div>
          <h1 className="text-3xl font-bold">Team Dashboard</h1>
          <p className="text-lg">Lead your team to success!</p>
        </div>
      </header>

      {/* Quick Stats */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {/* Stat Cards */}
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-700">Total Team Members</h3>
          <div className="flex items-center">
            <FaCheckCircle className="text-purple-600 mr-2 text-xl" />
            <p className="text-3xl font-bold text-purple-600">15</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-700">Tasks In Progress</h3>
          <div className="flex items-center">
            <FaSpinner className="text-blue-600 mr-2 animate-spin text-xl" />
            <p className="text-3xl font-bold text-blue-600">8</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-700">Pending Approvals</h3>
          <div className="flex items-center">
            <FaExclamationCircle className="text-yellow-600 mr-2 text-xl" />
            <p className="text-3xl font-bold text-yellow-600">5</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
          <h3 className="text-lg font-semibold text-gray-700">Completed Tasks</h3>
          <div className="flex items-center">
            <FaCheckCircle className="text-green-600 mr-2 text-xl" />
            <p className="text-3xl font-bold text-green-600">20</p>
          </div>
        </div>
      </section>

      {/* Team Members Overview */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-700">Team Members</h2>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden mt-4">
          <table className="w-full table-auto border-separate border-spacing-0 border border-gray-300">
            <thead className="bg-gray-200">
              <tr className="text-gray-700">
                <th className="py-3 px-6 text-left text-sm font-semibold border border-gray-300">Name</th>
                <th className="py-3 px-6 text-left text-sm font-semibold border border-gray-300">Role</th>
                <th className="py-3 px-6 text-left text-sm font-semibold border border-gray-300">Current Task</th>
                <th className="py-3 px-6 text-left text-sm font-semibold border border-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {[ 
                {
                  name: "Ravi",
                  role: "Frontend Developer",
                  task: "UI Redesign",
                  status: "In Progress",
                },
                {
                  name: "Amit",
                  role: "Backend Developer",
                  task: "API Integration",
                  status: "Pending",
                },
                {
                  name: "Sumit",
                  role: "QA Engineer",
                  task: "Testing Module X",
                  status: "Completed",
                },
              ].map((member, index) => (
                <tr
                  key={index}
                  className={`hover:bg-gray-50 transition-all duration-200 ${
                    index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                  }`}
                >
                  <td className="py-4 px-6 text-sm border border-gray-300">{member.name}</td>
                  <td className="py-4 px-6 text-sm border border-gray-300">{member.role}</td>
                  <td className="py-4 px-6 text-sm border border-gray-300">{member.task}</td>
                  <td className="py-4 px-6 text-sm border border-gray-300">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        member.status === "Completed"
                          ? "bg-green-100 text-green-800"
                          : member.status === "In Progress"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                      }`}
                    >
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Recent Updates */}
      <section className="mt-8">
        <h2 className="text-2xl font-bold text-gray-700">Recent Updates</h2>
        <ul className="space-y-4 mt-4">
          <li className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold text-gray-800">New Task Assigned</p>
            <p className="text-sm text-gray-600">
              Manish was assigned the "UI Redesign" task on Dec 3rd.
            </p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold text-gray-800">Task Completed</p>
            <p className="text-sm text-gray-600">
              Rahul completed the "Testing Module X" task.
            </p>
          </li>
          <li className="bg-white p-4 rounded-lg shadow-md">
            <p className="font-semibold text-gray-800">Meeting Scheduled</p>
            <p className="text-sm text-gray-600">
              Team standup scheduled for Dec 5th at 10:00 AM.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
